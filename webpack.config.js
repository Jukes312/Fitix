const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { mixin } = require('lodash');

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
            {test: /\.scss$/,use: ['style-loader', 'css-loader','sass-loader']},
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
    )],

    
    devtool: 'inline-source-map',
    devServer:{
        static: path.resolve(__dirname, 'dist'),
        port: 8080, 
        open: true, 
        hot: true, 
        
    },

  
       
   

}