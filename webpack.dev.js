
const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const merge = require('webpack-merge')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const PrerenderSPAPlugin = require('prerender-spa-plugin')


// const devWebpackConfig
module.exports = merge(baseWebpackConfig, {
  module: {
    rules: [
    // {
    //     test: /\.css$/, 
    //     use: [
    //       // devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
    //       'style-loader',
    //       'css-loader'
    //     ]
    //   },
      {
        test: /\.(le|c)ss$/, 
        use: [
          // devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'style-loader',
          'css-loader',
          // {
          //    loader: 'postcss-loader',
          //   options: {
          //     sourceMap: true,
          //     config: {
          //       path: 'postcss.config.js'  // 这个得在项目根目录创建此文件
          //     }
          //   }
          // },
          'postcss-loader',
          'less-loader'


        ]
      }
    ]
  },
  devServer: {
    // historyApiFallback: true,
    contentBase: path.join(__dirname, 'dist'),
    host: '127.0.0.1',
    disableHostCheck: true, // 解决127.0.0.1指向其他域名时出现"Invalid Host header"问题
    port: 9000
    
  },
  devtool: '#cheap-module-eval-source-map',
  /* 提取公共内容 */
  optimization: {
    splitChunks: {
      // chunks: "async",
      // minSize: 30000,
      // minChunks: 1,
      // maxAsyncRequests: 5,
      // maxInitialRequests: 3,
      // automaticNameDelimiter: '~',
      // name: true,
      // cacheGroups: {
      //   vendors: {
      //     test: /[\\/]node_modules[\\/]/,
      //     priority: -10
      //   },
      //   default: {
      //     minChunks: 2,
      //     priority: -20,
      //     reuseExistingChunk: true
      //   }
      // }
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
        // },
        // styles: {
        //   name: 'styles',
        //   test: /\.less$/,
        //   chunks: 'all',
        //   enforce: true
        }
    }
    },
    // runtimeChunk: {
    // },
    namedModules: true,

  },
  plugins: [
    // 打包开始，清空dist文件夹
    new CleanWebpackPlugin(['dist']),

    // 配置全局变量
    new webpack.DefinePlugin({
      'process.env': require('./config/dev.env')
    }),

    // 提取css
    new MiniCssExtractPlugin({
      // filename: path.posix.join('static', 'css/[name].css')
      filename: '[name].css'
      // chunkFileName: '[id].css'
    }),

    new CopyWebpackPlugin([
      {
        from: path.join(__dirname + '/static'),
        to: ''
      }
    ]),
    new PrerenderSPAPlugin({
      // Required - The path to the webpack-outputted app to prerender.
      staticDir: path.join(__dirname, 'dist'),
      // Required - Routes to render.
      routes: [ '/', '/login' ],
    })
  ],
  mode: 'development'
})

// module.exports = devWebpackConfig