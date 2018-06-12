import MiniCssExtractPlugin from "mini-css-extract-plugin";
import UglifyJsPlugin from "uglifyjs-webpack-plugin";

export default {
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
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
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
        path: __dirname + "/dist/client",
        publicPath: "/static/",
        filename: "[name].bundle.js"
    },
    devServer: {
        contentBase: "./dist/client"
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            })
        ]
    }
};
