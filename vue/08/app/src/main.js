// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import App from './App'

// Vue.config.productionTip = false

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>'
// })


// 被webpack 编译 它不是被nodejs运行
// 编译出来的js 文件放入到html里运行

// 导入导出
// webpack的编译机制和node的运行机制是一样的
// 每一个文件都是一个模块 （需要像node一样导入导出使用了）

// 在webpack里的导入导出 使用的是es6的语法规则 当然兼容nodejs
// nodejs 里内置模块不能使用
// npm下载的第三方模块可以使用（但是该模块中不能包含nodejs的内置模块）

// node的导入方式
// const test = require('./test.js')
// console.log(test)

// es6的导入方式 默认导出的内容使用方式
// import test from './test.js'

// 单独导出的使用方式
// 如果导入的模块使用了export 导出在导入时使用解构的方式导入
// import { a, b } from './test.js'

// 可以把上面两条语句合并在一起
// 单独导出和默认导出的混合使用方式
// import test, { a, b} from './test.js'

// es6 还提供了一个全导入方法
// import * as x from './test.js'
// * as x 的意思是把 test.js里 默认导出和单独导出的合并在一起放到变量x里
// console.log(x)

// const a = 'ccc'
// import { a as c , b } from './test.js'
// 如果单独导出的变量 和当前模块已有的变量发生冲突 可以使用别名(as)来解决
// a as c 这里的as 是把a的变量名称改成c 来运行

// console.log(a, c)


// 如果导出使用的是 es6模块语法 这里的node导入 
// 使用的就是 import * as的语法
// const test = require('./test')
// console.log(test)


// es6导出的 必须是默认导出 和单独导出进行分离使用的
// console.log(test ,a, b)