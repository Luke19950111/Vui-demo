<template>
  <div>
    <component v-if="dComponent" :is="dComponent" @click="onClickButton">上方弹出</component>

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

  },
  methods: {
    onClickButton(){
      this.$toast('<strong style="color:red;">加粗的提示</strong>', {
        enableHtml: true
      })
    }
  }
}
</script>
<style>
.wrapper-toast {
  z-index: 30 !important;
}
</style>