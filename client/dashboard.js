require('unfetch');

const qs = require('query-string');

const root = 'http://localhost:4000'; //'https://s5hqb41ya4.execute-api.us-east-1.amazonaws.com/prod';

if (typeof window !== 'undefined') {
  main(document.querySelector('#content'), window.location.search);
}

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
      success(res);
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

function success(res) {
  content.innerHTML = `
    <div class="dashboard">
      <h2>Profile</h2>
      <div>
        <input type="text" value="${res.customer.firstName}">
      </div>
      <div>
        <input type="text" value="${res.customer.lastName}">
      </div>
      <div>
        <input type="text" value="${res.customer.email}">
      </div>

      <h2>Integrations</h2>

      ${integrations(res.accounts)}
    </div>
  `;
}

function integrations(accounts) {
  if (accounts.length === 0) {
    return `
      <div>No accounts found. Install the JSReport Slack app to add a new one.</div>
      <a href="https://slack.com/oauth/authorize?scope=incoming-webhook&client_id=80341368871.427593509574">
        <img alt="Add to Slack" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png" srcset="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x" />
      </a>
    `;
  }

  return accounts.map(account => `
    <input type="text" value="${account.name}">
    <div>
      Packages Watched:
      ${account.packagesWatched.map(pkg => `<div>${pkg}</div>`).join('\n')}
    </div>
  `).join('\n');
}
