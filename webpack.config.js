const webpack = require("webpack")
const path = require("path")

module.exports = {
    entry: [
        'react-hot-loader/patch',
        './js/index.js',
        'webpack-hot-middleware/client',        
        'webpack/hot/dev-server'
    ],
    output: {
        path: "/static",
        filename: "bundle.js",
        publicPath: "http://localhost:3000/static"
    },
    devtool: "eval-source-map",
    target: "web",
    plugins: [
        new webpack.HotModuleReplacementPlugin()      
    ], 
    module: {
        rules: [
            {test: /\.jsx?$/, exclude: /node_modules/, loaders: ["react-hot-loader/webpack", "babel-loader"]}, 
        ]
    }
}