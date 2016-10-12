var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/index.jsx'
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['react-hot', 'jsx?harmony'],
            exclude: /node_modules/,
            loader: 'babel'
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    ouptut: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};