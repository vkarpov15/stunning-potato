const React = require('preact');

module.exports = props => (
  <div class="error-404">
    <h2>Error</h2>
    <img class="error-gag-img" src="/images/pooka.png" />
    <div class="error-gag">Life is Ruff</div>
    <h4>{props.message}</h4>
  </div>
);
