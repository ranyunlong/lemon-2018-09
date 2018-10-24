<template>
    <div>
        <h1>{{title}}</h1>
        <p>{{id}}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                id: '',
                title: ''
            }
        },
        watch: { // watch可以监听实例里所有成员的变化
            $route(v) {
                // console.log(v)
                this.id = v.params.newsid
                this.title = v.params.newsid + '标题'
                // 还可以通过这个新闻id 去后台ajax请求新闻的数据来显示不同的内容
            }
        },
        created() {
            // $route 用来获取当前页面的路由信息
            this.id = this.$route.params.newsid
            this.title = this.$route.params.newsid + '标题'
            // $router 用来处理路由跳转的方法集合
            // console.log(this.$route)
            // console.log(this.$router)
        }
    }
</script>

<style scoped>

</style>