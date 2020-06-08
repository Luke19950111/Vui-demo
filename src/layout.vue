<template>
    <div class="layout" :class="layoutClass">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'GLAYOUT',
        data(){
            return {
                layoutClass: {
                    hasSider: false
                }
            }
        },
        mounted() {
            console.log(this.$children, 'childr')
            this.$children.forEach((vm) => {
                if(vm.$options.name === 'GSIDER'){
                    this.layoutClass.hasSider = true
                }
            })
        }
    }
</script>
<style lang="scss" scoped>
    .layout{
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        &.hasSider{
            flex-direction: row;
        }
    }
</style>