<template>
    <div>
        <h1>登录</h1>
        <div>
            <div>
                用户名：<input type="text" @input="err.username=''" v-model="form.username">
                <span v-if="err.username" style="color:red">{{err.username}}</span>
            </div>
            <div>
                密码：<input type="password" @input="err.password=''" v-model="form.password">
                <span v-if="err.password" style="color:red">{{err.password}}</span>
            </div>
            
            <button @click="login">登录</button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                form: {
                    username: '',
                    password: ''
                },
                err: {
                    username: '',
                    password: ''
                }
            }
        },
        methods: {
            login() {
                axios
                    .get('/api/users/login', {
                        params: this.form
                    })
                    .then((res) => {
                        const { code, err, data } = res.data

                        // code === 0
                        if (!code) {
                            this.err = err
                            // console.log(this.err)
                        }  else {
                            // 我在登录页面里面登录之后如何让路由知道
                            // vuex
                            this.$router.push('/admin.html')
                        }
                    })
                    .catch(err =>{
                        console.log(err)
                    })
            }
        }
    }
</script>

<style scoped>

</style>