<template>
  <div>
    <component v-if="dComponent" :is="dComponent" @click="$toast('点击弹出提示')">上方弹出</component>
    <component v-if="dComponent" :is="dComponent"  @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</component>
    <component v-if="dComponent" :is="dComponent"  @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</component>

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
    import('vue').then(Vue => {
      import('../../../src/plugin').then(plugin => {
        Vue.default.use(plugin.default)
      })
    }).then(() => {
      import('../../../src/button').then(module => {
        this.dComponent = module.default
        // use code
      })

    })

  }
}
</script>
<style>
  .wrapper-toast {
    z-index: 30 !important;
  }
</style>