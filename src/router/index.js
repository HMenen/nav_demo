import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Nav from '../components/nav/Nav.vue'
import MyInput from '../components/input/myInput.vue'
import Time from '../components/Time.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/nav',
      name: 'nav',
      component: Nav
    },
    {
      path: '/input',
      name: 'input',
      component: MyInput
    },
    {
      path: '/input',
      name: 'input',
      component: MyInput
    },
    {
      path: '/time',
      name: 'time',
      component: Time
    },
  ]
})
