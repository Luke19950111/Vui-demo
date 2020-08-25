<template>
  <div>
    <component v-if="dComponent" :is="dComponent">默认按钮</component>
    <component v-if="dComponent" :is="dComponent" icon="setting">有icon</component>
    <component v-if="dComponent" :is="dComponent" icon="setting" icon-position="right">icon位置</component>
    <component v-if="dComponent" :is="dComponent" :loading="true">loading</component>
    <component v-if="dComponent" :is="dComponent" disabled>禁用状态</component>
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
    import('../../../src/button').then(module => {
      this.dComponent = module.default
      // use code
    })
  }
}
</script>