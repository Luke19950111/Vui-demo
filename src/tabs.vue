<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'
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
        },
        data () {
            return {
                eventBus: new Vue()
            }
        },
        provide () {
            return {
                eventBus: this.eventBus
            }
        },
        created() {

        },
        mounted() {
            if(this.$children.length === 0){
                console && console.warn && console.warn('tabs的子组件应该是tabs-head和tabs-body,没有写子组件')
            }
            this.$children.forEach((vm) => {
                if(vm.$options.name === 'TABSHEAD'){
                    vm.$children.forEach((childVm) => {
                        if(childVm.$options.name === 'TABSITEM' && childVm.name === this.selected){
                            this.eventBus.$emit('update:selected', this.selected, childVm)
                        }
                    })
                }
            })
        }
    }
</script>

<style lang="scss" scoped>
    .tabs{

    }
</style>