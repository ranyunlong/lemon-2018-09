// const test = require('./test.js')
import Vue from 'vue/dist/vue.esm'
// import test from './test.js'
import App from './App.vue'
// css 模块直接这样导出
import './style.css'

new Vue({
    el: '#app',
    template: `<App />`,
    components: {
        App
    }
})


