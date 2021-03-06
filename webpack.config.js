const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');


module.exports =
{
    mode: 'development',
    entry: './src/main.js',
    output: 
    {
        path: __dirname + '/dist',
        filename: 'application.js'
    },
    devtool: 'eval-source-map',
    devServer: 
    {
        contentBase: './dist'
    },
    module: 
    {
        rules: 
        [
            {
                test: /\.(js|jsx)$/,
                include: [path.resolve(__dirname, 'src')],
                exclude: /node_modules/,
                use: 
                {
                    loader: 'babel-loader',
                    options: 
                    {
                        presets: ['env', 'react']
                    }
                }
            },
            {
                test: /\.less$/,
                use: 
                [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    },
    resolve: 
    {
        extensions: [".js", ".json", ".jsx", ".css"]
    },
    plugins: 
    [
        new MiniCssExtractPlugin({ filename: 'application.css' }),
        new HtmlWebpackPlugin({ template: 'index.html' })
    ]
}