const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const rm = require('rimraf')

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}
rm(resolve('dist'), err => {
    if (err) throw err
    console.log('deldete dist')
})

const webpackConfig = {
    mode: "production",
    entry: {
        index: ['./src/script/index.js'],
        common: ['jquery', 'underscore'],
    },
    devtool: false,
    output: {
        path: resolve('dist'),
        filename: 'js/[name].[chunkhash:8].js',
        chunkFilename: 'js/[name].[chunkhash:8].js'
        //publicPath: '', // CDN
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                common: {
                    test: /node_modules/,
                    name: "common",
                    chunks: "initial",
                    enforce: true
                }
            }
        }
    },
    resolve: {
        extensions: ['.js', '.scss', '.json'],
        alias: {}
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: {
                loader: 'babel-loader?cacheDirectory',
            },
            exclude: path.resolve(__dirname, 'node_modules'),
            include: path.resolve(__dirname, 'src')
        },
        {
            test: /\.scss$/,
            use: [{
                loader: MiniCssExtractPlugin.loader,
                options: {
                    publicPath: '../'
                }
            },
            {
                loader: 'css-loader',
                options: {
                    "sourceMap": true
                }
            },
            {
                loader: 'postcss-loader',
                options: {
                    "sourceMap": true
                }
            },
            {
                loader: 'sass-loader',
                options: {
                    sourceMap: true,
                }
            }],
            exclude: path.resolve(__dirname, 'node_modules'),
        },
        {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            exclude: /node_modules/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: 'img/[name].[hash:7].[ext]'
            }
        },
        {
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
            exclude: /node_modules/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: 'media/[name].[hash:7].[ext]'
            }
        },
        {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            exclude: /node_modules/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: 'fonts/[name].[hash:7].[ext]'
            }
        },
        {
            test: /\.(html|tpl)$/,//html url
            use: ['html-loader']
        }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].[chunkhash:8].css",
            chunkFilename: "css/[name].[chunkhash:8].css"
        }),
        new OptimizeCSSAssetsPlugin({
            assetNameRegExp: /\.css\.*(?!.*map)/g,  //注意不要写成 /\.css$/g
            cssProcessor: require('cssnano'),
            cssProcessorOptions: {
                discardComments: { removeAll: true },
                safe: true,
                autoprefixer: false
            },
            canPrint: true
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            favicon: 'favicon.ico',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            },
            chunksSortMode: 'dependency'
        }),
        new webpack.ProvidePlugin({ //全局自动加载模块
            _: "underscore",
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, '../static'),
            to: 'static',
            ignore: ['.*']
        }])
    ]
}
if (process.env.npm_config_report) {
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
    webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}
module.exports = webpackConfig