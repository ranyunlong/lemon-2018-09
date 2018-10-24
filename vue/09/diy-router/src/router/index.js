// 需要导入vue模块
import Vue from 'vue'
// 需要导入vue-router模块
import VueRouter from 'vue-router'


// 导入页面组件
import Index from '@/pages/Index'
import Login from '@/pages/Login'
import NotFound from '@/pages/NotFound'
import News from '@/pages/News'
import Detail from '@/pages/Detail'
import NewsList from '@/pages/NewsList'


// vueRouter是vue的一个插件
// 注册插件
Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history', //路由的处理模式
    routes: [// 路由的匹配规则
        { // 一个对象就是一个匹配规则
            // 要匹配的路径
            path: '/', // http://localhost/
            component: Index //给匹配到的路径提供一个组件
        },
        {
            path: '/news',
            component: News,
            children: [ //子路由
                {
                    path: '/',
                    component: NewsList
                },
                {
                    path: ':newsid',
                    component: Detail
                }
            ]
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/404', //匹配任意路径
            component: NotFound
        },
        {
            path: '*',
            redirect: '/404' //重定向处理
        }
    ]
})


// hash模式 mode: 'hash'
// hash模式在路径后面加上#/ 这样浏览器会认为#后面是锚点 不是重新请求新的页面

// history 通过浏览器的历史记录来 切换路由
// history 它只能支持 现代浏览器
// vue会自动降级处理 当 history 不支持的时候会制动使用hash模式


// 谁的子路由 就在谁的组件里切换