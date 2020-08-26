<template>
  <div>
    <component v-if="dComponent" :is="dComponent2">
      <component :is="dComponent" icon="left">left</component>
      <component :is="dComponent" icon="right" icon-position="right">right</component>
    </component>
    <component v-if="dComponent" :is="dComponent2">
      <component :is="dComponent" icon="left"></component>
      <component :is="dComponent">middle</component>
      <component :is="dComponent" icon="right" icon-position="right"></component>
    </component>

  </div>
</template>
<script>
export default {
  data() {
    return {
      dComponent: null,
      dComponent2: null
    }
  },
  mounted() {
    import('../../../src/button').then(module => {
      this.dComponent = module.default
      // use code
    })
    import('../../../src/button-group').then(module => {
      this.dComponent2 = module.default
    })
  }
}
</script>