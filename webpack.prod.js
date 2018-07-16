const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const merge = require('webpack-merge')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

// const webpackConfig
module.exports = merge(baseWebpackConfig, {
   module: {
    rules: [
    {
        test: /\.css$/, 
        loader: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.less$/, 
        loader: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          },
          'less-loader'
        ]
      }
    ]
  },
  devtool: '#source-map',
  /* 提取公共内容 */
  optimization: {
    splitChunks: {
       cacheGroups: {
        commons: {
            chunks: "initial",
            minChunks: 2,
            minSize: 0
        },
        vendors: {
            test: /node_modules/,
            name: "vendors",
            chunks: "initial",
            priority: 10
        },
        styles: {
          name: 'stylenn',
          test: /\.less$/,
          chunks: 'all',
          enforce: true
        },
        css: {
          name: 'styleCss',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
    }
    // },
    // runtimeChunk: {
    }
  },
  plugins: [
    // 配置全局变量
    new webpack.DefinePlugin({
      'process.env': require('./config/prod.env')
    }),

    // // 打包开始，清空dist文件夹
    // new CleanWebpackPlugin(['dist']),

    // 提取css
    new MiniCssExtractPlugin({
      // filename: path.posix.join('staticon', 'css/[name].css')
      filename: '[name].css'
      // chunkFileName: '[id].css'
    }),
     new PrerenderSPAPlugin({
      // Required - The path to the webpack-outputted app to prerender.
      staticDir: path.join(__dirname, 'dist'),
      // Required - Routes to render.
      routes: [ '/', '/login' ],
    })
  ],
  mode: 'production'
})

// export default webpackConfig