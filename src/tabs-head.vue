<template>
    <div class="tabs-head">
        <slot></slot>
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
    .tabs-head{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: $tab-height;
        border: 1px solid red;
        > .action-wrapper{
            margin-left: auto;
        }
    }
</style>