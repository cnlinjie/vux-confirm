<template>
    <div style="width: 90%;  margin: 0 auto;">
        <div class="banner"></div>
        <!--<img src="../assets/images/header.jpg" class="touxiang ">-->
        <!--<span style="vertical-align: top;line-height: 78px;font-size: 16px;">微信昵称</span>-->
        <flexbox style="margin-top: 5px">
            <flexbox-item>
                <router-link to="/" class="flex-demo">首页</router-link>
            </flexbox-item>
            <flexbox-item>
                <router-link to="/personaldata" :class="active=='data'?'flex-demo1':'flex-demo'">个人信息</router-link>
            </flexbox-item>
            <flexbox-item>
                <router-link :to="teamUrl" :class="active=='team'?'flex-demo1':'flex-demo'">队伍管理</router-link>
            </flexbox-item>
            <flexbox-item>
                <router-link to="/mynews" :class="active=='message'?'flex-demo1':'flex-demo'">我的消息</router-link>
            </flexbox-item>
        </flexbox>
        <router-view></router-view>
    </div>
</template>
<script>
    import {Flexbox, FlexboxItem, XInput, Group} from 'vux'
    import {mapActions, mapGetters} from "vuex"
    import {info, reg,isNull} from '../assets/js/verification'

    export default {
        data () {
            return {
                picked: '',
                selected: '',
                selected2: '',
                iphone: '',
                name: "",

            }
        },
        components: {
            Flexbox, FlexboxItem, XInput, Group
        },
        methods: {
            ...mapActions(['setUser'])
        },
        computed: {
            teamUrl() {
                if (isNull(this.user)  ||  isNull(this.user.teamId)) {
                    return '/createteam';
                } else {
                    return '/teanmoney';
                }
            },
            ...mapGetters(['user','active'])
        },
        mounted() {
            this.setUser();
        }
    }
</script>
<style scoped>
    .touxiang {
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }

    .flex-demo1 {
        text-align: center;
        color: #fff;

        border-radius: 5px;
        background-clip: padding-box;
        font-size: 16px;
        padding: 4px 2px;
        display: block;
        line-height: 33px;
        background-color: #dd2563;
        box-shadow: 4px 4px 2px #888888;
        border: 2px solid yellow;
    }

    .flex-demo {
        border: 2px solid yellow;
        box-shadow: 4px 4px 2px #888888;
        text-align: center;
        color: #fff;
        background-color: #704091;
        /*background-color: #4CAF50;*/
        border-radius: 5px;
        background-clip: padding-box;
        font-size: 16px;
        padding: 4px 2px;
        display: block;
        line-height: 33px;
    }

</style>
