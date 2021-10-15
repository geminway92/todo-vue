import { createRouter, createWebHashHistory } from 'vue-router'
import todoLayoutRouter from '../modules/todo/router'


const routes = [
  {
    path: '/',
    ...todoLayoutRouter

  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
