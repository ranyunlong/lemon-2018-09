// const test = require('./test.js')
import Vue from 'vue'
// import test from './test.js'
import App from './App'
// css 模块直接这样导出
import './style'
import './style.less'

new Vue({
    el: '#app',
    template: `<App />`,
    components: {
        App
    }
})

export default Vue

export const a = 100


