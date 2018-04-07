const fs = require('mz/fs')
const path = require('path')
const Koa = require('koa')
const KoaRuoter = require('koa-router')
const bodyParser = require('koa-bodyparser');
const serve = require('koa-static')
var cors = require('koa2-cors');
const { createBundleRenderer } = require('vue-server-renderer')
const LRU = require('lru-cache')

const resolve = file => path.resolve(__dirname, file)
const app = new Koa()
const router = new KoaRuoter()
const template = fs.readFileSync(resolve('./src/index.template.html'), 'utf-8')

import * as Uitils from './src/utils'

function createRenderer (bundle, options) {
    return createBundleRenderer(
        bundle,
        Object.assign(options, {
            template,
            cache: LRU({
                max: 1000,
                maxAge: 1000 * 60 * 15
            }),
            basedir: resolve('./dist'),
            runInNewContext: false
        })
    )
}


let renderer
const bundle = require('./dist/vue-ssr-server-bundle.json')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')
renderer = createRenderer(bundle, {
    clientManifest
})

/**
 * 渲染函数
 * @param ctx
 * @param next
 * @returns {Promise}
 */

 // async function getFileData(ctx){
 //   const time =  Uitils.parseQuery(ctx.url.substr(1)).time
 //   const file = Uitils.parseTime(time)+'.json'
 //   const filePath = path.join(__dirname, './data/'+file);
 //   console.log(filePath)
 //
 //   const fileName = await fs.readFile(filePath,'utf8', (err, data) => {
 //     if (err) throw err;
 //     console.log(data)
 //     // resolve(data)
 //     return data
 //   });
 // }
async function render(ctx) {
  ctx.set("Content-Type", "text/html");

  const time = ctx.url.split('=')[1]
  const file = Uitils.parseTime(time)+'.json'
  const filePath = path.join(__dirname, './data/'+file);
  if (!(await fs.exists(filePath))) {
    ctx.throw(404, 'file not exist');
    return;
  }

  const data = await fs.readFile(filePath, 'utf8');
  const fileData = JSON.parse(data);
  const context = {
      title: fileData.pageConfig.actTitle,
      url: ctx.url,
      components: fileData.components
  };
  console.log(context);
  const html = await renderToString(renderer, context);
  ctx.body = html;
}


function renderToString(renderer, context) {
  return new Promise((resolve, reject) => {
    renderer.renderToString(context, (err, html) => {
      err ? reject(err) : resolve(html);
    });
  });
}


app.use(bodyParser());
app.use(serve('/dist', './dist', true))
app.use(serve('/public', './public', true))
app.use(cors({
    origin: function (ctx) {
        if (ctx.url === '/test') {
            return "*"; // 允许来自所有域名请求
        }
        return 'http://dev.91jkys.com:8080'; //这样就能只允许 http://localhost:8080 这个域名的请求了
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))


router.get('/activities', require('./lib/actions/getActivities'));
router.post('/activities', require('./lib/actions/saveActivity'));
router.get('/current_act', require('./lib/actions/getCurrentAct'));
router.get('/html', render)

app.use(router.routes()).use(router.allowedMethods())

const port = process.env.PORT || 8089
app.listen(port, '0.0.0.0', () => {
    console.log(`server started at localhost:${port}`)
})
