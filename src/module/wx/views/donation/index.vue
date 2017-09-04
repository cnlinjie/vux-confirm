<template>
    <div style="margin: 0 auto ; width: 90% ">
        <div class="banner"></div>
        <router-link to="dona" class="donation">我已捐款</router-link>
        <div><input  class="ipu" v-model="title"/> <span class="btn">搜索</span></div>
        <div>
            <scroller ref="scroller" lock-x height="280px">
                <div class="skycontent">
                        <div class="list">
                            <img src="../../assets/images/header.jpg" class="img">
                            <router-link to="" class="button">募捐</router-link>
                            <div>名称： 哈哈哈</div>
                            <div>已募捐： 哈哈哈 </div>
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
        background-color:#704091;
        color: #fff;
        font-size: 14px;
        line-height: 28px;
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
        line-height: 28px;
        background-color: #704091;
        border-radius: 5px;
        padding: 2px;
        font-size: 14px;
        display: inline-block;
        text-align: center;
        color: #fff;
        margin-left: 10px;
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
    .button{
        float: right;
        background-color:#dd2563;
        color: rgb(255, 255, 255);
        padding: 3px;
        margin-top: 17px;
        border-radius: 5px;
        width: 50px;
        text-align: center;
        font-size: 12px;
    }
    .img {
        width: 45px;
        height: 45px;
        border-radius: 5px;
        float: left;
        margin-right: 10px;
    }
</style>

