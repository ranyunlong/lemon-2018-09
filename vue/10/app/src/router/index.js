// vue 路由的基础操作 导入依赖
import Vue from 'vue'
import Router from 'vue-router'

// 导入页面组件
import Home from '@/views/Home'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Admin from '@/views/Admin'
import Goods from '@/views/Goods'
import Notfound from '@/views/Notfound'
import GoodsType from '@/views/GoodsType'
import GoodsTypeList from '@/views/GoodsTypeList'

import GoodsList from "@/views/GoodsList"
import GoodsDetail from "@/views/GoodsDetail"





// 注册路由
Vue.use(Router)


// 创建路由对象导出
export default new Router({
  mode: 'history', // 默认是hash模式的
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/goods',
      component: Goods,
      children: [
        {
          path: '/',
          component: GoodsList,
        },
        {
          path: ':type',
          component: GoodsType,
          children: [
            {
              path: '/',
              component: GoodsTypeList,
            },
            {
              name: 'GoodsDetail',
              path: ':sid',
              component: GoodsDetail
            }
          ]
        }
      ]
    },
    {
      path: '/log.html',
      component: Login,
    },
    {
      path: '/reg.html',
      component: Register
    },
    {
      path: '/admin.html',
      component: Admin,
      meta: {
        auth: true
      }
    },
    {
      path: '/404.html',
      component: Notfound
    },
    {
      path: '*',
      redirect: '/404.html'
    }
  ]
})
