<template>
    <div class="popover" @click="onClick" ref="popover">
        <div ref="contentWrapper" class="content-wrapper" v-if="visible">
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper">
            <slot></slot>
        </span>
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
            positionContent() {
                document.body.appendChild(this.$refs.contentWrapper)
                let {width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
                this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
                this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
            },
            listenToDocument() {
                let eventHandler = (e)=>{
                    console.log(e.target, 'ttt')
                    console.log(this.$refs.popover.contains(e.target), 'abc')
                    if (this.$refs.popover && (this.$refs.popover===e.target || this.$refs.popover.contains(e.target))) {
                        return;
                    }
                    this.visible = false
                    console.log('关闭2，移除监听')
                    document.removeEventListener('click', eventHandler)
                }
                console.log('监听')
                document.addEventListener('click', eventHandler)
            },
            onShow() {
                setTimeout(() => {
                    this.positionContent()
                    this.listenToDocument()
                }, 0)
            },
            onClick(event) {
                if(this.$refs.triggerWrapper.contains(event.target)){
                    this.visible = !this.visible
                    if(this.visible === true){
                        this.onShow()
                    }else {
                        console.log('关闭1')
                    }
                }

                // this.visible = !this.visible
                // if(this.visible === true){
                //     this.$nextTick(() => {
                //         document.body.appendChild(this.$refs.contentWrapper)
                //         let {width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
                //         this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
                //         this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
                //         let eventHandler = ()=>{
                //             this.visible = false
                //             document.removeEventListener('click', eventHandler)
                //         }
                //         document.addEventListener('click', eventHandler)
                //     })
                // }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .popover{
        display: inline-block;
        vertical-align: top;
        position: relative;
    }
    .content-wrapper{
        position: absolute;
        border: 1px solid red;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
        transform: translateY(-100%);
    }
</style>