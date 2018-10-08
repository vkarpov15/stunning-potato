module.exports = version => `
  <div class="version">
    <div class="left">
      <a href="https://npmjs.com/package/${version.packageId}">
        ${version.packageId}@${version.version}
      </a>
      <div
        class="description"
        style="${version.package.description == null ? 'display: none' : ''}">
        ${githubButton(version)}
        ${version.package.description}
      </div>
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

function githubButton(version) {
  if (version.package.github == null) {
    return '';
  }
  const { owner, repo } = version.package.github;
  if (owner == null || repo == null) {
    return '';
  }
  const badge = `https://img.shields.io/github/stars/${owner}/${repo}.svg?` +
    'style=social&label=Stars';
  const url = `https://github.com/${owner}/${repo}`;
  return `<a href="${url}"><img src="${badge}" /></a><br>`;
}

function ts(date) {
  date = new Date(date);
  return date.toLocaleTimeString();
}
