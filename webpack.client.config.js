// import ManifestPlugin from "webpack-manifest-plugin";

module.exports = {
    entry: {
        client: "./src/client/index.js"
    },
    devtool: "eval-source-map",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ]
    },
    resolve: {
        extensions: ["*", ".js"]
    },
    output: {
        path: __dirname + "/dist/client",
        publicPath: "/static/",
        filename: "[name].bundle.js"
    },
    devServer: {
        contentBase: "./dist/client"
    }
    // plugins: [new ManifestPlugin()]
};
