<template>
<div class="tabClas">
  <div class="tabs">
    <div class="tab" 
      v-for="(item, index) in tabList" 
      :key="index"
      @click="onChangeStatus(item)"
      :class="active">
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
      tabList: [],
      currentValue: this.value,
      active: false
    }
  },
  probs: {
    value: {
      type: [String, Number]
    }
  },
  methods: {
    getTabs () {
      return this.$children.filter(function (item) {
        return item.$options._componentTag === 'my-panne';
      })
    },
    updateNav () {
      var _this
      _this = this
      _this.tabList = []
      this.getTabs().forEach((panne, index) => {
        _this.tabList.push({
          name: panne.$attrs.name,
          label: panne.$attrs.label,
          active: false
        });
        if (index === 0) {
          this.currentValue = panne.$attrs.name;
        }
      });
    this.updateStatus();
    },
    updateStatus () {
      var tabs = this.getTabs();
      let _this = this;
      tabs.forEach( tab => {
        tab.show = _this.currentValue == tab.$attrs.name;
      });
    },
    onChangeStatus (item) {
      this.currentValue = item.name;
      this.updateStatus();
      this.tabList[item.index].active = true;
    }
  }
}
</script>

<style scoped lang="stylus">
.tabClas{
  .tabs{
    display: flex;
    .tab{
      flex: 1;
      border: solid black 1px;
      background-color: yellow;
      line-height: 40px;
    }
    .tab active{
      background-color: blue;
    }
  }
}
</style>
