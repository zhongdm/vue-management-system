
const path = require('path')
const webpack = require('webpack')
const  VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const devMode = process.env.NODE_ENV !== 'production'

function resolve (dir) {
  return path.join(__dirname, './', dir)
}

module.exports = {
  context: path.resolve(__dirname, './'),
  entry: './src/main.js',
  output: {
    filename: devMode ? '[name].js' : path.posix.join('static', 'js/[name].js'),
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: devMode ? '[name].[chunkhash].js' : path.posix.join('static', 'js/[name].[chunkhash].js')  // f非入口文件的命名规则
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.vue$/, 
        loader: 'vue-loader'
        
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/, 
        loader: [
          'style-loader',
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.less$/, 
        loader: [
          // devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          },
          'less-loader'
        ]
      },
      // {
      //   test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      //   loader: 'url-loader',
      //   options: {
      //     limit: 40000
      //     // name: utils.assetsPath('img/[name].[hash:7].[ext]')
      //   }
      // }
       {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'file-loader'
      }
      
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.css'],
    alias: {
        'vue$': 'vue/dist/vue.js',
        '@': resolve('src'),
        'assets': resolve('src/assets')
    }
  },
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
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all"
        },
        styles: {
          name: 'styles',
          test: /\.less$/,
          chunks: 'all',
          enforce: true
        }
    }
    // },
    // runtimeChunk: {
    }
  },
  plugins: [
    // webpack 初始化
    new VueLoaderPlugin(),

    // 配置全局变量
    new webpack.DefinePlugin({
      'process.env': require('./config/prod.env')
    }),

    // 打包开始，清空dist文件夹
    new CleanWebpackPlugin(['dist']),

    // webpack编译过程中报错，不会阻塞编译，在编译结束后报错
    new webpack.NoEmitOnErrorsPlugin(),
    // 入口html
    new HtmlWebpackPlugin({
      title: 'My App',
      filename: "index.html",
      template: "index.html"
    }),

    // 提取css
    new MiniCssExtractPlugin({
      filename: path.posix.join('static', 'css/[name].css')
      // chunkFileName: '[id].css'
    })
  ],
  mode: 'development'
}