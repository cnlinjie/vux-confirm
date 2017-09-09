<template>
    <div id="app">
        <div class="content">
            <div class="house" @click="house"></div>
            <div class="logo"></div>
            <div class="cocacola-logo"></div>
            <div id="public-loading" class="weui-loading_toast vux-loading" style="display:none;">
                <div class="weui-mask_transparent"></div>
                <div class="weui-toast"><i class="weui-loading weui-icon_toast"></i>
                    <p class="weui-toast__content">加载中</p></div>
            </div>
            <div id="public-error" class="weui-toast weui-toast_text" style="width: 10em;  display: none">
                <p class="weui-toast__content" id="public-error-msg"></p>
            </div>


            <router-view></router-view>
        </div>

    </div>
</template>

<script>
    import {ViewBox, Toast} from 'vux'
    import {mapActions, mapGetters} from "vuex"
    import {go, getUrl} from 'vux/src/libs/router'

    import {wxJsSDKInit} from './assets/js/wx'
    import {WechatPlugin} from 'vux'
    let wx = WechatPlugin.$wechat;

    export default {
        name: 'app',
        data() {
            return {
                isLoaded: false
            }
        },
        components: {
            ViewBox, Toast
        },
        computed: {},
        methods: {
            house() {
                go('/', this.$router);
            },
            getTeamInfo() {
                let shareConfig = null;
                this.ajax.get('/my/team-info', {}, (data) => {
                    if (data === null || data === undefined || data.status === 0) {
                        // 没有队伍
                        shareConfig = {
                            title: '一路纯悦 2017（厦门）公益徒步开始报名啦', // 分享标题
                            link: 'http://cocacola.qring.cc/wx/?rnd=1', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                            imgUrl: 'http://cocacola.qring.cc/files/default/share.jpeg', // 分享图标
                            desc: '一路纯悦 2017（厦门）公益徒步开始报名啦', // 分享描述
                            success: function () {
//                                _showError('已成功分享')
                            }
                        }
                    } else {
                        shareConfig = {
                            title: '快来为 '+ data.name +' 队募集善款', // 分享标题
                            link: 'http://cocacola.qring.cc/wx/?#/teaminfo?teamid='+data.id, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                            imgUrl: 'http://cocacola.qring.cc'+data.headImg, // 分享图标,
                            desc:'快来为 '+ data.name +' 队募集善款', // 分享描述
                            success: function () {
//                                _showError('已成功分享')
                            }
                        }
                    }
                    wx.showMenuItems({
                        menuList: ['menuItem:share:appMessage','menuItem:share:timeline'] // 要显示的菜单项，所有menu项见附录3
                    });
                    wx.onMenuShareAppMessage(shareConfig);
                    wx.onMenuShareTimeline(shareConfig);
                }, (err) => {
                });
            },
            getMyUser() {
                this.ajax.get('/my/user', {}, (data) => {
                    if (data === null || data === undefined) {
                        go('/reg', this.$router);
                    } else {
                        this.isLoaded = true;
                    }
                }, (err) => {

                });
            }
        },
        created() {
            if (window.location.href.indexOf('?') === -1) {
                let hrefs = window.location.href.split('#');
                window.location.href = hrefs[0] + '?#' + hrefs[1];
            } else {
                this.getMyUser();
            }
        },
        mounted() {
            wxJsSDKInit(wx);
            wx.ready(()=>{
                this.getTeamInfo();
            });

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
        background: url('assets/images/index.jpg') no-repeat center/cover;
        background-attachment: fixed;
    }

    #app {

        width: 100vw;
        min-height: 100vh;
    }

    .logo {
        top: 0;
        width: 43%;
        height: 40px;
        margin-left: 20px;
        float: left;
        background: url('assets/images/logo.png') no-repeat center/100%;
    }

    .cocacola-logo {
        top: 0;
        width: 27%;
        height: 40px;
        margin-left: 240px;
        background: url('assets/images/cocacola-logo.png') no-repeat center/100%;
    }

    .house {
        top: 0;
        width: 35px;
        height: 40px;
        float: left;
        margin-left: 10px;
        background: url('assets/images/house.png') no-repeat center/100%;
    }

</style>