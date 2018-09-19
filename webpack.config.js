
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './frontend/app.js',
  output:{
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  module:{
    rules: [
      {
        test: /\.js$/, 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }, 
      {
        test: /(\.css)$/, 
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: 'url-loader?limit=100000'
      },
      {
        test: /\.(eot|woff)$/,
        use: 'file-loader'
      }
    ]
  }, 
  plugins: [
    new HtmlWebpackPlugin({
      template: './frontend/index.html'
    })
  ]
}