const webpack = require('webpack');
const path = require('path');

module.exports = {
    context: path.join(__dirname, 'src'),
    devtool: 'inline-sourcemap',
    entry: './index.js',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                }
            }
        ]
    },
    output: {
        path: __dirname + '/src/',
        filename: 'bundle.js'
    },
    plugins: []
};
