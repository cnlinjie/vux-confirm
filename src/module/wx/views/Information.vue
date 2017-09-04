<template>
    <div style="width: 90%;  margin: 0 auto;">
        <div class="banner"></div>
        <img src="../assets/images/header.jpg" class="touxiang ">
        <span style="vertical-align: top;line-height: 78px;font-size: 16px;">微信昵称</span>
            <flexbox style="margin-top: -9px">
                <flexbox-item v-for="item in list">
                    <router-link :to="item.href" class="flex-demo">{{item.title}}</router-link>
                </flexbox-item>
            </flexbox>
                <router-view></router-view>
        </div>
</template>
<script >
    import {Flexbox,FlexboxItem, XInput, Group} from 'vux'

    export default {
        data () {
            return{
                picked: '',
                selected: '',
                selected2:'',
                iphone:'',
                name:"",
                list:[
                    {title: '首页',href: '/'},
                    {title: '个人信息',href: '/personaldata'},
                    {title: '队伍管理',href: '/teanmoney'},
                    {title: '我的消息',href: '/mynews'}
                ]
            }
        },
        components: {
           Flexbox,FlexboxItem, XInput, Group
        }
    }
</script>
<style scoped>
    .touxiang{
         width: 60px;
        height: 60px;
        border-radius: 50%;
    }
    .flex-demo {
        text-align: center;
        color: #fff;
        background-color: #704091;
        border-radius: 5px;
        background-clip: padding-box;
        font-size: 16px;
        display: block;
    }

</style>
