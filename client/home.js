require('unfetch');
require('./nav.jsx');

const config = require('../config');

fetch(`${config.root}/home`).
  then(res => res.json()).
  then(res => {
    document.querySelector('#latest-releases-content').innerHTML = res.versions.
      map(version => `
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
            <div class="button" onClick="toggle('changelog-${version._id}')">
              Show Changelog
            </div>
          </div>
          <div style="clear: both"></div>
          <div class="changelog changelog-${version._id}">
            ${version.changelog != null ? changelog(version) : ''}
          </div>
        </div>
      `).
      join('\n');
  });

function changelog(version) {
  return version.changelog;
}

function toggle(id) {
  const el = document.querySelector('.' + id);
  if (el.style.display === 'block') {
    el.style.display = 'none';
  } else {
    el.style.display = 'block';
  }
}

function ts(date) {
  date = new Date(date);
  return date.toLocaleTimeString();
}
