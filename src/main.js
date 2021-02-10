import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

// 全局配置
import "./assets/scss/reset.scss"
// 第三方包
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
import http from "./api/config" //axios引入
import "./mock" //mock引入
Vue.use(ElementUI)
Vue.prototype.$http = http
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
