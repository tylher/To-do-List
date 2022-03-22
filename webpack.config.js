const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    Output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    
}