// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './views/MyPage'

Vue.prototype.$ELEMENT = { size: 'small' }

Vue.config.productionTip = false

/* eslint-disable no-new */
export function createApp (ssrContext) {
    // console.log('fdfdf');
    const app = new Vue({
      ssrContext,
      render: h => h(App)
    })
    return { app }
}
