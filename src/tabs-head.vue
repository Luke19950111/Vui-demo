<template>
    <div class="tabs-head">
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
                this.$refs.line.style.width = `${width}px`
                this.$refs.line.style.left = `${left}px`
            })
        }
    }
</script>

<style lang="scss" scoped>
    $tab-height: 40px;
    $blue: blue;
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
            border-bottom: 3px solid $blue;
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