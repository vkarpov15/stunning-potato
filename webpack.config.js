module.exports = {
  entry: {
    feed: './client/feed.js',
    package: './client/package.js'
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
