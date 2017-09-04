<template>
    <div id="app">
        <div class="content">
            <div class="logo"> </div>
            <router-view></router-view>
        </div>

    </div>
</template>

<script>
    import { ViewBox } from 'vux'
    import { mapActions, mapGetters } from "vuex"
    export default {
        name: 'app',
        components: {
            ViewBox
        },
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
    body {
        background:url('assets/images/index.jpg') no-repeat center/cover ; background-attachment:fixed;
    }
    #app{

        width: 100vw;
        min-height: 100vh;
    }
    .logo {
        top: 0px;
        width: 64% ;
        height: 30px;
        margin-left: 10px;
        background:url('assets/images/logo.png') no-repeat center/100%;
    }
</style>