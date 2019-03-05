import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index.vue';
import Detail from '@/pages/detail/index.vue';
import Edit from '@/pages/edit/index.vue';
import Login from '@/pages/login/index.vue';
import My from '@/pages/my/index.vue';
import Register from '@/pages/register/index.vue';
import User from '@/pages/user/index.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/my',
      name: 'My',
      component: My
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
  ]
})
