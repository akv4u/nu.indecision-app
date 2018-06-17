const path = require('path')

module.exports = {
    mode: 'development',
    entry :'./src/app.js',
    output: {
        path: path.join(__dirname, 'public', 'scripts'),
        filename: 'bundle.js'
    },
    // loaders
    module: {
        rules: [{
            loader:'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }]

    },
    devtool: 'cheap-module-eval-source-map'
};

// loaders
