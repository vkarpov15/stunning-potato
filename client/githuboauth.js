require('unfetch');
require('./nav.jsx');

const qs = require('query-string');

const root = 'http://localhost:4000'; //'https://s5hqb41ya4.execute-api.us-east-1.amazonaws.com/prod';

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
  fetch(`${root}/github`, opts).
    then(res => {
      clearInterval(interval);
      success(content);
      return res.json();
    }).
    then(res => {
      window.localStorage.setItem('token', res.token._id);
    }).
    catch(err => {
      clearInterval(interval);
      error(content, err);
    });
}

function error(content, err) {
  content.innerHTML = `
    <div class="registering">
      <p>An error occurred:</p>
      <pre>${err.stack}</pre>
    </div>
  `;
}

function loading(content) {
  content.innerHTML = `
    <div class="registering"><p>Registering</p></div>
  `;

  let count = 0;
  const interval = setInterval(() => {
    let html = content.querySelector('.registering').innerHTML;
    html += '.';
    if (html.substr(html.indexOf('.')).length > 3) {
      html = 'Registering';
    }
    content.querySelector('.registering').innerHTML = html;
  }, 250);

  return interval;
}

function success(content) {
  content.innerHTML = `
    <div class="registered">
      <p>Registered Successfully!</p>
      <div class="button" >
        <a href="/dashboard">
          See Your Dashboard
        </a>
      </div>
    </div>
  `;
}
