import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "../views/home.vue"
import Detail from "../views/detail.vue"

import Shouye from "../views/home/shouye.vue"
import Xiangfa from "../views/home/xiangfa.vue"
import Daxue from "../views/home/daxue.vue"
import Xiaoxi from "../views/home/xiaoxi.vue"
import My from "../views/home/my.vue"

import Attention from "../views/home/shouye/attention.vue"
import Recommend from "../views/home/shouye/recommend.vue"
import Search from "../views/home/shouye/search.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: "/detail/:id?",
    component: Detail
  },
  {
    path: "/home",
    component: Home,
    children: [{
      path: "/home/shouye",
      component: Shouye,
      children: [{
        path: "/home/shouye/attention",
        component: Attention
      },
      {
        path: "/home/shouye/recommend",
        component: Recommend
      },
      {
        path: "/home/shouye/search",
        component: Search
      }]
    },
    {
      path: "/home/xiangfa",
      component: Xiangfa,
    },
    {
      path: "/home/daxue",
      component: Daxue,
    },
    {
      path: "/home/xiaoxi",
      component: Xiaoxi,
    },
    {
      path: "/home/my",
      component: My,
    }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
