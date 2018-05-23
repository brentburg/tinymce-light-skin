var webpack = require('webpack');

module.exports = {
  entry: './src/skin.js',
  output: {
    path: __dirname + '/lib',
    filename: 'skin.js',
    library: 'tinymce-light-skin',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {test: /(canvas|skin|content\.inline)(\.min)?\.css$/, loader: 'style-loader/useable' },
      {test: /\.css$/, loader: 'css-loader'},
      {test: /\.(png|woff|woff2|eot|ttf|svg|gif)$/, loader: 'url-loader'},
      {test: /\.woff/, loader: 'base64-font-loader'}
    ]
  }
}
