module.exports = version => `
  <div class="version">
    <div class="left">
      <a href="https://npmjs.com/package/${version.packageId}">
        ${version.packageId}@${version.version}
      </a>
      <div
        class="description"
        style="${version.package.description == null ? 'display: none' : ''}">
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

function ts(date) {
  date = new Date(date);
  return date.toLocaleTimeString();
}
