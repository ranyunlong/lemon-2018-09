<template>
  <div id="app">
    <img src="./assets/logo.png">
    哈哈呵呵
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}

</script>

<style>
#app {
  background: red;
}
</style>
