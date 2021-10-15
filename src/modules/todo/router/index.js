
export default {

  name: 'todolayout',
  component: () => import(/* webpackChunkName: "todolayout" */ '@/modules/todo/layout/TodoLayout.vue'),
  children: [
    {
      path: '',
      name: 'Home',
      component: () => import(/* webpackChunkName: "home" */ '../../todo/views/Home.vue')
    },
    {
      path: '/registration',
      name: 'registration',
      component: () => import(/* webpackChunkName: "registration"*/ '../views/Registration.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login"*/ '../views/Login.vue')
    }
  ]

}
