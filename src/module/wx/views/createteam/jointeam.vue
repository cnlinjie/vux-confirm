<template>
    <div style="margin: 0 auto ; width: 90% ">
        <div><input  class="ipu" v-model="title"/> <span class="btn" @click="search">搜索</span></div>
        <div>
            <scroller ref="scroller" lock-x >
                <div class="skycontent">
                    <div class="list" v-for="item in list" :key="item.id">
                        <img :src="item.headImg" class="img">
                        <div>名称： {{item.name}}</div>
                        <div>口号： {{item.slogan}} </div>
                        <div  class="button" @click="join(item)" v-show="item.delStatus === 'ACTIVE'">我要加入</div>
                    </div>
                </div>
            </scroller>
        </div>

    </div>
</template>
<script>
    import {Scroller,Loading} from 'vux'
    import {mapActions, mapGetters} from "vuex"
    import { go, getUrl } from 'vux/src/libs/router'
    export default {
        data() {
            return {
                loading:false,
                loadingText:'申请中',
                asyncCount: 0,
                title:'测试',
                list:[],
                isSend: false,
            }
        },
        components: {
            Scroller,Loading
        },
        methods: {
            search() {
                if (this.title === '') {
                    _showError('查找内容不能为空');
                    return;
                }
                this.ajax.get('/teams',{name:this.title},(data) => {
                    if(data.length === 0) {
                        _showError('没有您要找的队伍');
                    } else {
                        this.list = data;
                        this.resetScroller();
                    }
                });
            },
            join(item) {
                if (this.isSend) {
                    _showError('处理中,请稍等')
                    return;
                }
                this.isSend = true;
                this.ajax.postForm('/messages/apply-join',{teamId:item.id},(data)=>{
                    _showError('申请已发送');
                    item.delStatus = "send";
                    this.isSend = false;
                },(err)=>{
                    item.delStatus = "send";
                    this.isSend = false;
                    if (err.msg === '请完善您的资料') {
                        go('/personaldata', this.$router);
                    }
                });

            },
            resetScroller() {
                this.$nextTick(() => {
                    this.$refs.scroller.reset();
                })
            }
            , ...mapActions(['setActive','setTeamActive'])
        },
        mounted() {
            this.setActive('team')
            this.setTeamActive('join')
        }
    }


</script>
<style scoped>
    .donation{
        width: 30%;
        background-color:#704091;
        color: #fff;
        font-size: 14px;
        border-radius: 5px;
        text-align: center;
        padding: 5px;
    }
    .ipu{
        width: 60%;
        height: 30px;
        border-radius: 3px;
        border: 1px solid #704091;
        background-color: transparent;
        padding-left: 10px;
        font-size: 15px;
    }
    .btn{
        width: 22%;
        line-height: 28px;
        background-color: #704091;
        border-radius: 5px;
        padding: 2px;
        font-size: 16px;
        display: inline-block;
        text-align: center;
        color: #fff;
        margin-left: 10px;
    }
    .list{
        border-bottom: 1px solid rgba(112,65,145,.3);
        height: 50px;
        margin-top: 10px;
        font-size: 14px;
        padding-bottom: 5px;
    }
    .skycontent {
        font-size: 14px;
    }
    .button{
        background-color: #dd2563;
        color: #fff;
        margin-top: -40px;
        border-radius: 5px;
        text-align: center;
        line-height: 30px;
        width: 70px;
        float: right;
    }
    .img {
        width: 45px;
        height: 45px;
        border-radius: 5px;
        float: left;
        margin-right: 10px;
    }

</style>

