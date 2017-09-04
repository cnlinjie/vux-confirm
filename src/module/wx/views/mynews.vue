<template>
    <div style="margin: 0 auto ; width: 90% ">
        <div><input  class="ipu" v-model="title"/> <span class="btn">搜索</span></div>
        <div>
            <scroller ref="scroller" lock-x height="280px">
                <div class="skycontent">
                    <div class="list">
                        <img src="../assets/images/header.jpg" class="img">
                        <div style="color: #dd2563;">张三为本队捐款1000元</div>
                        <div>加油！</div>
                    </div>
                    <div class="list">
                        <img src="../assets/images/header.jpg" class="img">
                        <div>张三邀请你加入他们队伍</div>
                        <i class="yes rose">同意</i> <i class="no">拒绝</i>
                    </div>
                </div>
            </scroller>
        </div>
    </div>
</template>
<script>
    import {Scroller} from 'vux'

    export default {
        data() {
            return {
                asyncCount: 0,
                title:''
            }
        },
        components: {
            Scroller
        },
        methods: {
            resetScroller() {
                this.$nextTick(() => {
                    this.$refs.scroller.reset();
                })
            }
        },
        mounted() {
            setTimeout(()=> {
                this.resetScroller();
            },1000)
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
        width: 70%;
        height: 30px;
        border-radius: 3px;
        border: 1px solid #704091;
        background-color: transparent;
    }
    .btn{
        width: 22%;
        background-color: #704091;
        border-radius: 5px;
        padding: 2px;
        font-size: 14px;
        display: inline-block;
        text-align: center;
        color: #fff;
        margin-left: 10px;
        line-height: 28px;
    }
    .list{
        border-bottom: 1px solid rgba(112,65,145,.3);
        height: 55px;
        margin-top: 10px;
        padding-bottom: 5px;
    }
    .skycontent {
        font-size: 14px;
    }
    .yes,.no{
        color: rgb(255, 255, 255);
        padding: 3px;
        border-radius: 5px;
        width: 50px;
        text-align: center;
        font-size: 12px;
        font-style: normal;
        display: inline-block;
    }
    .no {
        background-color: #586c94;
    }
    .img {
        width: 45px;
        height: 45px;
        border-radius: 500px;
        float: left;
        margin-right: 10px;
    }
</style>

