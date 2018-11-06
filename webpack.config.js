module.exports = {
  mode: process.env.NODE_ENV || 'production',
  entry: {
    dashboard: './client/dashboard.jsx',
    feed: './client/feed.js',
    home: './client/home.js',
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
