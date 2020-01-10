const path = require("path");

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx|css)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
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
