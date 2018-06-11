export default {
    entry: {
        server: "./src/server/index.js"
    },
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
        path: __dirname + "/dist/server",
        publicPath: "/",
        filename: "[name].bundle.js"
    },
    target: "node"
};
