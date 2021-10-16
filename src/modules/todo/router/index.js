
export default {

  name: 'todorouter',
  component: () => import(/* webpackChunkName: "todorouter" */ '@/modules/todo/layout/TodoLayout.vue'),
  children: [
    {
      path: '',
      name: 'todolayaout',
      component: () => import(/* webpackChunkName: "home" */ '../../todo/layout/TodoLayout.vue')
    },
  ]
  

}
