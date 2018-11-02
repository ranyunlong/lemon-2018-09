// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// 导入iview
import iview from 'iview'
// 导入iview的样式
// import 'iview/dist/styles/iview.css'


// 注册iview插件
Vue.use(iview)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    if (store.getters.user) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // 加入路由
  store,  // 加入vuex
  components: { App },
  template: '<App/>'
})


// import plugin from './plugin'

// console.log(plugin)

// Vue.use(plugin)


// Vue.useing = function(plugin, ...args) {
//   plugin.install(Vue, ...args)
// }


// Vue.useing(plugin, 1, 2 ,3 ,5 )

/**
 * Vue的插件 必须是一个对象
 * 对象里面必须包含一个install方法
 * install(Vue, options)
 * 1. Vue 就是当前Vue的类
 * 2. options 对象 这个是使用插件时传递的配置参数（这个插件要有配置参数）
 */
// const plugin = {
//   install(Vue, options) {

//   }
// }


// 打包

// 1. vendor 这个文件名称开头的js 文件是node_modules 里导入的文件打包在一起的


// 打包文件分析
// 1. css 如果引入第三方库 css 文件一般比较大
// 2. 图片 svg 资源文件 iconfont 图标库文件
// 3. vendor 导入的第三方依赖文件比较多

// 文件比较大 通常情况下（你的服务器带宽大，服务器的配置高）没有任何问题

// 是用cdn 解决
// 在自己的网页里 导入其他服务器的css文件和js 文件是不会有跨域问题的
// 把自己服务器的负担分配到其他的cdn服务器 （托管js 和 css 或其他的资源文件的）
// cdn服务器它主要放的是一些开源的css 或js 或其他的知名的一些程序文件


// webpack 文件分析插件
// webpack-bundle-analyzer
// 可以帮助你分析代码中有哪些文件