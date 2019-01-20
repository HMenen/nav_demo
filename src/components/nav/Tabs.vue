<template>
<div class="tabClas">
  <div class="tabs">
    <div v-for="(item, index) in tabList" :key="index">
      {{ item.label }}
    </div>
  </div>
  <div class="tabContent">
    <slot></slot>
  </div>  
</div>
</template>

<script>
export default {
  name: 'tab',
  data() {
    return{
      tabList: []
    }
  },
  probs: {
    value: {
      type: [String, Number]
    }
  },
  methods: {
    getTabs () {
      return this.$children.$filter(function (item) {
        console.log('--------------')
        return item.$option.name === 'tab'
      })
    },
    updateNav () {
      var _this
      this.forEach( (panne, index) => {
        _this.tabList.push({
          name: panne.name,
          label: panne.label,
        });
      });
    }
  }
}
</script>

<style>

</style>
