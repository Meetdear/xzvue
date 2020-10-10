import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index'
// import Details from '../views/Details'//不要用import过早引入需要懒加载的页面

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: Index
    },
    // { 不能有空的{}否则报错
    //  path: '/details/:lid',
    //  component: Details,
    //  props: true,
    //  },
    { //这里是懒加载，暂时不要问，明天讲
        // 以后除了首页，所有页面都要用懒加载
        path: '/details/:lid',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import (
                /* webpackChunkName: "details" */
                '../views/Details.vue'
            ),
        props: true
    }
]

const router = new VueRouter({
    base: process.env.BASE_URL,
    routes
})

export default router