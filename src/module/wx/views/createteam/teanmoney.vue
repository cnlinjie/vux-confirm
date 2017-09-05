<template>
    <div>
        <div class="sky violet" style="margin-top: 10px; font-size: 16px; text-align: left;">
            <i style=" margin-left: 5px;  ">队伍信息</i>
            <router-link to="addteam" style="text-align: right; font-size: 14px;color: #fff; float: right; margin-right: 20px;">+添加成员</router-link>

        </div>

        <div>
            <div class="list-team">
                <div style="float: left; height: 100%; width: 45px;"><img src="../../assets/images/header.jpg" class="img"></div>
                <div>队伍名称：可口可乐</div>
                <div>队伍人数：4人   </div>
                <div>筹款目标：50000元  </div>
                <div>队伍口号：生命在于运动</div>
                <router-link to="" class="button">修改</router-link>
            </div>
        </div>

        <div class="sky violet" style="text-align: left; padding-left: 10px; font-size: 16px;">本组队员 </div>
        <div>
                <div class="skycontent">
                    <div class="list" v-for="n in 4">
                        <img src="../../assets/images/header.jpg" class="img">
                        <div>姓名：</div>
                        <div>手机：</div>
                    </div>

                </div>
        </div>
        <i style="font-size: 13px; font-style: normal ;">本队已筹集：</i><i style="color:#dd2563">1000元</i>
       <div style="font-size: 13px;">筹款进度：
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


        <div>
            <i style="font-size: 12px;
        font-style: normal ;
        color: #e64340;">队长缴纳200元押金后队伍才算真正组成，方可进行募捐</i>
            <div class="next-button violet" @click="next">缴纳押金</div>
        </div>

        <div>
            <router-link to="donations" class="next-button violet"   > 下一步</router-link>
        </div>
        <div>
            <div   class="next-button violet"   > 分享队伍</div>
        </div>

        <div style="margin: 20px auto">
            <span class="next">解算队伍</span>
            <span class="next">分享队伍</span>
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
            },
            next () {
                alert('押金')
            }
        },
        mounted() {
        }
    }


</script>
<style scoped>
    .sky {
        margin: 0 auto;
        color: #fff;
    }
    i{
        font-style: normal;
        display: inline-block;
    }


    .list-team{
        height: 85px;
        margin-top: 10px;
        font-size: 14px;
        padding-bottom: 5px;
    }
    .list-team div {
        line-height: 22px;
    }

    .list{
        border-bottom: 1px solid rgba(112,65,145,.3);
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

    .button{
        background-color: #dd2563;
        color: #fff;
        border-radius: 5px;
        text-align: center;
        float: right;
        padding: 3px;
        margin-top: -40px;
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


    .next-button{
        width: 50%;
        margin: 20px auto;
        color: #fff;
        font-size: 14px;
        border-radius: 5px;
        text-align: center;
        padding: 5px;
        display: block;
    }
</style>

