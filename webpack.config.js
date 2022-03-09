const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { mixin } = require('lodash');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: {
      main: path.resolve(__dirname, 'JS/main.js')
    },
    output:{
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
      clean: true,
      
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    

    //*Loaders*//
    module:{
        rules:[
            {test: /\.scss$/,use:[{loader: MiniCssExtractPlugin.loader},'css-loader','sass-loader']},
            {test: /\.(png|jpg|gif|svg|eot|ttf|woff|ico)$/,   type: 'asset/resource'},
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    options:{
                        presets:['@babel/preset-env'],
                    },
                }
            },
        ],
    },

    

    //*plugins*//
    plugins: [new HtmlWebpackPlugin({
        
        name: 'index.html',
        template: './index.html'
        
    }
    ),new MiniCssExtractPlugin({ filename: '[name].[contenthash].css'}
    )],

    
    devtool: 'inline-source-map',
    devServer:{
        static: path.resolve(__dirname, 'dist'),
        port: 8080, 
        open: true, 
        hot: true, 
        
    },

  
       
   

}