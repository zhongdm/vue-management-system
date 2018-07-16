// Karma configuration
// Generated on Tue May 29 2018 12:33:57 GMT+0800 (中国标准时间)

var webpack = require('webpack')
const  VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, './', dir)
}


module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'test/unit/**/*.spec.js'
    ],


    // list of files / patterns to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'test/unit/**/*.spec.js': ['webpack']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    webpack: {
        module: {
            rules: [
              {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
              },
              {
                test: /\.vue$/,
                loader: 'vue-loader'
              },
              {
                test: /\.less$/, 
                use: [
                  // devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                  'style-loader',
                  'css-loader',
                  'less-loader'
                ]
              },
              {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'file-loader'
              }
            ]
        },
        // vue: {
        //   loaders: {
        //     js: 'babel-loader'
        //   }
        // },
        
        // babel: {
        //     presets: ['env']
        // },
        resolve: {
            extensions: ['.js', '.vue', '.css'],
            alias: {
                'vue$': 'vue/dist/vue.js',
                '@': resolve('src'),
                'assets': resolve('src/assets')
            }
          },
        // vue: {
        //     loaders: {
        //         js: 'babel-loader'
        //     }
        // },
        // babel: {
        //     presets: ['env']
        // },
        plugins: [
            new VueLoaderPlugin(),
             new HtmlWebpackPlugin({
              title: 'My App',
              filename: "index.html",
              template: "index.html"
            })
        ]
    }
  });
};
