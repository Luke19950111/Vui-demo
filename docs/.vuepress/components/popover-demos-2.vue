<template>
  <div>
    <component v-if="dComponent2" :is="dComponent" trigger="hover">
      <component :is="dComponent2">上方弹出</component>
      <template slot="content">
        弹出内容
      </template>
    </component>
    <component v-if="dComponent2" :is="dComponent" position="bottom" trigger="hover">
      <component :is="dComponent2">下方弹出</component>
      <template slot="content">
        弹出内容
      </template>
    </component>
    <component v-if="dComponent2" :is="dComponent" position="left" trigger="hover">
      <component :is="dComponent2">左边弹出</component>
      <template slot="content">
        弹出内容
      </template>
    </component>
    <component v-if="dComponent2" :is="dComponent" position="right" trigger="hover">
      <component :is="dComponent2">右边弹出</component>
      <template slot="content">
        弹出内容
      </template>
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
    import('../../../src/popover').then(module => {
      this.dComponent = module.default
      // use code
    })
    import('../../../src/button').then(module => {
      this.dComponent2 = module.default
      // use code
    })
  }
}
</script>