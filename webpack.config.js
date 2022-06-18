const path = require("path");
module.exports = {
    entry: './assets/js/script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'script.min.js'
      },
    mode: 'development'
};