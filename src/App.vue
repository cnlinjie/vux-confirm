<template>
    <div id="app">
        Test
    </div>
</template>

<script>
    import {ViewBox, Toast} from 'vux'
    export default {
        name: 'app',
        data() {
            return {
            }
        },
        components: {
            ViewBox, Toast
        },
        computed: {},
        methods: {
        },
        mounted() {
        }

    }
</script>

<style lang="less">
    @import '~vux/src/styles/reset.less';

    html, body {
        height: 100%;
        width: 100%;
        overflow-x: hidden;
    }


</style>