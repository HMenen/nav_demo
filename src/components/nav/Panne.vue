<template>
    <div class="panne" v-show="show">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'panne',
  probs: {
    name: {
      type: String,
    },
    label: {
      type: String,
      default: ''
    }
  },
  mounted () {
    this.updateNav();
  },
  methods: {
    updateNav () {
      this.$parent.updateNav();
    }
  },
  data() {
    return{
      show: true
    }
  }
}
</script>

<style>
.panne{
  width: 100%;
  height: 180px;
  background-color: aqua;
}
</style>
