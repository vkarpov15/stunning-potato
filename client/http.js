require('unfetch');

const root = require('../config').root;
console.log(root);

exports.get = function(url) {
  const opts = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: window.localStorage.getItem('token')
    }
  };
  return fetch(`${root}${url}`, opts).then(res => res.json());
};
