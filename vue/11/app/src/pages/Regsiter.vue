<template>
    <Layout class="layout">
        <div class="login-box">
            <h2>注册</h2>
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

                <FormItem :error="error.email">
                    <Input 
                        type="email"  
                        v-model="form.email" 
                        autocomplete="off" 
                        prefix="md-person" 
                        @input="error.email=''"
                        placeholder="请输入邮箱" />
                </FormItem>

                <FormItem :error="error.phone">
                    <Input 
                        type="text"  
                        v-model="form.phone" 
                        autocomplete="off" 
                        prefix="md-person" 
                        @input="error.phone=''"
                        placeholder="请输入手机号码" />
                </FormItem>

                <FormItem :error="error.verifiy">
                    <Input 
                        type="text"  
                        v-model="form.verifiy" 
                        autocomplete="off" 
                        prefix="md-person" 
                        @input="error.verifiy=''"
                        placeholder="验证码" />
                    <img @click="reload" :src="code" />
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
                    <Button type="primary" @click="register" long>登录</Button>
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
                code: '/api/captcha.svg?' + Math.random() * 1000,
                form: {
                    username: '',
                    password: '',
                    email: '',
                    phone: '',
                    verifiy:''
                },
                error: {
                    username: '',
                    password: '',
                    email: '',
                    phone: '',
                    verifiy:''
                }
            }
        },
        methods: {
            reload(e) {
                const base = '/api/captcha.svg?'
                this.code = base + e.timeStamp
            },
            register() {
                axios.post('/api/register', this.form).then(res => {
                    // console.log(res)
                    const { code ,err } = res.data
                    if (code === 0) {
                        Object.keys(err).forEach(k => {
                            this.error[k] = err[k]
                        })
                    } else {
                        this.$router.push('/login')
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