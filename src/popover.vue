<template>
    <div class="popover" ref="popover">
        <div ref="contentWrapper" class="content-wrapper" v-if="visible" :class="{[`position-${position}`]:true}">
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper" style="display: inline-block;">
            <slot></slot>
        </span>
    </div>
</template>

<script>
    export default {
        name: "GPOPOVER",
        props: {
            position: {
                type: String,
                default: 'top',
                validater(value){
                    return ['top', 'right', 'bottom', 'left'].indexOf(value) >= 0
                }
            },
            trigger: {
                type: String,
                default: 'click',
                validater(value){
                    return ['click', 'hover'].indexOf(value) >= 0
                }
            }
        },
        data() {
            return {
                visible: false
            }
        },
        mounted() {
            if(this.trigger === 'click'){
                this.$refs.popover.addEventListener('click', this.onClick)
            }else {
                this.$refs.popover.addEventListener('mouseenter', this.open)
                this.$refs.popover.addEventListener('mouseleave', this.close)
            }
        },
        destroyed() {
            if(this.trigger === 'click'){
                this.$refs.popover.removeEventListener('click', this.onClick)
            }else {
                this.$refs.popover.removeEventListener('mouseenter', this.open)
                this.$refs.popover.removeEventListener('mouseleave', this.close)
            }
        },
        methods: {
            positionContent() {
                const {contentWrapper, triggerWrapper} = this.$refs
                document.body.appendChild(contentWrapper)
                const {width, height, top, left} = triggerWrapper.getBoundingClientRect()
                const {height:height2} = contentWrapper.getBoundingClientRect()

                let positions = {
                    top: {
                        top: top + window.scrollY,
                        left: left + window.scrollX,
                    },
                    bottom: {
                        top: top + window.scrollY + height,
                        left: left + window.scrollX,
                    },
                    left: {
                        top: top + window.scrollY + (height-height2)/2,
                        left: left + window.scrollX,
                    },
                    right: {
                        top: top + window.scrollY + (height-height2)/2,
                        left: left + width + window.scrollX,
                    }
                }

                contentWrapper.style.top = positions[this.position].top + 'px'
                contentWrapper.style.left = positions[this.position].left + 'px'
            },
            onClickDocument(e) {
                if (this.$refs.popover && (this.$refs.popover===e.target || this.$refs.popover.contains(e.target))) {
                    return;
                }
                if (this.$refs.contentWrapper && (this.$refs.contentWrapper===e.target || this.$refs.contentWrapper.contains(e.target))){
                    return;
                }
                this.close()
            },
            open() {
                this.visible = true
                setTimeout(() => {
                    this.positionContent()
                    console.log('监听')
                    document.addEventListener('click', this.onClickDocument)
                }, 0)
            },
            close() {
                this.visible = false
                document.removeEventListener('click', this.onClickDocument)
                console.log('关闭，移除监听')
            },
            onClick(event) {
                if(this.$refs.triggerWrapper.contains(event.target)){
                    if(this.visible === true){
                        this.close()
                    }else {
                        this.open()
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    $border-color: #333;
    $border-radius: 4px;
    .popover{
        display: inline-block;
        vertical-align: top;
        position: relative;
    }
    .content-wrapper{
        position: absolute;
        border: 1px solid $border-color;
        border-radius: $border-radius;
        /*box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);*/
        filter: drop-shadow(0 3px 3px rgba(0, 0, 0, 0.5));
        background: white;
        padding: 0.5em 1em;
        max-width: 20em;
        word-break: break-all;
        &::before, &::after{
            content: '';
            display: block;
            border: 10px solid transparent;
            width: 0;
            height: 0;
            position: absolute;
        }
        &.position-top{
            transform: translateY(-100%);
            margin-top: -10px;
            &::before, &::after{
                left: 10px;
                border-bottom: none;
            }
            &::before{
                border-top-color: $border-color;
                top: 100%;
            }
            &::after{
                border-top-color: white;
                top: calc(100% - 1px);
            }
        }
        &.position-bottom{
            margin-top: 10px;
            &::before, &::after{
                left: 10px;
                border-top: none;
            }
            &::before{
                border-bottom-color: $border-color;
                bottom: 100%;
            }
            &::after{
                border-bottom-color: white;
                bottom: calc(100% - 1px);
            }
        }
        &.position-left{
            transform: translateX(-100%);
            margin-left: -10px;
            &::before, &::after{
                left: 100%;
                top: 50%;
                border-right: none;
            }
            &::before{
                border-left-color: $border-color;
                transform: translateY(-50%);
            }
            &::after{
                border-left-color: white;
                transform: translate(-1px, -50%);
            }
        }
        &.position-right{
            margin-left: 10px;
            &::before, &::after{
                right: 100%;
                top: 50%;
                border-left: none;
            }
            &::before{
                border-right-color: $border-color;
                transform: translateY(-50%);
            }
            &::after{
                border-right-color: white;
                transform: translate(1px, -50%);
            }
        }
    }
</style>