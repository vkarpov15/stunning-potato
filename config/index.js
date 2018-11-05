const cfg = {
  root: 'http://localhost:4000'
};

if (process.env.NODE_ENV === 'production') {
  Object.assign(cfg, require('./prod.js'));
}

module.exports = Object.freeze(cfg);
