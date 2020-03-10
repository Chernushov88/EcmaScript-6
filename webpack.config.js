let path = require('path');

let conf = {
    // entry: './pages/1-varieble.js',
    // entry: './pages/2-arrow-functions.js',
    // entry: './pages/4-object.js',
   // entry: './pages/4.0-prototype.js',
    //entry: './pages/5-destruction.js',
    //entry: './pages/6-RestSpread.js',
    //entry: './pages/7-String.js',
    //entry: './pages/8-Cycles.js',
    //entry: './pages/9-Class.js',
    //entry: './pages/10-SetWeakSet.js',
    //entry: './pages/11-Map-end-WeakMap.js',
    //entry: './pages/12-sistem-modules.js',
    //entry: './pages/13-simbols.js',
    //entry: './pages/14-generator.js',
    //entry: './pages/15-new_methods.js',
    entry: './pages/16-promise.js',

    output: {
        path: path.resolve(__dirname, './js'),
        filename: 'main.js',
        publicPath: 'js/'
    },
    devServer: {
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                // exclude: '/node_modules/'
            }
        ]
    }
};

module.exports = (env, options) => {
    conf.devtool = options.mode === "production" ?
                    false :
                    "cheap-module-eval-source-map";

    return conf;
};