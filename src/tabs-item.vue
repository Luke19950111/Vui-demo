<template>
    <div class="tabs-item" @click="onClick" :class="classes">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "TABSITEM",
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            name: {
                type: [String, Number],
                required: true
            }
        },
        inject: ['eventBus'],
        computed: {
            classes(){
                return {
                    active: this.active,
                    disabled: this.disabled
                }
            }
        },
        data () {
            return {
                active: false
            }
        },
        created() {
            this.eventBus.$on('update:selected', (name) => {
                this.active = name === this.name;
            })
        },
        methods: {
            onClick(){
                if(this.disabled){return}
                this.eventBus.$emit('update:selected', this.name, this)
            }
        }
    }
</script>

<style lang="scss" scoped>
    $blue: blue;
    $disabled-text-color: gray;
    .tabs-item{
        flex-shrink: 0;
        padding: 0 1em;
        cursor: pointer;
        height: 100%;
        display: flex;
        align-items: center;
        &.active{
            font-weight: bold;
            color: $blue;
        }
        &.disabled{
            color: $disabled-text-color;
            cursor: not-allowed;
        }
    }
</style>