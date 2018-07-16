
const path = require('path')
const  VueLoaderPlugin = require('vue-loader/lib/plugin')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const devMode = process.env.NODE_ENV !== 'production'

function resolve (dir) {
  return path.join(__dirname, './', dir)
}

module.exports = {
  context: path.resolve(__dirname, './'),
  entry: {
    entry: './src/main.js'
    // entry: './entry.client.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'), // webpack输出的目标文件夹路径
    chunkFilename: '[name].[chunkhash].js'  // f非入口文件的命名规则
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
  plugins: [
    // webpack 初始化
    new VueLoaderPlugin(),


    // webpack编译过程中报错，不会阻塞编译，在编译结束后报错
    // new webpack.NoEmitOnErrorsPlugin(),
    // 入口html
    new HtmlWebpackPlugin({
      title: 'My App',
      filename: "index.html",
      template: "index.html"
    }),
  ]
}