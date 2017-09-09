<template>
    <div style="margin: 0 auto ; width: 90% ">
        <div class="banner"></div>
        <div class="sky violet" style="margin-top: 10px; font-size: 16px; text-align: left;">
            <div style=" margin-left: 5px; ">队伍信息 - 邀请队员</div>

        </div>
        <div><input class="ipu" v-model="keyword" placeholder="姓名、昵称、身份证号"/> <span class="btn" @click="search">搜索</span>
        </div>
        <div>
            <scroller ref="scroller" lock-x height="350px">
                <div class="skycontent">
                    <div class="list" v-for="item in list" :key="item.id">
                        <img :src="item.headImg" class="img">
                        <div style="line-height: 45px;">
                            {{item.realname}}
                            <div class="button" @click="invite(item)" v-show="item.delStatus === 'ACTIVE'">
                                &nbsp;&nbsp;邀请&nbsp;&nbsp;
                            </div>
                        </div>
                    </div>
                </div>
            </scroller>
        </div>
        <!--<div class="next" @click="next">下一步</div>-->
    </div>
</template>
<script>
    import {mapActions, mapGetters} from "vuex"
    import {Scroller} from 'vux'
    import {go, getUrl} from 'vux/src/libs/router'
    import {info, reg, isNull} from '../../assets/js/verification'

    export default {
        data() {
            return {
                asyncCount: 0,
                keyword: '测试',
                list: [],
                pageData: {
                    content: [],
                    pageIndex: 1,
                    pageSize: 10
                },
                isSend: false,
            }
        },
        components: {
            Scroller
        },
        methods: {

            invite(item) {
                if (this.isSend) {
                    _showError('处理中,请稍等')
                    return;
                }
                this.isSend = true;
                this.ajax.postForm('/messages/invite-join', {userId: item.id}, (data) => {
                    _showError('邀请已发送')
                    item.delStatus = 'send';
                    this.isSend = false;
                }, (err) => {
                    this.isSend = false;
                })
            },
            search() {

                if (this.keyword === '') {
                    _showError('请输入您需要查找的关键字')
                    return;
                }
                this.ajax.get('/users/search', {keyword: this.keyword}, (data) => {
                    if (data.content.length === 0) {
                        _showError('没有您要找的人')
                    } else {
                        this.list = data.content;
                        this.pageData = data;
                        this.resetScroller();
                    }
                });
            },
            resetScroller() {
                this.$nextTick(() => {
                    this.$refs.scroller.reset();
                })
            },
            next () {
                this.$router.push('/selectteam')
            },
            getUser() {
                this.ajax.get('/my/user', {}, (data) => {
                    if (isNull(data) || isNull(data.teamId)) {
                        go('/createteam', this.$router);
                    }
                });
            },
            ...mapActions(['setActive'])
        },
        mounted() {
            this.getUser();
            this.setActive('team')
        }
    }


</script>
<style scoped>

    .donation {
        width: 30%;
        background-color: #704091;
        color: #fff;
        font-size: 18px;
        border-radius: 5px;
        text-align: center;
        padding: 5px;
    }

    .ipu {
        width: 60%;
        height: 30px;
        border-radius: 3px;
        border: 1px solid #704091;
        background-color: transparent;
        padding-left: 10px;
    }

    .btn {
        width: 22%;
        height: 30px;
        line-height: 30px;
        background-color: #704091;
        border-radius: 5px;
        padding: 2px;
        font-size: 14px;
        display: inline-block;
        text-align: center;
        color: #fff;
        margin-left: 10px;
    }

    .list {
        border-bottom: 1px solid rgba(112, 65, 145, .3);
        height: 55px;
        margin-top: 10px;
        font-size: 14px;
        padding-bottom: 5px;

    }

    .skycontent {
        font-size: 18px;
    }

    .img {
        width: 45px;
        height: 45px;
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
        line-height: 28px;
        margin-top: 15px;
        margin-right: 15px;
        width: 60px;
    }

    .next {
        width: 50%;
        margin: 20px auto;
        background-color: #704091;
        font-size: 12px;
        border-radius: 5px;
        text-align: center;
        padding: 5px;
        color: #fff;
    }
</style>

