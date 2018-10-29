import Vue from 'vue'
import Router from 'vue-router'
import Admin from '@/pages/Admin'
import AdminHome from '@/pages/AdminHome'
import AdminArticleManager from '@/pages/AdminArticleManager'
import Login from '@/pages/Login'
import Regsiter from '@/pages/Regsiter'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/admin',
      component: Admin,
      meta: {
        auth: true
      },
      children: [
        {
          path: '/',
          name: 'AdminHome',
          component: AdminHome,
          meta: {
            auth: true
          },
        },
        {
          path: '/articles',
          name: 'AdminArticleManager',
          component: AdminArticleManager,
          meta: {
            auth: true
          },
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/reg',
      name: 'Regsiter',
      component: Regsiter
    },
  ]
})
