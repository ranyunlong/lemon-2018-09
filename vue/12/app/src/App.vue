<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
    #app {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
    }
    .mint-page {
        position: absolute;
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
    }
    .mint-header {
        background: #ff88bb;
        position: static;
    }
    .mint-tabbar{
        position: static;
    }
</style>