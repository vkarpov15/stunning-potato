require('unfetch');

const error404 = require('./error404');

const root = 'https://ja7gm36oie.execute-api.us-east-1.amazonaws.com/default';

if (typeof window !== 'undefined') {
  main(document.querySelector('#content'), document.querySelector('#loading'));
}

module.exports = main;

function main(container, loading) {
  let before = null;
  let inFlight = null;

  next();

  window.addEventListener('scroll', function() {
    if (isXPercentDownThePage(0.9) && inFlight == null) {
      next();
    }
  });

  function next() {
    const url = before == null ? `${root}/feed` : `${root}/feed?before=${before}`;

    if (inFlight != null) {
      return inFlight.then(() => next());
    }

    loading.style.display = 'block';

    inFlight = fetch(url).
      then(res => res.json()).
      then(res => {
        inFlight = null;
        loading.style.display = 'none';
        before = res.versions[res.versions.length - 1].publishedAt;
        container.innerHTML += res.versions.map(versionComponent).join('\n');
      }).
      catch(err => {
        inFlight = null;
        loading.style.display = 'none';
        container.innerHTML = error404();
        throw err;
      });
  }
}

function isXPercentDownThePage(percent) {
  const p = window.pageYOffset + document.documentElement.clientHeight;
  const h = document.documentElement.scrollHeight;
  return (p / h) > percent;
}

const versionComponent = version => `
  <div class="version">
    <div class="left">
      <a href="https://npmjs.com/${version.packageId}">
        ${version.packageId}@${version.version}
      </a>
      <div class="ts">
        ${ts(version.publishedAt)}
      </div>
    </div>
    <div class="right">
      <div
        class="button"
        style="display: ${version.changelog != null ? 'block' : 'none'}"
        onClick="toggle('changelog-${version._id}')">
        Show Changelog
      </div>
    </div>
    <div style="clear: both"></div>
    <div class="changelog changelog-${version._id}">
      ${version.changelog || ''}
    </div>
  </div>
`;

function ts(date) {
  date = new Date(date);
  return date.toLocaleTimeString();
}

function toggle(id) {
  const el = document.querySelector('.' + id);
  if (el.style.display === 'block') {
    el.style.display = 'none';
  } else {
    el.style.display = 'block';
  }
}
