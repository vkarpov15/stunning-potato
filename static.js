const { decorateApp } = require('@awaitjs/express');
const express = require('express');
const fs = require('fs');
const mime = require('mime2');
const static = require('express-static');

const redirects = require('fs').readFileSync('./_redirects', 'utf8').
  trim().
  split('\n').
  filter(line => !line.startsWith('#')).
  map(line => line.split(/\s+/g));

const app = decorateApp(express());

app.use((req, res, next) => {
  for (const [from, to] of redirects) {
    if (new RegExp('^' + from.replace('*', '[^\\/]*')).test(req.url)) {
      req.url = to;
      return next();
    }
  }
  next();
});

app.useAsync(async (req, res, next) => {
  let filename = req.url.substr(req.url.lastIndexOf('/') + 1);
  url = (() => {
    if (filename.length === 0) {
      filename = 'index.html';
      return req.url + 'index.html';
    }
    if (filename.indexOf('.') === -1) {
      filename += '.html';
      return req.url + '.html';
    }
    return req.url;
  })();

  const contents = await new Promise((resolve, reject) => {
    fs.readFile(`${__dirname}${url}`, 'utf8', (err, res) => {
      if (err != null) {
        if (err.code === 'ENOENT') {
          err.status = 404;
        }
        return reject(err);
      }
      resolve(res);
    });
  });

  res.set('content-type', mime.lookup(filename)).send(contents);
});

app.listen(3000);
console.log('Listening on http://localhost:3000');
