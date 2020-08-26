<template>
  <div>
    <component v-if="dComponent1" :is="dComponent" class="demoRow" gutter="10">
      <component :is="dComponent1" span="8">
        <div class="demoCol">8</div>
      </component>
      <component :is="dComponent1" span="8">
        <div class="demoCol">8</div>
      </component>
      <component :is="dComponent1" span="8">
        <div class="demoCol">8</div>
      </component>
    </component>

    <component v-if="dComponent1" :is="dComponent" class="demoRow" gutter="10">
      <component :is="dComponent1" span="6">
        <div class="demoCol">6</div>
      </component>
      <component :is="dComponent1" span="6">
        <div class="demoCol">6</div>
      </component>
      <component :is="dComponent1" span="6">
        <div class="demoCol">6</div>
      </component>
      <component :is="dComponent1" span="6">
        <div class="demoCol">6</div>
      </component>
    </component>


  </div>
</template>
<script>
export default {
  data() {
    return {
      dComponent: null,
      dComponent1: null
    }
  },
  mounted() {
    import('../../../src/row').then(module => {
      this.dComponent = module.default
    })
    import('../../../src/col').then(module => {
      this.dComponent1 = module.default
    })
  }
}
</script>
<style scoped>
* {
  box-sizing: border-box;
}

.demoRow {
  margin: 10px 0;
}

.demoCol {
  height: 50px;
  border: 1px solid #ccc;
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>