<template>
    <div style="margin:20px;">
        <div class="banner"></div>
        <div class="sky violet" style="margin-top: 10px; font-size: 16px; text-align: left;">
            <i style=" margin-left: 5px;  ">队伍信息</i>
        </div>
        <div>
            <div class="list-team">
                <div style="float: left; height: 100%; width: 45px;"><img :src="team.headImg"
                                                                          class="img"></div>
                <div>队伍名称：{{team.name}}</div>
                <div>队伍人数：{{team.peopleNum}}人   </div>
                <div>筹款目标：{{team.target}}元  </div>
                <div>队伍口号：{{team.slogan}}</div>
            </div>
        </div>

        <div class="sky violet" style="text-align: left; padding-left: 10px; font-size: 16px;margin: 10px 0;"
             v-if="team.type > 0">
            方阵信息 :  <span v-if="team.type === 1">纯真亲子组</span><span v-else="">悦动健行组</span>
        </div>

        <div class="sky violet" style="text-align: left; padding-left: 10px; font-size: 16px;">本组队员 </div>
        <div style="margin-bottom: 15px;">
            <div class="skycontent">
                <div class="list" v-for="(item,index) in teammate" :key="item.id">
                    <img :src="item.headImg" class="img">
                    <div>姓名：{{item.realname}} <span v-if="index === 0">(队长)</span></div>
                    <div>手机：{{item.phone}}</div>
                    <div class="button" @click="remove(item)" v-if="index > 0 && team.status === 0 && my.role === 1">
                        更换
                    </div>
                </div>
            </div>
        </div>

        <div>
            <i style="font-size: 12px; font-style: normal ;">本队已筹集 : </i><i
            style="color:#dd2563;font-size: 16px;">1000元</i>
            <div style="font-size: 13px;">
                筹款进度 :
                <div style=" position:relative;
           border:1px #ff8500 solid;
            height:10px;
            width:100%;
            margin:0 auto;
            padding:1px">
                    <div style=" height:10px; width:50%" class="orange"></div>
                    <strong style=" position:absolute;
               width:100%;
               top:-6px;
                text-align:center;
                 overflow:hidden">50%</strong>
                </div>
            </div>
        </div>

        <div >
            <div class="next-button violet" @click="click" > 为他捐款</div>
            <div class="next-button violet" > 分享队伍</div>
        </div>
    </div>
</template>
<script>
    import {Scroller} from 'vux'
    import {mapActions, mapGetters} from "vuex"
    import {info, reg, isNull} from '../../assets/js/verification'
    import {go, getUrl} from 'vux/src/libs/router'
    import {wxJsSDKInit} from '../../assets/js/wx'
    import {WechatPlugin} from 'vux'
    let wx = WechatPlugin.$wechat;

    export default {
        data() {
            return {
                asyncCount: 0,
                title: '',
                my: {},
                hasJiaoNan: false,
                team:{},
                teammate:[]


            }
        },
        components: {
            Scroller
        },
        computed: {
        },
        methods: {
            click() {
                go('/dona', this.$router);
            },
            getTeamInfo() {
                let teamid = QueryString('teamid');
                this.ajax.get('/teams/team-info', {teamId:teamid}, (data) => {
                    this.teammate = data.users;
                    this.team = data.team;
                });
            }
        },
        mounted() {
            this.getTeamInfo();
        }
    }


</script>
<style scoped>
    .sky {
        margin: 0 auto;
        color: #fff;
    }

    i {
        font-style: normal;
        display: inline-block;
    }

    .list-team {
        height: 85px;
        margin-top: 10px;
        font-size: 14px;
        padding-bottom: 5px;
    }

    .list-team div {
        line-height: 22px;
    }

    .list {
        border-bottom: 1px solid rgba(112, 65, 145, .3);
        height: 45px;
        margin-top: 10px;
        font-size: 14px;
        padding-bottom: 5px;
    }

    .list div {
        line-height: 22px;
    }

    .skycontent {
        font-size: 18px;
    }

    .img {
        width: 40px;
        height: 40px;
        border-radius: 5px;
        float: left;
        margin-right: 10px;
    }

    .button {
        background-color: #dd2563;
        color: #fff;
        border-radius: 5px;
        text-align: center;
        float: right;
        padding: 3px;
        margin-top: -40px;
        width: 60px;
    }

    .next {
        width: 45%;
        margin: 0 auto;
        background-color: #704091;
        font-size: 14px;
        border-radius: 5px;
        text-align: center;
        padding: 5px;
        color: #fff;
        display: inline-block;
    }

    .button-2 {
        width: 45%;
        margin: 20px auto;
        color: #fff;
        font-size: 14px;
        border-radius: 5px;
        text-align: center;
        padding: 5px;
        display: block;

    }

    .next-button {
        width: 45%;
        margin: 20px auto;
        color: #fff;
        font-size: 14px;
        border-radius: 5px;
        text-align: center;
        padding: 5px;
        display: inline-block;

    }
</style>

