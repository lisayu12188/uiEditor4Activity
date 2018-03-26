import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import MyPage from '../views/MyPage'


Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/mypage',
      name: 'Mypage',
      component:  MyPage
    },
    { path: '/', redirect: '/home' }

  ]
})
