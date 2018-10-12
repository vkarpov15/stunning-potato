module.exports = {
  entry: {
    feed: './client/feed.js',
    package: './client/package.js',
    slacklogin: './client/slacklogin.js',
    slackoauth: './client/slackoauth.js'
  },
  target: 'web',
  output: {
    path: `${process.cwd()}/website`,
    filename: '[name].js'
  },
  optimization: {
    minimizer: []
  }
};
