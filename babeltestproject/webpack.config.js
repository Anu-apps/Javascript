const path = require('path');

module.exports = {
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, ''),
    filename: 'app.bundle.js'
  },
  mode:'development'
};