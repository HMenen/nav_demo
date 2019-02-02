import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Nav from '../components/nav/Nav.vue'
import MyInput from '../components/input/myInput.vue'
import Time from '../components/Time.vue'
import { resolve } from 'url';
import Vuex from 'vuex';

Vue.use(Router)
Vue.use(Vuex)

export default new Router({
  routes: [
    {
      path: '*',
      name: 'index',
      component: (resolve) => require(['../components/Time.vue'], resolve),
      meta: {
        title: '首页'
      }
    },
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/nav',
      name: 'nav',
      component: Nav,
      meta: {
        title: '导航页'
      }
    },
    {
      path: '/input',
      name: 'input',
      component: MyInput,
      meta: {
        title: '输入页'
      }
    },
    {
      path: '/time',
      name: 'time',
      component: Time,
      meta: {
        title: "时间页"
      },
    },
  ],
})
