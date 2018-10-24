<template>
    <div>
        <h1>新闻</h1>
        <ul>
            <li v-for="(item, index) in Array(5)" :key="index">
                <router-link :to="'/news/0'+ (index + 1)">新闻{{index + 1}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>