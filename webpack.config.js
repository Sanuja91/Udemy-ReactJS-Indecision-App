const path = require('path')

// Contains path to currnet location
const currentLoc = __dirname

// Where the application kick off - entry?
module.exports = {
    entry: './src/app.js',
    mode:'development',
    output: {
        path: path.join(currentLoc, 'public'),
        filename: 'bundle.js'
    }
}
// Where to output the final bundle file?