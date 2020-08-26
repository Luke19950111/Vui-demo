<template>
  <div>
    <component v-if="dComponent" :is="dComponent" value="中文"></component>
    <component v-if="dComponent" :is="dComponent" value="readonly" readonly></component>
    <component v-if="dComponent" :is="dComponent" value="disabled" disabled></component>
    <component v-if="dComponent" :is="dComponent" value="error" error="error"></component>
  </div>
</template>
<script>
export default {
  data() {
    return {
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