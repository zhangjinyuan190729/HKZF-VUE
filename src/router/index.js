import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home'
import Index from '../pages/Index'
import Houselist from '../pages/Houselist'
import New from '../pages/New'
import Profile from '../pages/Profile'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [{
      path: '',
      component: Index
    },
    {
      path: 'houselist',
      component: Houselist
    },
    {
      path: 'new',
      component: New
    },
    {
      path: 'profile',
      component: Profile
    }
    ]
  },
  {
    path: '/map',
    name: 'map',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../pages/Map.vue')
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
