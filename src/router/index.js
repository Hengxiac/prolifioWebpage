import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },

    {
      path: '/gallery',
      name: 'Gallery',
      component: MainPage
    },
    {
      path: '/aboutme',
      name: 'AboutMe',
      component: MainPage
    }
  ]
})
