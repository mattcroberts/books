const CopyWebpackPlugin = require("copy-webpack-plugin");

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
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "css-loader/locals",
                        options: { modules: true, importLoaders: 1 }
                    },
                    "postcss-loader"
                ]
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
    target: "node",
    plugins: [
        new CopyWebpackPlugin([{ from: "src/server/views", to: "views" }])
    ],
    node: {
        __dirname: true
    }
};
