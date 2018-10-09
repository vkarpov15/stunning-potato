require('unfetch');

const qs = require('query-string');

const root = 'https://s5hqb41ya4.execute-api.us-east-1.amazonaws.com/prod';

if (typeof window !== 'undefined') {
  main(document.querySelector('#content'), window.location.search);
}

function main(content, querystring) {
  content.innerHTML = `
    <div class="registering">Registering</div>
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

  const params = qs.parse(querystring);

  const opts = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ code: params.code })
  };
  fetch(`${root}/registerSlackOauth`, opts).then(res => {
    console.log(res);
  });
}
