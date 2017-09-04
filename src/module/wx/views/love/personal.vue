<template>
    <div>
        <div><input  class="ipu" v-model="title"/> <span class="btn rose">搜索</span></div>
        <div v-i="">
            <scroller ref="scroller" lock-x height="280px">
                <div class="skycontent">
                    <div class="list">
                        <img src="../../assets/images/header.jpg" class="img">
                        <div>名称： 哈哈哈</div>
                        <div>已募捐： 哈哈哈 </div>
                    </div>
                </div>
            </scroller>
        </div>
        <div style="font-size: 14px;">找不到个人募捐信息</div>

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
    .ipu{
        width: 70%;
        height: 30px;
        border-radius: 3px;
        border: 1px solid #704091;
        background-color: transparent;
    }
    .btn{
        width: 22%;
        border-radius: 5px;
        padding: 2px;
        font-size: 14px;
        display: inline-block;
        text-align: center;
        color: #fff;
        margin-left: 10px;
        line-height: 28px;
    }
    .img {
        width: 45px;
        height: 45px;
        border-radius: 5px;
        float: left;
        margin-right: 10px;
    }
    .list{
        border-bottom: 1px solid rgba(112,65,145,.3);
        height: 50px;
        margin-top: 10px;
        font-size: 14px;
        padding-bottom: 5px;

    }
    .skycontent div{
        font-size: 14px;
    }
</style>