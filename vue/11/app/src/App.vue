<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: "App"
};
</script>

<style lang="less">
html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
}
#app {
  height: 100%;
  width: 100%;
}

.bread-crumb {
    background: #fff;
    padding: 5px;
}
</style>
