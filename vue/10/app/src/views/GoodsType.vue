<template>
    <div>
        <router-view />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                type: ''
            }
        },
        beforeCreate() {

        },
        created() {
            // 这个路由参数 在第一次加载的时候是检测不了路由的变化的
            // 第一次加载的路由数据需要通过 vue的生命周期函数函数来获取
            // 预加载
            const { type } = this.$route.params
            this.type = type
        },
        beforeMount() {

        },
        mounted() {

        },
        watch: {
            // 这个路由参数 在第一次加载的时候是检测不了路由的变化的
            $route({params}) { // 监听路由数据
                this.type = params.type
            }
        }
    }
</script>

<style scoped>

</style>