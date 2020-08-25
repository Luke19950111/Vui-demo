<template>
    <div class="tabs-head" ref="head">
        <slot></slot>
        <div class="line" ref="line"></div>
        <div class="action-wrapper">
            <slot name="action"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TABSHEAD",
        inject: ['eventBus'],
        mounted() {
            this.eventBus.$on('update:selected', (name, vm) => {

                let {width, height, top, left} = vm.$el.getBoundingClientRect()
                let {left: left2} = this.$refs.head.getBoundingClientRect()
                this.$refs.line.style.width = `${width}px`
                this.$refs.line.style.left = `${left - left2}px`
            })
        }
    }
</script>

<style lang="scss" scoped>
    $tab-height: 40px;
    $black: black;
    $border-color: #ddd;
    .tabs-head{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: $tab-height;
        border-bottom: 1px solid $border-color;
        position: relative;
        > .line{
            position: absolute;
            bottom: 0;
            border-bottom: 3px solid $black;
            transition: all 500ms;
        }
        > .action-wrapper{
            margin-left: auto;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 1em;
        }
    }
</style>