import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { lists } from "./list";

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(ElementUI);

let routes = [];

for (let i = 0; i < lists.length; i++) {
  const element = lists[i];
  routes.push({
    path: '/' + element.link,
    component: () => import('./pages/' + element.link + '.vue'),
    name: element.link,
  })
}

let router = new VueRouter({
  routes: routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
