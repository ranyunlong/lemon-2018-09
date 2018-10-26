<template>
    <div>
        <h1>首页</h1>
        <button @click="go">跳转至类型1男装商品2的详情页</button>
        <input type="text" v-model="xxx">
    </div>
</template>

<script>
    export default {
        data() {
            return {
                xxx: ''
            }
        },
        methods: {
            go() {
                // 这个对象用于获取路由的参数数据
                //this.$route

                // 跳转路由
                //this.$router
                //console.log(this.$router)
                // $router 里常用方法
                // 1. push 跳转到某个页面 push会添加历史记录
                // 2. replace 也是跳转到某个页面 会替换掉当前的记录
                // 3. go(-1)
                // 4. back() 返回上一个页面

                // push会添加历史记录
                // 从a页面跳转到b页面 可以从b页面返回到a页面
                
                // 如果你要使用router 传递参数到目标页面
                // 除了使用动态参数以外
                // 还可以使用以下的query方式传参 查询字符串参数
                // 要使用query 传递查询字符串必须和path一起使用
                // this.$router.push({
                //     path: '/goods/type1/nz2.html',
                //     query: {
                //         xx: 100
                //     }
                // })

                // 要直接传递路径参数的方式跳转
                // 必须给当前要跳转的路由路径 取一个name 名称
                // 然后在配合 params 跳转路径
                // this.$router.push('/goods/type1/nz2.html')
                // 在push的使用要使用 params传递路径参数 必须配合 路由路径的name属性来使用
                this.$router.push({
                    name: 'GoodsDetail',
                    params: {
                        type: 'type1',
                        sid: 'nz2.html'
                    },
                    query: { // 还可以附加 查询字符串参数
                        a: 100
                    }
                })
                
                // replace 从a页面跳转到b页面 但是再也无法从b页面返回到a页面了 因为a页面从历史记录里被替换掉了
                // this.$router.replace('/goods/type1/nz2.html')
            }            
        }
    }
</script>

<style scoped>

</style>