// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import MintUi from 'mint-ui'
import router from './router'
import Content from '@/components/Content'
import Page from '@/components/Page'
import './assets/normalize.css'

Vue.component('mt-content', Content)
Vue.component('mt-page', Page)

Vue.use(MintUi)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
