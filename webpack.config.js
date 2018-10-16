module.exports = {
  entry: {
    dashboard: './client/dashboard.js',
    feed: './client/feed.js',
    package: './client/package.js',
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
