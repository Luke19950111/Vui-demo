<template>
  <div>
    <component v-if="dComponent4" :is="dComponent" style="overflow: hidden">
      <component :is="dComponent4" style="background:#ddd; width:200px; color: black;">sider</component>
      <component :is="dComponent">
        <component :is="dComponent1" style="height: 50px; background:lightskyblue;">header</component>
        <component :is="dComponent3" style="height: 100px; background:deepskyblue;">content</component>
        <component :is="dComponent2" style="height: 50px; background:lightskyblue;">footer</component>
      </component>
    </component>

  </div>
</template>
<script>
export default {
  data() {
    return {
      dComponent: null,
      dComponent1: null,
      dComponent2: null,
      dComponent3: null,
      dComponent4: null
    }
  },
  mounted() {
    import('../../../src/layout').then(module => {
      this.dComponent = module.default
      // use code
    })
    import('../../../src/header').then(module => {
      this.dComponent1 = module.default
      // use code
    })
    import('../../../src/footer').then(module => {
      this.dComponent2 = module.default
      // use code
    })
    import('../../../src/content').then(module => {
      this.dComponent3 = module.default
      // use code
    })
    import('../../../src/sider').then(module => {
      this.dComponent4 = module.default
      // use code
    })
  }
}
</script>