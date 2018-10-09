require('unfetch');

const root = 'https://s5hqb41ya4.execute-api.us-east-1.amazonaws.com/prod';

if (typeof window !== 'undefined') {
  main(document.querySelector('#content'));
}

function main(content) {
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

  const opts = {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({ foo: 'bar' })
  };
  fetch(`${root}/registerSlackOauth`, opts).then(res => {
    console.log(res);
  });
}
