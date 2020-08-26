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
      this.$toast('你知道我在等你吗？', {
        closeButton: {
          text: '知道了',
          callback: () => {
            console.log('他说知道了')
          }
        }
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