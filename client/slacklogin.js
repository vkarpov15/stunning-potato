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
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ code: params.code })
  };
  fetch(`${root}/login/slack`, opts).
    then(res => {
      clearInterval(interval);
      success(content);
    }).
    catch(err => {
      clearInterval(interval);
      error(content, err);
    });
}

function error(content, err) {
  content.innerHTML = `
    <div class="verifying">
      <p>An error occurred:</p>
      <pre>${err.stack}</pre>
    </div>
  `;
}

function loading(content) {
  const msg = 'Verifying Login with Slack';
  content.innerHTML = `
    <div class="verifying"><p>${msg}</p></div>
  `;

  let count = 0;
  const interval = setInterval(() => {
    let html = content.querySelector('.verifying').innerHTML;
    html += '.';
    if (html.substr(html.indexOf('.')).length > 3) {
      html = msg;
    }
    content.querySelector('.verifying').innerHTML = html;
  }, 250);

  return interval;
}

function success(content) {
  content.innerHTML = `
    <div class="logged-in">
      <p>Logged in Successfully!</p>
    </div>
  `;

  setTimeout(() => { window.location.href = '/dashboard'; }, 0);
}
