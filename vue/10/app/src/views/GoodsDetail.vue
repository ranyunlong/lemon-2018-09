<template>
    <div>
        <h1>商品详情</h1>
        <h4>当前商品的类型是：{{type}}</h4>
        <h4>当前商品的类型是：{{sid}}</h4>

        <button @click="click">返回</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                type: '',
                sid: ''
            }
        },
        created() {
            const { type, sid } = this.$route.params
            // 在路径上传递的query参数可以使用$route对象的query属性来获取
            console.log(this.$route.query)
            this.type = type
            this.sid = sid.replace('.html','')
        },
        methods: {
            click() {
                this.$router.back()
            }
        }
    }
</script>

<style scoped>

</style>