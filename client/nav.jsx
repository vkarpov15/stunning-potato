const React = require('preact');
const http = require('./http');

const config = require('../config');
const root = config.root;
console.log(root);

if (config.track) {
  const client = new require('keen-tracking').default(config.keen);

  client.recordEvent('pageView', {
    path: window.location.pathname
  });
}

class Nav extends React.Component {
  componentDidMount() {
    if (!window.localStorage.getItem('token')) {
      this.setState({ loading: false, customer: null });
      return;
    }

    this.setState({ loading: true });

    http.get('/me').
      then(res => {
        this.setState({ loading: false, customer: res.customer });
      }).
      catch(() => {
        this.setState({ loading: false, customer: null });
      });
  }

  login() {
    if (this.state.loading) {
      return <span></span>;
    }
    if (this.state.customer != null) {
      return (
        <a href="/dashboard">
          Dashboard
        </a>
      );
    }
    return (
      <a href="https://slack.com/oauth/authorize?scope=identity.basic+identity.email&client_id=80341368871.427593509574">
        <img alt="Sign in with Slack" height="30" width="129" src="https://platform.slack-edge.com/img/sign_in_with_slack.png" srcset="https://platform.slack-edge.com/img/sign_in_with_slack.png 1x, https://platform.slack-edge.com/img/sign_in_with_slack@2x.png 2x" />
      </a>
    );
  }

  render() {
    return (
      <div>
        <div class="nav-link">
          <a href="/feed">
            Feed
          </a>
        </div>
        <div class="nav-link">
          <a href="/slack">
            Slack
          </a>
        </div>
        <div class="nav-link">
          <a href="https://tinyletter.com/js-report">
            Newsletter
          </a>
        </div>
        <div class="nav-link">
          <a href="/blog">
            Blog
          </a>
        </div>
        <div class="nav-link">
          {this.login()}
        </div>
        <div style="clear: both"></div>
      </div>
    );
  }
}

React.render(<Nav></Nav>, document.querySelector('#nav-container'));
