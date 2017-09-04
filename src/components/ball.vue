<template>
    <div class="ball" :class="typeCode"  >
        <i class="num" :class="`no_${item}`" v-for="item of ballArr"> {{item}} - </i>
    </div>
</template>

<script>
    export default {
        name: 'ball',
        props: {
            ball: {
                type: String,
                default: '01-02-03-04-05'
            },
            typeCode: {
                type: String,
                default: 'cqssc'
            },
            width: {
                type: String,
                default: '500'
            }
        },
        computed: {
             ballArr () {
                console.log('ballArr');
                return this.ball.split('-');
            }
        }
    };
</script>