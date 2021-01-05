import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/Home.vue'
import Landing from '../pages/Landing.vue'
import Login from '../pages/Login/Login.vue'
import Register from '../components/Register.vue'
import Dashboard from '../components/Dashboard.vue'
import isMobile from 'ismobilejs'

Vue.use(Router)

const isMobileDevice = isMobile(navigator).any

function adjustedComponent (component: Vue.Component) {
  return isMobileDevice ? component : Landing
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: adjustedComponent(Home),
    meta: {
      title: 'ForTeen'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: adjustedComponent(Login)
  },
  {
    path: '/register',
    name: 'Register',
    component: adjustedComponent(Register)
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: adjustedComponent(Dashboard)
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
