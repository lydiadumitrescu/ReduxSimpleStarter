module.exports = {
  entry: [
    './src/index.tsx'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js',
    //sourceMapFilename: '[file].map'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'awesome-typescript-loader',
    }]
  },
  resolve: {
    extensions: ["", ".webpack.js", ".ts", ".tsx", ".js"]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  devtool: 'inline-source-map',
  //devtool: 'source-map'  
};
