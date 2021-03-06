import { createApp } from './server-main'

export default context => {
    // 因为这边 router.onReady 是异步的，所以我们返回一个 Promise
    // 确保路由或组件准备就绪
    return new Promise((resolve, reject) => {
        const { app } = createApp(context)
        resolve(app);
    })
}
