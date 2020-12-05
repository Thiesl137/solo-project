const path = require('path');



module.exports = {
  entry: path.resolve(__dirname, 'client/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: "bundle.js"
  },
  mode: process.env.NODE_ENV,

  // node: {
  //   fs: "empty"
  // },
  // node: { global: true, fs: 'empty' },
  // target: 'node',

  devServer: {
    publicPath: '/build/',
    proxy: {
      "/api": {
        target: 'http://localhost:3000',
      }
    }
  },

  resolve: { //Why is this needed?
    extensions: ['.js', '.jsx']
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use:{
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']  //right to left
            }
        }
      },
      {
        test: /\.s?[ac]ss$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
}

