import { createRouter, createWebHashHistory } from 'vue-router'
import authLayoutRouter from '../modules/auth/router'
import todoRouter from '../modules/todo/router'

import isAuthenticatedGuard from '../modules/auth/router/auth-guard'


const routes = [
  {
    path: '/',
    ...authLayoutRouter
  },
  {
    path: '/todo',
    beforeEnter: [ isAuthenticatedGuard ],
    ...todoRouter
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
