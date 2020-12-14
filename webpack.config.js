const path = require('path');

const serverBuild = {
    mode: 'production',
    entry: './src/index.js',
    target: 'node',
    output: {
        path: path.resolve('dist'),
        filename: 'logger.js',
        library: 'FyipeLogger',
        libraryExport: 'default',
        libraryTarget: 'umd',
        globalObject: 'this',
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js'],
    },
};
const webBuild = {
    ...serverBuild,
    target: 'web',
    output: { ...serverBuild.output, filename: 'logger.min.js' },
};
module.exports = [serverBuild, webBuild];
