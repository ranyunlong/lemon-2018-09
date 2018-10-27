<template>
    <Layout class="layout">
        <div class="login-box">
            <h2>登录</h2>
            <Form autocomplete="off">
                <FormItem :error="error.username">
                    <Input 
                        type="text"  
                        v-model="form.username" 
                        autocomplete="off" 
                        prefix="md-person" 
                        @input="error.username=''"
                        placeholder="请输入用户名" />
                </FormItem>

                <FormItem :error="error.password">
                    <Input 
                        @input="error.password=''" 
                        type="password" 
                        v-model="form.password" 
                        autocomplete="off" 
                        prefix="md-lock" 
                        placeholder="请输入密码" />
                </FormItem>

                <FormItem>
                    <Button type="primary" @click="login" long>登录</Button>
                </FormItem>
            </Form>
        </div>
    </Layout>
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
                error: {
                    username: '',
                    password: ''
                }
            }
        },
        methods: {
            login() {
                axios.get('/api/users/login', {
                    params: this.form
                }).then(res => {
                    if (!res.data.code) {
                        Object.keys(res.data.err).forEach(k => {
                            this.error[k] = res.data.err[k]
                        })
                    } else {
                        this.$router.push('/admin')
                    }
                }).catch(err => {
                    console.log(err)
                })
            }
        }
    }
</script>

<style scoped lang="less">
    .layout{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .login-box {
            width: 350px;
            background: #fff;
            border: 1px solid #ddd;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            padding: 0 20px;
            h2{
                text-align: center;
                margin: 20px 0;
            }
        }
    }
    
</style>