// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex';

Vue.use(Vuex);
Vue.config.productionTip = false;

const store = new Vuex.Store({
  // vuex的配置
  state: {
    count: 0,
    list: [1, 5, 8, 12, 10, 3, 16, 25, 33]
  },
  getters: {
    filteredList: state => {
      return state.list.filter(item => item > 10);
    }
  },
  mutations: {
    increment (state, n = 10) {
      state.count += n;
    },
    decrease (state, n) {
      n = n || 1;
      state.count -= n;
    }
  },
  actions: {
    asyncIncrement (context) {
      return new Promise(resolve => {
        setTimeout(() => {
          context.commit('increment');
          resolve();
        }, 1000);
      })
    }
  }
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  //使用vuex
  store: store,
  components: { App },
  template: '<App/>'
})

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next();
});

