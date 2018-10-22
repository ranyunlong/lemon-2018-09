<template>
  <!-- 这里的代码是组件的template选项 -->
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
  </div>
</template>

<script>
// js脚本
// App.vue这个组件它导入了它需要的 HelloWorld组件
import HelloWorld from './components/HelloWorld'
export default {
  name: 'Bpp',
  components: {
    HelloWorld
  },
  methods:{
    run() {

    }
  }
}

// var style = document.createElement('style')
//   style.innerText = `#app {font-family: 'Avenir', Helvetica, Arial, sans-serif;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;text-align: center;color: #2c3e50;margin-top: 60px;}`
//   document.head.appendChild(style)
</script>

<style>
/* css样式代码 这里的代码是被webpack处理的 */
#app {font-family: 'Avenir', Helvetica, Arial, sans-serif;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;text-align: center;color: #2c3e50;margin-top: 60px;}
</style>
