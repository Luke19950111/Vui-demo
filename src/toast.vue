<template>
    <div class="toast" ref="wrapper">
        <div class="message">
            <slot v-if="!enableHtml"></slot>
            <div v-else v-html="$slots.default[0]"></div>
        </div>
        <div class="line" ref="line"></div>
        <span class="close" v-if="closeButton" @click="onCloseClick">{{closeButton.text}}</span>
    </div>
</template>
<script>

    export default {
        name: 'GTOAST',
        props: {
            autoClose: {
                type: Boolean,
                default: true
            },
            autoCloseDelay: {
                type: Number,
                default: 5
            },
            closeButton: {
                type: Object,
                default(){
                    return {
                        text: '关闭',
                        callback: undefined
                    }
                }
            },
            enableHtml: {
                type: Boolean,
                default: false
            }
        },
        mounted() {
            this.updateStyle()
            this.doAutoClose()
        },
        methods: {
            updateStyle(){
                this.$nextTick(() => {
                    console.log(this.$refs.wrapper.getBoundingClientRect().height);
                    this.$refs.line.style.height = `${this.$refs.wrapper.getBoundingClientRect().height}px`
                })
            },
            doAutoClose(){
                if(this.autoClose){
                    setTimeout(() => {
                        this.close()
                    }, this.autoCloseDelay * 1000)
                }
            },
            close(){
                this.$el.remove()
                this.$destroy()
            },
            onCloseClick(){
                this.close()
                console.log(typeof this.closeButton.callback)
                if(this.closeButton && typeof this.closeButton.callback === 'function'){
                    this.closeButton.callback()
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    $font-size: 14px;
    $toast-min-height: 40px;
    $toast-bg: rgba(0, 0, 0, 0.75);
    .toast{
        font-size: $font-size;
        min-height: $toast-min-height;
        line-height: 1.8;
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        color: #ffffff;
        background: $toast-bg;
        border-radius: 4px;
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50);
        padding: 0 16px;
    }
    .message{
        padding: 8px 0;
    }
    .close{
        padding: 0 16px;
        flex-shrink: 0;
    }
    .line{
        border-left: 1px solid #666666;
        /*height: 100%;*/
        margin-left: 16px;
    }
</style>