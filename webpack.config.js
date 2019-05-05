var path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app/app.jsx',
    output: {
        path: __dirname,
        filename: './dist/bundle.js'
    },
    resolve: {
        alias: {
            Pages: path.resolve(__dirname, './app/pages'),
            Assets: path.resolve(__dirname, './app/assets'),
            CSS: path.resolve(__dirname, './app/assets/css')
        },
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: './[name].[ext]',
                        outputPath: './dist/fonts/',
                        publicPath: './fonts/'
                    }
                },
            },
            {
                test: /\.(docx)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: './[name].[ext]',
                        outputPath: './dist/files/',
                        publicPath: './files/'
                    }
                },
            },
            {
                test: /\.(png|jpg|jpeg|gif|ico|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: './[name].[ext]',
                            outputPath: './dist/images/',
                            publicPath: './images/'
                        }
                    }
                ]
            },
            {
                test: /favicon.png/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: './[name].[ext]',
                            outputPath: './dist/',
                            publicPath: './'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './app/index.hbs'),
            filename: path.resolve(__dirname, './dist/index.html'),
            inject: false
        })
    ]
};