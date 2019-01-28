<template>
  <my-tab v-model="activeKey">
    <my-panne name="1" label="标签一">
      标签一的内容
    </my-panne>
    <my-panne name="2" label="标签二">
      标签二的内容
    </my-panne>
    <my-panne name="3" label="标签三">
      标签三的内容
    </my-panne>
  </my-tab>
</template>

<script>
import MyPanne from './Panne.vue'
import MyTab from './Tabs.vue'

export default {
  name: 'nav',
  components: {
    MyPanne,
    MyTab
  },
  data() {
    return{
      activeKey: 1,
    }
  }
}
</script>

<style>

</style>
