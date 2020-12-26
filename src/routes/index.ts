import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Landing from '../pages/Landing.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Dashboard from '../components/Dashboard.vue'
import isMobile from 'ismobilejs'

Vue.use(Router)

const isMobileDevice = isMobile(navigator).any

const routes = [
  {
    path: '/',
    name: 'home',
    component: isMobileDevice ? Home : Landing,
    meta: {
      title: 'ForTeen'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  }
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title ?? 'ForTeen'
  next()
})

export default router
