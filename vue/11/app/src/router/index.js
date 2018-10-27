import Vue from 'vue'
import Router from 'vue-router'
import Admin from '@/pages/Admin'
import AdminHome from '@/pages/AdminHome'
import AdminArticleManager from '@/pages/AdminArticleManager'
import Login from '@/pages/Login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/admin',
      component: Admin,
      children: [
        {
          path: '/',
          name: 'AdminHome',
          component: AdminHome
        },
        {
          path: '/articles',
          name: 'AdminArticleManager',
          component: AdminArticleManager
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
