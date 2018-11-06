require('unfetch');

const React = require('preact');

const root = require('../config').root;
console.log(root);

class Nav extends React.Component {
  render() {
    return (
      <div>
        <a href="/feed">
          Feed
        </a>
        <a href="/slack">
          Slack
        </a>
        <a href="https://tinyletter.com/js-report">
          Newsletter
        </a>
        <a href="https://slack.com/oauth/authorize?scope=identity.basic+identity.email&client_id=80341368871.427593509574">
          <img alt="Sign in with Slack" height="30" width="129" src="https://platform.slack-edge.com/img/sign_in_with_slack.png" srcset="https://platform.slack-edge.com/img/sign_in_with_slack.png 1x, https://platform.slack-edge.com/img/sign_in_with_slack@2x.png 2x" />
        </a>
      </div>
    );
  }
}

React.render(<Nav></Nav>, document.querySelector('#nav-container'));
