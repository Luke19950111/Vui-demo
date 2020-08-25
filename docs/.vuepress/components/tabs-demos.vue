<template>
  <div>
    <component v-if="dComponent5" :is="dComponent" :selected="selected">
      <component :is="dComponent2">
        <component :is="dComponent3" name="tab1">tab1</component>
        <component :is="dComponent3" name="tab2">tab2</component>
      </component>
      <component :is="dComponent4">
        <component :is="dComponent5" name="tab1">content 1</component>
        <component :is="dComponent5" name="tab2">content 2</component>
      </component>
    </component>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dComponent: null,
      dComponent2: null,
      dComponent3: null,
      dComponent4: null,
      dComponent5: null,
      selected: 'tab1'
    }
  },
  mounted() {
    import('../../../src/tabs').then(module => {
      this.dComponent = module.default
    })
    import('../../../src/tabs-head').then(module => {
      this.dComponent2 = module.default
    })
    import('../../../src/tabs-body').then(module => {
      this.dComponent4 = module.default
    })
    import('../../../src/tabs-item').then(module => {
      this.dComponent3 = module.default
    })
    import('../../../src/tabs-pane').then(module => {
      this.dComponent5 = module.default
    })

    // import('../../../src/tabs').then(module => {
    //   this.dComponent = module.default
    // }).then(() => {
    //   import('../../../src/tabs-head').then(module => {
    //     this.dComponent2 = module.default
    //   })
    //
    // }).then(() => {
    //   import('../../../src/tabs-body').then(module => {
    //     this.dComponent4 = module.default
    //   })
    //
    // }).then(() => {
    //   import('../../../src/tabs-item').then(module => {
    //     this.dComponent3 = module.default
    //   })
    //
    // }).then(() => {
    //   import('../../../src/tabs-pane').then(module => {
    //     this.dComponent5 = module.default
    //   })
    //
    // })

  }
}
</script>