<template>
    <div style="margin: 0 auto ; width: 90% ">
        <div class="banner"></div>
        <img src="../../assets/images/love.png" style="width: 100%; margin-top: 10px"/>
        <router-link to="/team" :class="loveActive === 'team'?'donation-select':'donation'" style="margin-right: 5px;">队伍募捐</router-link>
        <router-link to="/personal" :class="loveActive === 'personal'?'donation-select':'donation'">个人募捐</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
    import {Scroller} from 'vux'
    import { mapActions, mapGetters } from "vuex"

    export default {
        data() {
            return {
                asyncCount: 0,
                title:''
            }
        },
        computed:{
            ...mapGetters(['loveActive'])
        },
        components: {
            Scroller
        },
        methods: {

        },
        mounted() {

        }
    }


</script>
<style scoped>

    .donation-select{
        width: 44%;
        color: #fff;
        font-size: 14px;
        border-radius: 5px;
        text-align: center;
        padding: 5px;
        display: block;
        float: left;
        background-color: #dd2563;
        box-shadow: 4px 4px 2px #888888;
        border: 1px solid #704091;
    }

    .donation{
        background-color: #704091;
        width: 44%;
        color: #fff;
        font-size: 14px;
        border-radius: 5px;
        text-align: center;
        padding: 5px;
        display: block;
        border: 1px solid #704091;
        float: left;
    }


</style>
