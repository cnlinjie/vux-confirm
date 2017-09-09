<template>
    <div style="margin-bottom: 10px;">
        <div class="sky violet" style="margin-top: 10px; font-size: 16px; text-align: left;">
            <i style=" margin-left: 5px;  ">队伍信息</i>
            <router-link v-if="my.role === 1" to="addteam"
                         style="text-align: right; font-size: 14px;color: #fff; float: right; margin-right: 20px;">+添加成员
            </router-link>

        </div>

        <div>
            <div class="list-team">
                <div style="float: left; height: 100%; width: 45px;"><img :src="team.headImg"
                                                                          class="img"></div>
                <div>队伍名称：{{team.name}}</div>
                <div>队伍人数：{{team.peopleNum}}人   </div>
                <div>筹款目标：{{team.target}}元  </div>
                <div>队伍口号：{{team.slogan}}</div>
                <router-link to="/updateteam" class="button" v-if="my.role === 1">修改</router-link>
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

        <div v-show="team.status === 1" style="margin: 25px;">
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


        <div v-if="isJiaoNan">
            <i style="font-size: 12px;
        font-style: normal ;
        color: #e64340;">* 队长缴纳200元押金后队伍才算真正组成，方可进行募捐</i>
            <div class="next-button violet" @click="del"> 解散队伍</div>
            <div class="next-button violet" @click="next">缴纳押金</div>
        </div>

        <div v-if="isNextFangZhen">
            <div class="next-button violet" @click="del"> 解散队伍</div>
            <router-link to="selectteam" class="next-button violet"> 下一步</router-link>
        </div>

        <div v-if="team.type !== 0 && my.role == 0 && team.status === 1">
            <div class="button-2 violet"> 分享队伍</div>
        </div>

        <div style="margin: 20px auto" v-if="my.role === 1 && team.status === 1 && team.type !== 0  ">
            <div class="next-button violet" @click="del"> 解散队伍</div>
            <div class="next-button violet"> 分享队伍</div>
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
                hasJiaoNan: false
            }
        },
        components: {
            Scroller
        },
        computed: {

            isJiaoNan() {
                let isJiaoNan = (this.team.type !== 0 && this.team.status === 0 && this.my.role === 1);
                if (isJiaoNan && !this.hasJiaoNan) {
                    this.hasJiaoNan = true;
                    console.log('isJiaoNan');
                    wxJsSDKInit(wx);
                }
                return isJiaoNan;
            },

            isNextFangZhen() {

                if (this.my.role === 1 && this.team.type === 0) {

                    return true;
                } else {
                    return false;
                }

            },

            isNext() {
                if (this.my.role === 0 || this.team.type !== 0) {
                    return false;
                }
                if (this.team.peopleNum >= 4) {
                    return true;
                } else if (this.team.peopleNum >= 3) {
                    let ageNum = 0;
                    this.teammate.forEach(e => {
                        if (e.age <= 18) {
                            ageNum++;
                        }
                    });
                    if (ageNum >= 1) {
                        return true;
                    }
                }

            },
            ...mapGetters(['team', 'teammate'])
        },
        methods: {
            del() {

                /*
                 this.$vux.confirm.show({
                 title: '解散确认',
                 content: '你确认是否解散队伍？<br/>请注意：解散后所有募捐金额将直接进入青基会账户。',
                 onConfirm () {
                 this.ajax.postForm('/teams/del', {}, (data) => {
                 _showError('解散成功')
                 this.getUser();
                 })
                 }
                 });

                */
                let r = confirm("你确认是否解散队伍？\r\n请注意：解散后所有募捐金额将直接进入青基会账户。");
                if (r === true) {
                    this.ajax.postForm('/teams/del', {}, (data) => {
                        _showError('解散成功')
                        this.getUser();
                    })
                }

            },
            alertNext() {
                alert('您的队伍还没达到选择方阵的要求')
            },
            remove(item) {
                var r = confirm("更换后该成员将离开队伍，您需要再邀请哦");
                if (r == true) {
                    this.ajax.postForm('/teams/remove', {userId: item.id}, (data) => {
                        _showError('该队员已离开队伍,请重新邀请');
                        go('/addteam', this.$router);
                    })
                }
            },
            getUser() {
                this.ajax.get('/my/user', {}, (data) => {
                    if (isNull(data) || isNull(data.teamId)) {
                        go('/createteam', this.$router);
                    } else {
                        this.my = data;
                    }
                });
            },
            next () {
                let r = confirm("是否确认缴纳押金?");
                if (r === true) {
                    let _this = this;
                    this.ajax.postForm('/weixin/pay/unifiedOrder', {orderId: new Date().getTime()}, (data) => {
                        wx.chooseWXPay({
                            timestamp: data.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
                            nonceStr: data.nonceStr, // 支付签名随机串，不长于 32 位
                            package: data.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
                            signType: data.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
                            paySign: data.paySign, // 支付签名
                            success: function (res) {
                                _showError('缴纳成功');
                                _this.setTeam();
                            },
                            cancel: function (e) {
                            },
                            fail: function (e) {
                            },
                            complete: function () {
                            }
                        });
                    })
                }

            },
            ...mapActions(['setTeam','setActive'])
        },
        mounted() {
            this.getUser();
            this.setTeam();
            this.setActive('team')
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
        box-shadow: 4px 4px 2px #888888;
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
        box-shadow: 4px 4px 2px #888888;

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
        box-shadow: 4px 4px 2px #888888;

    }
</style>

