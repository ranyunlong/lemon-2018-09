// webpack 的一个编译配置文件
// 作用是告诉webpack 怎么去编译我们的代码的规则
// 在这里属于webpack的程序的js webpack是运行到nodejs里的
// 所以这里写的代码是运行到nodejs里的
// 也就说明在这里不能用es6的导入导出
// 说明webpack 默认是具有处理js json文件能力的
// 但是没有处理其他文件的能力

const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

// 导出webpack的配置对象
// 在启动webpack的时候 会来加载这个文件并且读取配置信息
module.exports = {
    entry: './src/main.js', //这个选项主要是设置 程序编译的起始位置
    output: { // 这个选项主要是设置编译好的代码输出到哪里
        path: path.resolve('dist'), //输出路径
        filename: 'bundle.js' //输出的文件名称
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
                test: /\.png$/,
                // url-loader把文件处理base64字符
                //
                use: [{
                    loader: 'file-loader',
                    options: {
                        publicPath: 'dist/'
                    }
                }]
            }
        ]
    },
    plugins: [ new VueLoaderPlugin() ],
    mode: 'development',  // development 开发模式 production 生产模式
}

