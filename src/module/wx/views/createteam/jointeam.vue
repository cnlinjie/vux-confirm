<template>
    <div style="margin: 0 auto ; width: 90% ">
        <div><input  class="ipu" v-model="title"/> <span class="btn">搜索</span></div>
        <div>
            <scroller ref="scroller" lock-x height="280px">
                <div class="skycontent">
                    <div class="list">
                        <img src="../../assets/images/header.jpg" class="img">
                        <div>名称： 哈哈哈</div>
                        <div>口号： 哈哈哈 </div>
                        <router-link to="" class="button">我要加入</router-link>
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
        height: 30px;
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
        margin-top: -45px;
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

