
export default {

  name: 'authlayout',
  component: () => import(/* webpackChunkName: "todolayout" */ '@/modules/auth/layout/AuthLayout.vue'),
  children: [
    {
      path: '',
      name: 'Home',
      component: () => import(/* webpackChunkName: "home" */ '../../auth/views/Home.vue')
    },
    {
      path: '/registration',
      name: 'registration',
      component: () => import(/* webpackChunkName: "registration"*/ '../views/Registration.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login"*/ '../views/Login.vue'),
    },
    {
      path: '/forgetPassword',
      name:'forgetPassword',
      component: () => import(/* webpackChunkName: "forgetpassword"*/ '../views/ForgetPassword.vue')
    }
  ]

}
