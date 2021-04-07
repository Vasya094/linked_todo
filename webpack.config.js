const path = require('path')
const webpack = require( 'webpack' )
const CURRENT_WORKING_DIR = process.cwd()

module.exports = {
  entry:  './src/index.js',
  mode: 'development',
  module:
    {
  //   loaders: [{
  //     test: /\.js$/,
  //     loaders: ['react-hot-loader/webpack', 'babel'],
  //     include: path.join(__dirname, 'src')
  // }],
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: [ "@babel/env" ],
          plugins: [   "react-hot-loader/babel"]
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  output: {
    path: path.resolve( __dirname, 'dist/' ),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join( __dirname, 'public/' ),
    port: 3000,
    publicPath: 'http://localhost:3000/dist/',
    hotOnly: true
  },
  plugins: [ new webpack.HotModuleReplacementPlugin() ],
  resolve: {
    extensions: [ '*', '.js', '.jsx' ],
    // alias: {
    //   'react-dom': '@hot-loader/react-dom'
    // }
}
}

