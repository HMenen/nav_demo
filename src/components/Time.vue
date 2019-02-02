<template>
  <div>
    <div v-time="timeNow"></div>
    <div v-time="timeBefore"></div>
    <router-link to="/input" tag="li">input</router-link>
    <button @click="handlerRouter">跳转</button>
    <br>
    使用vuex：{{count}}
    <div>
      <button @click="handleIncrement">+1</button>
      <button @click="handleDecrease">-1</button>
      <button @click="handleAsyncIncrement">+1</button>
      <button @click="isFive">isFive</button>
    </div>
    使用vuex---getters:{{list}}
  </div>
</template>

<script>
export default {
  name: 'time',
  data() {
    return {
      timeNow: (new Date()).getTime(), 
      timeBefore: 1488930695721
    } 
 },
  directives: {
    time: {
        bind: function(el, binding) {
        el.innerHTML = Time.getFormateTime(binding.value);
        el.__timeout__ = setInterval(() => {
        el.innerHTML = Time.getFormateTime(binding.value);
        }, 60000);
        },
        unbind: function() {
        // clearInterval(el.__timeout__);
        // delete el.__timeout__;
        }
    }
  },
  created() {
    console.log(this.$route.params)
  },
  methods: {
    handlerRouter: function () {
      this.$router.push('/input');
    },
    handleIncrement: function () {
      this.$store.commit('increment');
    },
    handleDecrease: function () {
      this.$store.commit('decrease', 5);
    },
    handleAsyncIncrement: function () {
      this.$store.dispatch('asyncIncrement').then(() => {
        console.log(this.$store.state.count);
      });
    },
    isFive: function () {
      new Promise((resolve, reject) => {
        setTimeout(() => {
          let random = Math.random(10);
          if (random > 0.5) {
            resolve (random);
          }else{
            reject (random);
          }
        }, 1000);
      }).then((value) => {
        console.log('sucess', value);
      }).catch((error) => {
        console.log('fail', error);
      });
    }
  },
  computed: {
    count: function () {
      return this.$store.state.count;
    },
    list: function () {
      return this.$store.getters.filteredList;
    }
  }
  // beforeRouteLeave(to, from, next) {
  //     window.document.title = to.meta.title;
  //     next()
  //   },
}

var Time = {
    //获取当前时间戳
    getUnix: function() {
      let date = new Date();
      return date.getTime();
    },

    //获取今天0点0分0秒的时间戳
    getTodayUnix: function() {
      let date = new Date();
      date.setHours(0);
      date.setMinutes(0);
      date.setSeconds(0);
      date.setMilliseconds(0);
      return date.getTime();
    },

    //获取今年1月1日0点0秒的时间戳
    getYearUnix: function() {
      let date = new Date();
      date.setMonth(0);
      date.setDate(1);
      date.setHours(0);
      date.setMinutes(0);
      date.setSeconds(0);
      date.setMilliseconds(0);
      return date.getTime();
    },

    //获取标准年月日
    getLastDate: function(time) {
      let date = new Date(time);
      let month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
      var day = date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate();
      return date.getFullYear() + '-' + month + '-' + day;
    },

    //转换时间
    getFormateTime: function(timestamp) {
        var now = this.getUnix();
        var today = this.getTodayUnix();
        var year = this.getYearUnix();
        var timer = (now - timestamp) / 1000;
        var tip = '';
        if(timer <= 0) {
          tip = '刚刚';
        }else if(Math.floor(timer / 60) <= 0) {
          tip = '刚刚';
        }else if(timer < 3600){
          tip = Math.floor(timer / 60) + '分钟';
        }else if(timer >= 3600 && (timestamp - today) >= 0){
          tip = Math.floor(timer / 3600) + '小时';
        }else if (timer / 86400 <= 31){
          tip = Math.floor(timer / 86400) + '天';
        }else{
          tip = this.getLastDate(timestamp);
        }
        return tip;
    }
}
</script>

<style lang="stylus" scoped>

</style>












