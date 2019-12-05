import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Common from './components'
// swiper 轮播图
import Swiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// 全局通用样式
import './index.css'
// 字体图标样式
import './assets/fonts/iconfont.css'
import {
  Button,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Grid,
  GridItem,
  Icon,
  Search,
  NavBar
} from 'vant'

Vue
  .use(Common)
  .use(Button)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Swipe)
  .use(SwipeItem)
  .use(Grid)
  .use(GridItem)
  .use(Icon)
  .use(Search)
  .use(NavBar)
  .use(Swiper)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
