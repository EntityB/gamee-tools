var path = require('path');

module.exports = {
    devtool: 'cheap-module-source-map',

    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, '../www/gamee-tools'),
        filename: 'gamee-tools.js'
    },
}