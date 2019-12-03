import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Qbrw from "../views/home/qbrw.vue"
import Jxzdrw from "../views/home/jxzdrw.vue"
import Qxzzdrw from "../views/home/qxzzdrw.vue"
import Ywcdrw from "../views/home/ywcdrw.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: "/home"
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [
      {
        path: "/home/qbrw",
        component: Qbrw
      },
      {
        path: "/home/jxzdrw",
        component: Jxzdrw
      },
      {
        path: "/home/qxzzdrw",
        component: Qxzzdrw
      },
      {
        path: "/home/ywcdrw",
        component: Ywcdrw
      }
    ]
  },
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
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
