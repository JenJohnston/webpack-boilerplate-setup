const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const path = require('path')
const plugins = [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin(
        {
            template: './src/index.html'
        }
    ),
    
]

let mode = "development"
let target = "web"

if (process.env.NODE_ENV === "production")
{
    mode = "production"
} else 
{
    plugins.push(new ReactRefreshWebpackPlugin())
}

module.exports =
{
    mode: mode,
    target: target,

    output: {
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: "images/[hash][ext][query]"
    },

    module: 
    {
        rules:
        [
            {
                test: /\.(png|jpe?g|gif|svg|webp)$/i,
                type: "asset",
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {publicPath: ""},
                    }, 
                    "css-loader",
                    "postcss-loader", 
                    "sass-loader"]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: 
                {
                    loader: "babel-loader",
                }
            },
            
        ]
    },

    plugins: plugins,

    resolve: 
    {
        extensions: [".js", ".jsx"]
    },

    devtool: "source-map",
    devServer:
    {
        static: "./dist",
        hot: true
    }
}