import { createRouter, createWebHashHistory } from 'vue-router'
import authLayoutRouter from '../modules/auth/router'
import todoRouter from '../modules/todo/router'


const routes = [
  {
    path: '/',
    ...authLayoutRouter
  },
  {
    path: '/todo',
    ...todoRouter
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
