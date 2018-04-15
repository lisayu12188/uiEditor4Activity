import { createApp } from './server-main.js'

const { app, router } = createApp()
router.onReady(() => {
    app.$mount('#app')
})
