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
  return fetch(`${root}${url}`, opts).then(res => res.json()).then(res => {
    if (res.error != null) {
      throw new Error(res.error);
    }
    return res;
  });
};

exports.put = function(url, data) {
  const opts = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: window.localStorage.getItem('token')
    },
    body: JSON.stringify(data)
  };
  return fetch(`${root}${url}`, opts).then(res => res.json());
};
