<template>
    <div>
        <!-- 
            要在hash模式和history模式间 兼容的话 
            必须使用 router-link
            不能使用 a标签
         -->
        <router-link to="/">首页</router-link>
        <router-link to="/news">新闻</router-link>
        <router-link to="/login">登录</router-link>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>