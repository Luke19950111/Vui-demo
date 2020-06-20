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
        inject: ['eventBus']
    }
</script>

<style lang="scss" scoped>
    $tab-height: 40px;
    $blue: blue;
    .tabs-head{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: $tab-height;
        border: 1px solid red;
        position: relative;
        > .line{
            position: absolute;
            bottom: 0;
            border-bottom: 1px solid $blue;
            width: 100px;
        }
        > .action-wrapper{
            margin-left: auto;
        }
    }
</style>