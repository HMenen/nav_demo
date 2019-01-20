<template>
    <div class="panne" >
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
      console.log('----111----')
      this.$parent.updateNav();
    }
  }
}
</script>

<style>

</style>
