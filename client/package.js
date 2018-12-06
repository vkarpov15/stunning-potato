require('unfetch');
require('./nav.jsx');

const error404 = require('./error404');
const marked = require('marked');

const config = require('../config');
const root = config.root;

if (typeof window !== 'undefined') {
  main(window.location.pathname, document.querySelector('#content'));
}

module.exports = main;

function main(url, container) {
  const versionStr = url.substr('/package/'.length);

  const lastSlash = versionStr.lastIndexOf('/');

  if (lastSlash === -1) {
    container.innerHTML = error404();
    return;
  }

  const versionNum = versionStr.substr(lastSlash + 1);
  const packageId = versionStr.substr(0, lastSlash);

  fetch(`${root}/version?packageId=${packageId}&version=${versionNum}`).
    then(res => res.json()).
    then(res => {
      if (res.version == null) {
        container.innerHTML = error404();
        return;
      }
      let html = `
        <h1 class="inline-header">
          ${res.version.packageId}@${res.version.version}
        </h1>

        <p>${res.package.description}</p>

        <div class="links">
          <a href="https://npmjs.com/package/${res.version.packageId}/v/${res.version.version}">
            <img src="/images/npm.svg" />
          </a>

          ${githubLink(res)}
        </div>

        <h1 class="inline-header">Changelog</h1>

        <div class="changelog">
          ${res.version.changelog == null ? 'No Changelog Found' : marked(res.version.changelog)}
        </div>
      `;
      container.innerHTML = html;
    }).
    catch(err => {
      container.innerHTML = error404();
      throw err;
    });
}

function githubLink(res) {
  if (res.package.github == null) {
    return '';
  }

  const { github } = res.package;

  return `
    <a href="https://github.com/${github.owner}/${github.repo}">
      <img src="/images/github.svg" />
    </a>
  `;
}
