module.exports = {
  entry: ['./app/assets/javascripts/frontend/main.jsx'],
  // Server Configuration options
  devServer: {
    hot: true, // Live-reload
    inline: true,
    port: 3000, // Port Number
    host: 'localhost' // Change to '0.0.0.0' for external facing server
  },
  devtool: 'eval',
  output: {
    path: `${__dirname}/app/assets/javascripts`,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          cacheDirectory: true
        }
      }
    ]
  }
};
