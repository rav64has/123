import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component:() => import('../views/Blog.vue')
  },
  { 
    path: '/contacte',
    name: 'contacte',
    component:() => import('../views/contacte.vue')
    
  },
  {
    path: '/regict',
    name: 'Regict',
    component:() => import('../views/Regict.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component:() => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
