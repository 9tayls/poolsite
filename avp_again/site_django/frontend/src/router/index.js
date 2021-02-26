import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',

    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/LogIn.vue')
    }
  },
  {
    path: '/profile',
    name: 'Profile',

    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Profile.vue')
    }
  },
  {
    path: '/blog_home',
    name: 'BlogHome',

    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/BlogHome.vue')
    }
  },
  {
    path: '/blog_detail',
    name: 'BlogDetail',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/BlogDetail.vue')
    }
  },
  {
    path: '/store_home',
    name: 'StoreHome',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/StoreHome.vue')
    }
  },
  {
    path: '/store_list',
    name: 'StoreList',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/StoreList.vue')
    }
  },

  {
    path: '/store_detail',
    name: 'StoreDetail',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/StoreDetail.vue')
    }
  },


]

const router = new VueRouter({
  routes
})

export default router
