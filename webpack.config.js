var path = require('path')

module.exports = {
  target: "node",
  entry: ['./index'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'chafull.js',
    library: 'chafull',
    libraryTarget: 'umd',
    globalObject: 'this',
    umdNamedDefine: true
  }
}
