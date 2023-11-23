const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/index.jsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve('./build'),
    },
    module: {
        rules: [{
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/i,
                use: [
                    process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: './assets/[name].[ext]' // Define the output path and filename
                    }
                }]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css', // Use dynamic names based on entry points
        }),

        new HtmlWebpackPlugin({
            title: 'React Router Modal',
            template: './public/index.html'
        }),

        new CopyWebpackPlugin({
            patterns: [{
                from: './public/assets', // Source directory for your images
                to: './assets', // Destination directory in the build output
            }]
        })
    ],
    devServer: {
        static: path.join(__dirname, 'public'),
        port: 3000,
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
            // Alias the storage API to the appropriate module
            'storage': 'web-storage-api'
        }
    }
}