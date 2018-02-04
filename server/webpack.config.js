const webpack = require('webpack');

module.exports = {
    target: 'node',

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },

    entry: './server/server.ts',

    output: {
        filename: './server/server.js',
        library: '',
        libraryTarget: 'commonjs'
    },

    // Add the loader for .ts files.
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
                options: {
                    configFileName: './server/tsconfig.json'
                }
            }
        ]
    },

    plugins: [new webpack.optimize.UglifyJsPlugin({ minimize: true })],

    node: {
        __dirname: true
    }
};
