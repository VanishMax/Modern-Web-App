const path = require('path');
const {GenerateSW} = require('workbox-webpack-plugin');
const ReactLoadablePlugin = require('react-loadable/webpack').ReactLoadablePlugin;

module.exports = {
  entry: {
    client: './src/client.js'
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    chunkFilename: '[name].bundle.js',
    filename: "[name].js"
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  plugins: [
    new GenerateSW({
      swDest: path.join(__dirname + "/public/service-worker.js"),
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [
        {
          urlPattern: /assets/,
          handler: 'cacheFirst'
        },
        {
          urlPattern: /.*/,
          handler: 'networkFirst'
        }
      ]
    }),
    new ReactLoadablePlugin({
      filename: './public/react-loadable.json',
    })
  ]
}
