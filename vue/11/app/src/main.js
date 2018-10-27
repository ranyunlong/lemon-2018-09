// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 导入iview
import iview from 'iview'
// 导入iview的样式
import 'iview/dist/styles/iview.css'


// 注册iview插件
Vue.use(iview)



Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
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