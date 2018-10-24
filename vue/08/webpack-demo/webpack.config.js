// webpack 的一个编译配置文件
// 作用是告诉webpack 怎么去编译我们的代码的规则
// 在这里属于webpack的程序的js webpack是运行到nodejs里的
// 所以这里写的代码是运行到nodejs里的
// 也就说明在这里不能用es6的导入导出
// 说明webpack 默认是具有处理js json文件能力的
// 但是没有处理其他文件的能力

const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const  htmlWebpackPlugin = require('html-webpack-plugin')
// 导出webpack的配置对象
// 在启动webpack的时候 会来加载这个文件并且读取配置信息
module.exports = {
    entry: {
        app: './src/main.js',
        test: './src/test.js'
    }, //这个选项主要是设置 程序编译的起始位置
    output: { // 这个选项主要是设置编译好的代码输出到哪里
        path: path.resolve('dist'), //输出路径
        // filename: '[name].[hash].js' //输出的文件名称
        library: "test", // 给打包好的代码定义接口
        filename: '[name].js',
        libraryTarget: 'umd',  // exports  window 常用的cmd 和 umd 
    },
    module: { // 这个选项是用来配置 webpack如何去处理除了js json之外的模块
        rules: [ // 又来配置webpack的解析规则
            {// 每一个规则是一个对象
                test: /\.vue$/, // 这个选项用来匹配规则是否匹配 值是一个正则表达式
                use: 'vue-loader', // loader 是具有处理该文件能力的模块
            },
            {
                test: /\.css$/,
                // 要处理css 就要使用css的loader来处理
                // 使用loader 
                // css-loader 负责解析css文件
                // style-loader 负责把css 插入到dom 要比css-loader先运行
                use: ['style-loader' ,'css-loader'] 
            },
            {
                test: /\.less$/,
                use: ['style-loader' ,'css-loader' ,'less-loader']
            },
            {
                test: /\.png$/,
                // url-loader 把文件处理base64字符
                // file-loader 直接复制文件到打包好的目录
                use: [{
                    loader: 'file-loader',
                    options: {
                        publicPath: 'dist/'
                    }
                }]
            }
        ]
    },
    devServer: { // 用来配置webpack-dev-server
        port: 7070,
        contentBase: path.resolve('public'),
        host: "localhost",
        // proxy:{}
        open: true
    },
    resolve:{
        // 配置一些 后缀名自动匹配
        extensions: [".js", ".json", ".vue", ".css"],
        // 定义路径别名
        alias: {
            "@assets": path.resolve('src', 'assets'),
            "@": path.resolve('src', 'components'),
            "vue": path.resolve('node_modules','vue','dist', 'vue.esm')
        }
    },
    plugins: [ 
        new VueLoaderPlugin(),
        // 使webpack-dev-server 根据提供的html模板文件输出页面
        new htmlWebpackPlugin({
            filename: "index.html",
            template: path.resolve('index.html'),  // 模板的地址
        })
    ],
    mode: 'development',  // development 开发模式 production 生产模式
}


// 1. entry 入口
// 2. output 输出
// 3. module 用来赋予webpack解析模块（任何文件都被webpack当做模块）的能力的
// 4. plugins webpack内置的插件
// 5. mode development 开发模式 production 生产模式
// 6. webpack-dev-server 如果要使用webpack 的开发服务器(需要安装该模块 全局)


// 插件

// 1. html-webpack-plugin 它是用来把webpack-dev-server
// 编译好的文件自动插入到html中 （需要安装 html-webpack-plugin）

// 

