module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    dashboard: './client/dashboard.jsx',
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
  },
  module: {
    rules: [{
      test: /\.jsx$/,
      use: {
        loader: 'babel-loader'
      }
    }]
  }
};
