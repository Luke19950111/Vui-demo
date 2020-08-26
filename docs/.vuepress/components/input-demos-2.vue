<template>
  <div>
    <component :is="dComponent" v-model="value"></component>
    <div>value：{{value}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 'value',
      dComponent: null
    }
  },
  mounted() {
    import('../../../src/input').then(module => {
      this.dComponent = module.default
      // use code
    })
  }
}
</script>