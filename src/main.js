// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { createRouter } from './router'
import store from './store'
import {Menu,Icon,Form,Popover,Container,Button,ButtonGroup, Select,Option,OptionGroup,Tooltip,Input,Upload,FormItem,InputNumber,ColorPicker,Radio,RadioGroup,RadioButton,Checkbox,CheckboxButton,CheckboxGroup} from 'element-ui'

Vue.prototype.$ELEMENT = { size: 'small' }
Vue.use(Menu)
Vue.use(Icon)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Popover)
Vue.use(Container)
Vue.use(Button)
Vue.use(ButtonGroup)
Vue.use(Tooltip)
Vue.use(Select)
Vue.use(Tooltip)
Vue.use(Input)
Vue.use(Upload)
Vue.use(InputNumber)
Vue.use(ColorPicker)
Vue.use(Radio)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Checkbox);
Vue.use(CheckboxButton);
Vue.use(CheckboxGroup);
Vue.use(Select);
Vue.use(Option);
Vue.use(OptionGroup);

Vue.config.productionTip = false

/* eslint-disable no-new */
// export function createApp (ssrContext) {
//     const router = createRouter()
//     const app = new Vue({
//       store,
//         router,
//         ssrContext,
//         render: h => h(App)
//     })
//     return { app, router }
// }
//
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
