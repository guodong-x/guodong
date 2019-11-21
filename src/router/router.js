import React, { Component } from 'react'

import Main from '../views/main'

import Home from '../views/main/home'
import Cart from '../views/main/cart'

export default {
    routes:[
        {
        path:"/",
        redirect:"/main/home"
    },
    {
        path:"/main",
        component:Main,
        children:[
            {
                path:"main/home",
                component:Home
            },
            {
                path:"main/classify",
                component:()=><p>分类</p>
            },
            {
                path:"main/vip",
                component:()=><p>会员</p>
            },
            {
                path:"main/cart",
                component:Cart
            },
            {
                path:"main/my",
                component:()=><p>我的</p>
            }]
    },
    {
        path:"/detail",
        component:()=><p>详情</p>
    }
]
}

