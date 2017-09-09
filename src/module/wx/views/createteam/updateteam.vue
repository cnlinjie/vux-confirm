<template>
    <div style="width: 90%; margin: 20px auto">
        <span style="vertical-align: top;line-height: 70px;font-size: 14px;color: #704091;">队伍头像：</span>
        <img :src="team.headImg" @click="updateHeadImg" class="touxiang ">
        <div class="msg"><span>队伍名称：</span> <input v-model="team.name"/>
        </div>
        <div class="msg"><span>队伍口号：</span> <input v-model="team.slogan"/>
        </div>
        <div class="button" @click="save">确认修改</div>
    </div>


</template>
<script>
    import {mapActions, mapGetters} from "vuex"
    import {info, reg, isNull} from '../../assets/js/verification'
    import {wxJsSDKInit} from '../../assets/js/wx'
    import {go, getUrl} from 'vux/src/libs/router'
    import {WechatPlugin} from 'vux'
    let wx = WechatPlugin.$wechat;
    export default {
        components: {},
        data () {
            return {
                team: {
                    name: '',
                    slogan: '',
                    target: 400,
                    headImg: '/files/default/head.png'
                }
            }
        },
        computed: {},
        methods: {
            getTeam() {
                this.ajax.get('/my/team', {}, (data) => {
                    this.team = data.team;
                });
            },
            updateHeadImg() {
                let _this = this;
                wx.chooseImage({
                    count: 1, // 默认9
                    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                    success: function (res) {
                        let localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
                        _this.uploadImageToWeixin(localIds)
                    }
                });
            },

            uploadImageToWeixin(localIds) {
                let _this = this;
                wx.uploadImage({
                    localId: '' + localIds + '', // 需要上传的图片的本地ID，由chooseImage接口获得
                    isShowProgressTips: 1, // 默认为1，显示进度提示
                    success: function (res) {
                        let serverId = res.serverId; // 返回图片的服务器端ID
                        _this.uploadImageToServer(serverId);
                    }
                });
            },

            uploadImageToServer(serverId) {
                let _this = this;
                this.ajax.postForm('/upload/upload-weixin-file?serverId=' + serverId, {}, (data) => {
                    _this.team.headImg = data;
                })
            },

            save() {
                let team = this.team;
                if (team.name === '') {
                    _showError('队伍名称不能为空哦')
                    return;
                }
                if (team.slogan === '') {
                    _showError('口号不能为空哦')
                    return;
                }
                this.ajax.postForm('/teams/update', team, (data) => {
                    _showError('修改成功 ');
                    go('/teanmoney', this.$router);
                })
            },
            ...mapActions(['setActive'])
        },
        mounted() {
            wxJsSDKInit(wx);
            this.getTeam();
            this.setActive('team')
        },

    }
</script>
<style scoped>
    .touxiang {
        width: 60px;
        height: 60px;
        margin-top: 10px;
    }

    .msg span {
        font-size: 15px;
        color: #704091;
    }

    .msg input {
        background: transparent;
        border: 1px solid #704091;
        padding: 4px;
        border-radius: 5px;
        font-size: 15px;
    }

    .error {
        color: #f35353;
        display: inline-block;
        font-size: 14px;
        font-style: normal;
    }

    .button {
        width: 50%;
        margin: 20px auto;
        background-color: #704091;
        color: #fff;
        font-size: 14px;
        border-radius: 5px;
        text-align: center;
        padding: 5px;

    }
</style>