<template>
    <div class="col" :class="[`col-${span}`, offset&&`offset-${offset}`]">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'GCOL',
        props: {
            span: {
                style: [Number, String]
            },
            offset: {
                style: [Number, String]
            }
        }
    }
</script>
<style lang="scss" scoped>
    .col{
        height: 100px;
        background: gray;
        width: 50%;
        border: 1px solid red;

        $class-prefix: col-;
        @for $n from 1 through 24{
            &.#{$class-prefix}#{$n}{
                width: $n/24 * 100%;
            }
        }

        $class-prefix: offset-;
        @for $n from 1 through 24{
            &.#{$class-prefix}#{$n}{
                margin-left: $n/24 * 100%;
            }
        }
    }
</style>