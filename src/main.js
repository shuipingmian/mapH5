import Vue from "vue"
import "./cube-ui"
import App from "./App.vue" // 主窗口文件
import router from "./router" // 路由配置
import store from "./store"
import "./assets/publie.css" // 公共样式
import "./assets/publie.js" // 公共方法
import "amfe-flexible" // flex布局
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
