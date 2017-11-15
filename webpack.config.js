// entry -> output
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

//console.log(path.join(__dirname,'public'));

module.exports = (env) => {
  const isProduction = env == 'production';
  const cssExtract = new ExtractTextPlugin('styles.css');

  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname,'public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use: cssExtract.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      }
    ]},
    plugins: [
      cssExtract
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname,'public'),
      historyApiFallback: true // this forces the page to stay on the index.html so that react-router can do it's thing  
    }
  }
}