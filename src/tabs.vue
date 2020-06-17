<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GTABS",
        props: {
            selected: {
                type: [String, Number],
                required: true
            },
            direction: {
                type: String,
                validator (value){
                    return ['horizontal', 'vertical'].indexOf(value) >= 0
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .tabs{

    }
</style>