const express = require('express');
const static = require('express-static');

const redirects = require('fs').readFileSync('./_redirects', 'utf8').
  trim().
  split('\n').
  filter(line => !line.startsWith('#')).
  map(line => line.split(/\s+/g));

console.log(redirects);

const app = express();

app.use((req, res, next) => {
  for (const [from, to] of redirects) {
    if (new RegExp('^' + from.replace('*', '[^\\/]*')).test(req.url)) {
      req.url = to;
      return next();
    }
  }
  next();
});

app.use(static('.'));

app.listen(3000);
console.log('Listening on http://localhost:3000');
