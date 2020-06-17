<template>
    <div class="tabs-head">
        <slot></slot>
        <slot name="action"></slot>
    </div>
</template>

<script>
    export default {
        name: "TABSHEAD",
        inject: ['eventBus']
    }
</script>

<style lang="scss" scoped>
    .tabs-head{

    }
</style>