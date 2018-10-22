require('unfetch');

const qs = require('query-string');

const root = 'https://s5hqb41ya4.execute-api.us-east-1.amazonaws.com/prod';

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

      ${integrations(res.accounts)}

      <h2>Add Integration</h2>

      <a href="https://slack.com/oauth/authorize?scope=incoming-webhook&client_id=80341368871.427593509574">
        <img alt="Add to Slack" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png" srcset="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x" />
      </a>
    </div>
  `;
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
          <div class="label">Description</div>
          <div class="input"><input type="text" value="${account.name}"></div>
          <div style="clear: both"></div>
        </div>
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
          <div class="input">
            <div class="packages">
              ${account.packagesWatched.map(pkg => `<span class="pkg">${pkg}&nbsp;<span class="delete" id="delete-${account._id}-${pkg}">&#x1f5d9;</span></span>`).join('\n')}
            </div>
            <div class="add-package">
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
        <div class="delete" id="delete-${account._id}">
          &#x1f5d9;
        </div>
      </div>
    </div>
  `).join('\n');
}
