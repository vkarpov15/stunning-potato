require('unfetch');
require('./nav.jsx');

const React = require('preact');
const http = require('./http');
const linkstate = require('linkstate').default;
const mitt = require('mitt').default;
const qs = require('query-string');

const config = require('../config');
const root = config.root;
console.log(root, config.stripe);
const stripe = Stripe(config.stripe);
console.log(stripe.createToken)

const events$ = mitt();
const state$ = mitt();
let state = { loading: true };

events$.on('UPDATE_PROFILE', $wrap(async({ account }) => {
  state = Object.assign({}, state, { saving: true });
  state$.emit('UPDATE', state);

  const opts = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: window.localStorage.getItem('token')
    },
    body: JSON.stringify(account)
  };
  const res = await fetch(`${root}/me`, opts).then(res => res.json());

  state = Object.assign({}, { saving: false });
  state$.emit('UPDATE', state);
}));

events$.on('DELETE_PACKAGE', $wrap(async ({ accountId, pkg }) => {
  const account = state.accounts.find(acc => acc._id === accountId);

  const packagesWatched = account.packagesWatched.filter(_pkg => _pkg !== pkg);

  const opts = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: window.localStorage.getItem('token')
    },
    body: JSON.stringify({ packagesWatched, accountId })
  };
  const res = await fetch(`${root}/account`, opts).then(res => res.json());

  const accounts = state.accounts.slice();
  const index = state.accounts.findIndex(acc => acc._id === accountId);
  accounts[index] = res.account;
  state = Object.assign({}, state, { accounts });

  state$.emit('UPDATE', state);
}));

events$.on('ADD_PACKAGE', $wrap(async ({ accountId, pkg }) => {
  const account = state.accounts.find(acc => acc._id === accountId);

  const packagesWatched = account.packagesWatched.concat([pkg]);

  const opts = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: window.localStorage.getItem('token')
    },
    body: JSON.stringify({ packagesWatched, accountId })
  };
  const res = await fetch(`${root}/account`, opts).then(res => res.json());

  const accounts = state.accounts.slice();
  const index = state.accounts.findIndex(acc => acc._id === accountId);
  accounts[index] = res.account;
  state = Object.assign({}, state, { accounts });

  state$.emit('UPDATE', state);
}));

events$.on('SET_PAYMENT', $wrap(async ({ el }) => {
  const stripeToken = await stripe.createToken(el()).then(res => {
    if (res.error) {
      console.log('Emit', res.error)
      events$.emit('SET_PAYMENT_ERROR', res.error);
      return null;
    }
    return res.token.id;
  });

  if (stripeToken == null) {
    return;
  }

  const { customer } = await http.put('/stripe', { stripeToken });

  const updated = Object.assign({}, state.customer, { stripe: customer.stripe });
  state = Object.assign({}, state, { customer: updated });
  state$.emit('UPDATE', state);

  events$.emit('SET_PAYMENT_SUCCESS', {});
}));

events$.on('ERROR', err => {
  console.log(err.stack);
});

function $wrap(fn) {
  return param => fn(param).catch(err => events$.emit('ERROR', err));
}

const Packages = ({ accountId, packages }) => (
  <div>
    {
      packages.map(pkg => (
        <span class="pkg">
          {pkg}&nbsp;
          <span
            class="delete"
            onClick={() => events$.emit('DELETE_PACKAGE', { accountId, pkg })}>
            &#x1f5d9;
          </span>
        </span>
      ))
    }
  </div>
);

class Profile extends React.Component {
  componentDidMount() {
    this.setState(Object.assign({}, this.props.customer));
  }

  render(props, state) {
    return (
      <div class="profile">
        <div class="input-with-label">
          <div class="label">First Name</div>
          <div class="input">
            <input type="text" value={state.firstName} onInput={linkstate(this, 'firstName')} />
          </div>
          <div style="clear: both"></div>
        </div>
        <div class="input-with-label">
          <div class="label">Last Name</div>
          <div class="input">
            <input type="text" value={state.lastName} onInput={linkstate(this, 'lastName')} />
          </div>
          <div style="clear: both"></div>
        </div>
        <div class="input-with-label">
          <div class="label">Email</div>
          <div class="input">
            <input type="text" value={state.email} onInput={linkstate(this, 'customer.email')} />
          </div>
          <div style="clear: both"></div>
        </div>

        <input
          type="button"
          value="Save Profile"
          class="button"
          onClick={() => events$.emit('UPDATE_PROFILE', { account: state })}
          disabled={state.saving} />
      </div>
    );
  }
}

class AddPackage extends React.Component {
  componentDidMount() {
    this.setState({ input: '' });
  }

  render({ accountId }, state) {
    const add = () => events$.emit('ADD_PACKAGE', {
      accountId,
      pkg: state.input
    });
    return (
      <div class="add-package">
        <div class="add-package-input">
          <input
            type="text"
            placeholder="Package Name"
            value={state.input}
            onChange={linkstate(this, 'input')} />
        </div>
        <div class="button" onClick={add}>
          Watch Package
        </div>
      </div>
    );
  }
}

function Integrations(props) {
  return (
    <div class="integrations">
      {
        props.accounts.map(account => (
          <div class="integration">
            <div class="left">
              <div class="input-with-label">
                <div class="label">
                  <img class="slack" src="/images/slack.svg" />
                  Webhook
                </div>
                <div class="input">
                  <input type="text" value={account.slackWebhooks[0]} />
                </div>
                <div style="clear: both"></div>
              </div>
              <div class="input-with-label">
                <div class="label">
                  <img class="slack" src="/images/npm.svg" />
                  Packages
                </div>
                <div class="input">
                  <div class="packages">
                    <Packages
                      accountId={account._id}
                      packages={account.packagesWatched} />
                  </div>
                  <AddPackage accountId={account._id} />
                </div>
                <div style="clear: both"></div>
              </div>
            </div>
            <div class="right">
              <div class="delete" id="delete-${account._id}">
                &#x1f5d9;
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
}

class Billing extends React.Component {
  componentDidMount() {
    console.log('Register billing events')
    events$.on('SET_PAYMENT_ERROR', error => {
      console.log('Got ', error)
      this.setState(Object.assign({}, this.state, { error }));
    });

    events$.on('SET_PAYMENT', () => {
      this.setState(Object.assign({}, this.state, { error: null }));
    });

    events$.on('SET_PAYMENT_SUCCESS', () => {
      this.setState(Object.assign({}, this.state, { error: null }));
    });

    if (this._element == null) {
      this._element = stripe.elements().create('card');
      this._element.mount('#stripe-container');
    }
  }

  render(props, state) {
    const show = { display: 'block' };
    const hide = { display: 'none' };
    const last4 = props.stripe == null ? null : props.stripe.last4;
    return (
      <div class="billing">
        <div class="card-display" style={props.stripe == null ? hide : show}>
          <div class="check">&#x2714;</div>
          <div class="card-description">
            Card ending in {last4}
          </div>
          <div style="clear: both"></div>
        </div>

        <div>
          <h4>Update Payment with Stripe</h4>

          <div id="stripe-container">
          </div>

          <input
            type="button"
            value="Update Payment"
            class="button"
            onClick={() => events$.emit('SET_PAYMENT', { el: () => this._element })} />

          <span class="card-error">
            {state.error == null ? '' : state.error.message}
          </span>
        </div>
      </div>
    );
  }
}

class Dashboard extends React.Component {
  componentDidMount() {
    this.setState(state);

    state$.on('UPDATE', state => this.setState(state));

    const opts = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: window.localStorage.getItem('token')
      }
    };
    fetch(`${root}/me`, opts).
      then(res => res.json()).
      then(res => {
        state = Object.assign({}, res, { loading: false });
        this.setState(state);
      }).
      catch(err => {
        state = Object.assign({}, { err, loading: false });
        this.setState(state);
      });
  }

  render(props, state) {
    if (state.loading !== false) {
      return (<div class="loading">Loading</div>);
    }
    if (state.err) {
      return (
        <div class="loading">
          <p>An error occurred:</p>
          <pre>${state.err.stack}</pre>
        </div>
      );
    }

    return (
      <div class="dashboard">
        <h2>Profile</h2>

        <Profile customer={state.customer} />

        <h2>Billing</h2>

        <h4>For Early Adopters Only</h4>

        Unlimited integrations and watched packages for $9.99 per month, first
        30 days free.

        <Billing customerId={state.customer._id} stripe={state.customer.stripe} />

        <h2>Integrations</h2>

        <Integrations accounts={state.accounts} />

        <h2>Add Integration</h2>

        <a href="https://slack.com/oauth/authorize?scope=incoming-webhook&client_id=80341368871.427593509574">
          <img alt="Add to Slack" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png" srcset="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x" />
        </a>

        <h2>Help</h2>

        Have a question or need a new feature? <a href="https://github.com/js-report/support/issues/new">Open an issue on our GitHub page</a>.
      </div>
    );
  }
}

React.render(<Dashboard></Dashboard>, document.querySelector('#content'));
