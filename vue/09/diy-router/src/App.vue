<template>
  <div id="app">
    <Navigator />
    <!-- 
      router-view
      给路由匹配上的组件提供显示的位置
    -->
    <router-view />
  </div>
</template>

<script>
import Navigator from '@/components/Navigator'
export default {
  name: 'App',
  components: {
    Navigator
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
