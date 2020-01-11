const path = require("path");

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loaders: ["babel-loader"]
            },
            {
                test: /\.css$/,
                loaders: ["style-loader", "css-loader"]
            }
        ]
    },
    mode: "development",
    entry: "./main.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js"
    }
};
