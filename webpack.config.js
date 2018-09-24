const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname,"dist"),
        filename: "index_bundle.js",
        publicPath: "dist"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /nodemodules/,
                use: {
                    loader: "babel-loader"
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    devServer: {
        contentBase: "./src"
    }
};