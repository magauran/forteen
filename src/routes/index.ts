import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/Home.vue'
import Landing from '../pages/Landing.vue'
import Login from '../pages/Login/Login.vue'
import Registration from '../pages/Registration/Registration.vue'
import Tasks from '@/pages/Tasks/Tasks.vue'
import TasksCategory from '@/pages/TasksCategory/TasksCategory.vue'
import Shop from '@/pages/Shop/Shop.vue'
import Gift from '@/pages/Gift/Gift.vue'
import isMobile from 'ismobilejs'
import { store } from '@/store'

Vue.use(Router)

const isMobileDevice = isMobile(navigator).any

function adjustedComponent (component: Vue.Component): Vue.Component {
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
    path: '/registration',
    name: 'Registration',
    component: adjustedComponent(Registration)
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: adjustedComponent(Tasks)
  },
  {
    path: '/tasks-category/:taskType',
    name: 'TasksCategory',
    component: adjustedComponent(TasksCategory)
  },
  {
    path: '/shop',
    name: 'Shop',
    component: adjustedComponent(Shop)
  },
  {
    path: '/shop/gift/:giftID',
    name: 'Gift',
    component: adjustedComponent(Gift)
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
