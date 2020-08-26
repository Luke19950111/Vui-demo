<template>
  <div>
    <component v-if="dComponent2" :is="dComponent">
      <component :is="dComponent2">上方弹出</component>
      <template slot="content">
        弹出内容
      </template>
    </component>
    <component v-if="dComponent2" :is="dComponent" position="bottom">
      <component :is="dComponent2">下方弹出</component>
      <template slot="content">
        弹出内容
      </template>
    </component>
    <component v-if="dComponent2" :is="dComponent" position="left">
      <component :is="dComponent2">左边弹出</component>
      <template slot="content">
        <a href="https://www.qq.com/?fromdefault" target="_blank">去看新闻</a>
      </template>
    </component>
    <component v-if="dComponent2" :is="dComponent" position="right">
      <component :is="dComponent2">右边弹出</component>
      <template slot="content">
        <a href="https://www.taobao.com/" target="_blank">去购物</a>
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