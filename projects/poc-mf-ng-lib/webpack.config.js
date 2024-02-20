const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/public-api.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'mi-libreria-angular.js',
    library: 'MiLibreriaAngular',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  }
};