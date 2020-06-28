<template>
    <div class="popover" @click.stop="xxx">
        <div class="content-wrapper" v-if="visible" @click.stop>
            <slot name="content"></slot>
        </div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GPOPOVER",
        data() {
            return {
                visible: false
            }
        },
        methods: {
            xxx() {
                this.visible = !this.visible
                    console.log(this.visible, '切换状态')
                if(this.visible === true){
                    this.$nextTick(() => {
                        let eventHandler = ()=>{
                            console.log('关闭')
                            this.visible = false
                            console.log('删除监听')
                            document.removeEventListener('click', eventHandler)
                        }
                        document.addEventListener('click', eventHandler)
                    })
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .popover{
        display: inline-block;
        vertical-align: top;
        position: relative;
        .content-wrapper{
            position: absolute;
            left: 0;
            bottom: 100%;
            border: 1px solid red;
            box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
        }
    }
</style>