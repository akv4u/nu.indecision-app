const path = require('path')

module.exports = {
    mode: 'development',
    entry :'./src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    // loaders
    module: {
        rules: [{
            loader:'babel-loader', // only to use only 1 loader
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [ // to be used when more than 1 loader 
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
        
    },
    devtool: 'cheap-module-eval-source-map',
    devServer:{
        contentBase: path.join(__dirname, 'public')
    }
};

// loaders
