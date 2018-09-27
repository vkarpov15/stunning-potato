require('unfetch');

const marked = require('marked');

const root = 'https://ja7gm36oie.execute-api.us-east-1.amazonaws.com/default';

if (typeof window !== 'undefined') {
  main(window.location.pathname, document.querySelector('#content'));
}

module.exports = main;

function main(url, container) {
  const sp = url.split('/');

  if (sp.length < 4) {
    container.innerHTML = '<h1>Not Found</h1>';
    return;
  }

  fetch(`${root}/version?packageId=${sp[2]}&version=${sp[3]}`).
    then(res => res.json()).
    then(res => {
      let html = `
        <h1>${res.version.packageId}@${res.version.version}</h1>

        <div class="changelog">
          ${res.version.changelog == null ? 'No Changelog Found' : marked(res.version.changelog)}
        </div>
      `;
      container.innerHTML = html;
    }).
    catch(err => {
      container.innerHTML = '<h1>Not Found</h1>';
      throw err;
    });
}
