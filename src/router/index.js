import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import MyPage from '../views/MyPage'


Vue.use(Router)

export default new Router({
  mode: 'history',
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
export function createRouter () {
    return new Router({
        mode: 'history',
        scrollBehavior: () => ({ y: 0 }),
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
}
