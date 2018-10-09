const path = require('path')

// Contains path to currnet location
const currentLoc = __dirname

// Where the application kick off - entry?
module.exports = {
    entry: './src/app.js',
    // Where to output the final bundle file?
    output: {
        path: path.join(currentLoc, 'public'),
        filename: 'bundle.js'
    },

    // Adds the loaders such as babel to convert ES6 to ES5
    module: {
        rules: [{
            loader: 'babel-loader',

            // Runs through files ending with js
            test: /\.js$/,
            exclude:/node_modules/
        }]
    },
    devtool:'cheap-module-eval-source-map',
    devServer:{
        contentBase:path.join(currentLoc, 'public')
    }
}
