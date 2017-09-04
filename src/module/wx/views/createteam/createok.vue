<template>
    <div style="margin: 0 auto ; width: 90% ">
        <div class="banner"></div>
        <div class="sky violet">
            <i style="text-align: left;width:60%; margin-left: 5px;">队伍信息</i>
            <router-link to="addteam" style="text-align: right; font-size: 14px;color: #fff;">+添加成员</router-link>
        </div>
        <div>
            <scroller ref="scroller" lock-x height="350px">
                <div class="skycontent">
                    <div class="list">
                        <img src="../../assets/images/header.jpg" class="img">
                        <div>姓名：张三【队长】</div>
                        <div>手机号码：13696988888 </div>
                    </div>
                </div>
            </scroller>
        </div>
        <router-link to="donations" class="button violet">下一步</router-link>
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
    .sky {
        margin: 0 auto;
        color: #fff;
    }
    i{
        font-style: normal;
        display: inline-block;
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
    .img {
        width: 45px;
        height: 45px;
        border-radius: 5px;
        float: left;
        margin-right: 10px;
    }
    .button{
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

