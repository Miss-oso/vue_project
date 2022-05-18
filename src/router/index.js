import Vue from 'vue'
import VueRouter from 'vue-router'
/*import HomeView from '../views/HomeView.vue'*/

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    /*component: HomeView*/
    component: () => import(/* webpackChunkName: "HomeView" */ '@/views/HomeView.vue'),
    props: true,
  },
  {
    path: '/page/:id',
    name: 'currentPage',
    component: () => import(/* webpackChunkName: "HomeView" */ '@/views/HomeView.vue'),
    props: true,
  },
  {
    path: '/newcost/payment/:category/:show',
    name: 'newCost',
    component: () => import(/* webpackChunkName: "HomeView" */ '@/views/HomeView.vue'),
    props: true,
  },
  {
    path: '/newcost/payment/:category/:value/:show',
    name: 'newCostFull',
    component: () => import(/* webpackChunkName: "HomeView" */ '@/views/HomeView.vue'),
    props: true,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
