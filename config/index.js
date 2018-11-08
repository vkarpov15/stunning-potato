const cfg = {
  root: 'http://localhost:4000',
  stripe: 'pk_test_CY6HxyQkOolO1B3h43MvkJE5'
};

if (process.env.NODE_ENV === 'production') {
  Object.assign(cfg, require('./prod.js'));
}

module.exports = Object.freeze(cfg);
