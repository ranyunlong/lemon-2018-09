<template>
    <div>
        <h1>商品页面</h1>
        <ul>
            <li v-for="(item, index) in Array(5)" :key="index">
                <router-link :to="'/goods/type'+(index+1)">
                    商品类型{{index+1}}
                </router-link>
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