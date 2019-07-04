//NodeJs Modules
const path = require('path');
const fs = require('fs');

//Plugins
const  { CleanWebpackPlugin }  = require('clean-webpack-plugin');
const  HtmlWebpackPlugin   = require('html-webpack-plugin');
const  ExtractTextWebpackPlugin   = require('extract-text-webpack-plugin');

//import { Configuration } from 'webpack'

/**
 * @type {Configuration}
 */
const config = {
    entry: //['./src/hamada.js','./src/about.js']
    {
         index : './src/index.js',
        about: './src/about.js'
    },
    output:{
        path: path.resolve(__dirname,'build'),
        filename: '[name].[chunkhash].bundle.js'
    },
    devtool:'source-map',
    plugins : [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new ExtractTextWebpackPlugin('style.css')
    ],
    module:{
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.ts$/,
                use: 'ts-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader'],
                include: fs.realpathSync('./src/components/')          
            },
            {
                test: /\.scss$/,
                use: ['style-loader','css-loader','sass-loader'],
                include: fs.realpathSync('./src/components/')       
            },
            {
                test: /\.css$/,
                loader: ExtractTextWebpackPlugin.extract({
                    use: 'css-loader'
                }),
                exclude: fs.realpathSync('./src/components/')              
            },
            {
                test: /\.scss$/,
                loader: ExtractTextWebpackPlugin.extract({
                    use: ['css-loader','sass-loader']
                }),
                exclude: fs.realpathSync('./src/components/')            
            },
            {
                test: /\.(jpe?g|gif|png|svg)/,
                use: [
                    {
                        loader:'url-loader',
                        options:{
                            limit:20000
                        }
                    },
                    'image-webpack-loader'
            ]
            }
        ]
    }
}
module.exports = config;