require('unfetch');

const React = require('preact');
const linkstate = require('linkstate').default;
const qs = require('query-string');

const root = 'http://localhost:4000'; //'https://s5hqb41ya4.execute-api.us-east-1.amazonaws.com/prod';

let state = { loading: true };

console.log('linkstate', linkstate)

class Profile extends React.Component {
  componentDidMount() {
    this.setState(Object.assign({}, this.props.customer));
  }

  save() {
    return () => {
      this.setState(Object.assign({}, { saving: true }));

      const payload = Object.assign({}, this.state);

      const opts = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          authorization: window.localStorage.getItem('token')
        },
        body: JSON.stringify(payload)
      };
      fetch(`${root}/me`, opts).
        then(res => res.json()).
        then(res => {
          this.setState(Object.assign({}, { saving: false }));
        });
    };
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

        <input type="button" value="Save Profile" class="button" onClick={this.save(state)} disabled={state.saving} />
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
                  </div>
                  <div class="add-package">
                    <div class="add-package-input">
                      <input type="text" placeholder="Package Name" />
                    </div>
                    <div class="button">
                      Watch Package
                    </div>
                  </div>
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

class Dashboard extends React.Component {
  componentDidMount() {
    this.setState(state);

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
          <pre>${err.stack}</pre>
        </div>
      );
    }

    return (
      <div class="dashboard">
        <h2>Profile</h2>

        <Profile customer={state.customer} />

        <h2>Integrations</h2>

        <Integrations accounts={state.accounts} />

        <h2>Add Integration</h2>

        <a href="https://slack.com/oauth/authorize?scope=incoming-webhook&client_id=80341368871.427593509574">
          <img alt="Add to Slack" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png" srcset="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x" />
        </a>
      </div>
    );
  }
}

React.render(<Dashboard></Dashboard>, document.querySelector('#content'));

function main(content, querystring) {
  const interval = loading(content);

  const params = qs.parse(querystring);

  const opts = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: window.localStorage.getItem('token')
    }
  };
  fetch(`${root}/me`, opts).
    then(res => {
      clearInterval(interval);
      return res.json();
    }).
    then(res => {
      success(content, res);
    }).
    catch(err => {
      clearInterval(interval);
      error(content, err);
    });
}

function error(content, err) {
  content.innerHTML = `
    <div class="loading">
      <p>An error occurred:</p>
      <pre>${err.stack}</pre>
    </div>
  `;
}

function loading(content) {
  content.innerHTML = `
    <div class="loading"><p>Loading</p></div>
  `;

  let count = 0;
  const interval = setInterval(() => {
    let html = content.querySelector('.loading').innerHTML;
    html += '.';
    if (html.substr(html.indexOf('.')).length > 3) {
      html = 'Loading';
    }
    content.querySelector('.loading').innerHTML = html;
  }, 250);

  return interval;
}

function success(content, res) {
  content.innerHTML = `
    <div class="dashboard">
      <h2>Profile</h2>
      <div class="input-with-label">
				<div class="label">First Name</div>
        <div class="input">
          <input type="text" value="${res.customer.firstName}">
        </div>
        <div style="clear: both"></div>
      </div>
      <div class="input-with-label">
				<div class="label">Last Name</div>
        <div class="input">
          <input type="text" value="${res.customer.lastName}">
        </div>
        <div style="clear: both"></div>
      </div>
      <div class="input-with-label">
				<div class="label">Email</div>
        <div class="input">
          <input type="text" value="${res.customer.email}">
        </div>
        <div style="clear: both"></div>
      </div>

      <h2>Integrations</h2>

      <div id="integrations">
        ${integrations(res.accounts)}
      </div>

      <h2>Add Integration</h2>

      <a href="https://slack.com/oauth/authorize?scope=incoming-webhook&client_id=80341368871.427593509574">
        <img alt="Add to Slack" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png" srcset="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x" />
      </a>
    </div>
  `;

  setTimeout(() => {
    res.accounts.forEach(account => {
      packageListeners(content.querySelector(`#packages-container-${account._id}`), account, res.customer);
    });
  }, 0);
}

function integrations(accounts) {
  if (accounts == null || accounts.length === 0) {
    return `
      <div>No integrations found. Install the JSReport Slack app to add a new one.</div>
    `;
  }

  return accounts.map(account => `
    <div class="integration">
      <div class="left">
        <div class="input-with-label">
          <div class="label">
            <img class="slack" src="/images/slack.svg">
            Webhook
          </div>
          <div class="input">
            <input type="text" value="${account.slackWebhooks[0]}">
          </div>
          <div style="clear: both"></div>
        </div>
        <div class="input-with-label">
          <div class="label">
            <img class="slack" src="/images/npm.svg">
            Packages
          </div>
          <div class="input" id="packages-container-${account._id}">
            <div class="packages" id="packages-${account._id}">
              ${packages(account)}
            </div>
            <div class="add-package" id="add-package-${account._id}">
              <div class="add-package-input">
                <input type="text" placeholder="Package Name">
              </div>
              <div class="button">
                Watch Package
              </div>
            </div>
          </div>
          <div style="clear: both"></div>
        </div>
      </div>
      <div class="right">
        <!-- <div class="delete" id="delete-${account._id}">
          &#x1f5d9;
        </div> -->
      </div>
    </div>
  `).join('\n');
}

function packages(account) {
  return account.packagesWatched.
    map(pkg => `
      <span class="pkg">
        ${pkg}&nbsp;
        <span class="delete" id="delete-${account._id}-${pkg}">&#x1f5d9;</span>
      </span>
    `).
    join('\n');
}

function packageListeners(container, account, customer) {
  const input = container.querySelector('input');
  container.querySelector('div.button').addEventListener('click', () => {
    const pkg = input.value;

    account.packagesWatched.push(pkg);

    container.querySelector(`#packages-${account._id}`).innerHTML =
      packages(account);

    input.value = '';

    save(account);

    setTimeout(() => {
      packageListeners(container, account);
    }, 0);
  });

  account.packagesWatched.forEach((pkg, index) => {
    container.querySelector(`#delete-${account._id}-${pkg}`).addEventListener('click', () => {
      account.packagesWatched.splice(index, 1);

      container.querySelector(`#packages-${account._id}`).innerHTML =
        packages(account);
      setTimeout(() => {
        packageListeners(container, account);
      }, 0);
    });
  });
}

function save(account) {
  const opts = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: window.localStorage.getItem('token')
    },
    body: JSON.stringify(Object.assign({}, account, { accountId: account._id }))
  };
  fetch(`${root}/account`, opts).
    then(res => console.log(res), err => console.log(err));
}
