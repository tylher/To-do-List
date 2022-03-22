const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    Output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: 'dist'
    },
    plugin: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ]
}