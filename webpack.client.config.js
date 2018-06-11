import ManifestPlugin from "webpack-manifest-plugin";

export default {
    entry: {
        client: "./src/client/index.js"
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
        path: __dirname + "/dist/client",
        publicPath: "/",
        filename: "[name].bundle.js"
    },
    plugins: [new ManifestPlugin()]
};
