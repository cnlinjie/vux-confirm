<template>
    <div style="margin: 0 auto ; width: 90% ">
        <div class="banner"></div>
        <div class="sky violet"> 队伍信息</div>
        <div>
            <div class="list">
                <img src="../../assets/images/header.jpg" class="img">
                <div>队伍名称：</div>
                <div>队伍口号：</div>
                <router-link to="" class="button">修改</router-link>
            </div>
        </div>

        <div class="sky violet">
            <i style="text-align: left;width:50%; margin-left: 5px;">队员信息</i>
            <router-link to="addteam" style="text-align: right; font-size: 16px;color: #fff;">方阵信息(亲子组)</router-link>
        </div>

        <div>
            <div class="skycontent">
                <div class="list" v-for="n in 4">
                    <img src="../../assets/images/header.jpg" class="img">
                    <div>姓名：</div>
                    <div>手机：</div>
                </div>
            </div>
        </div>
        <i style="font-size: 12px;
        font-style: normal ;
        color: #e64340;">队长缴纳200元押金后队伍才算真正组成，方可进行募捐</i>
        <div class="next" @click="next">缴纳押金</div>
    </div>
</template>
<script>
    import {Scroller} from 'vux'
    import {go, getUrl} from 'vux/src/libs/router'


    export default {
        data() {
            return {
                asyncCount: 0,
                title: '',
                team:{}
            }
        },
        components: {
            Scroller
        },
        methods: {
            next () {
                this.$router.push('/Information')
            }
        },


        beforeCreate() {
            this.ajax.get('/my/team', {}, (data) => {
                console.log(data);
                this.team = data;
            },(err) => {
//                go('/createteam',this.$router)
            });
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

    i {
        font-style: normal;
        display: inline-block;
    }

    .list {
        border-bottom: 1px solid rgba(112, 65, 145, .3);
        height: 50px;
        margin-top: 10px;
        font-size: 14px;
        padding-bottom: 5px;
    }

    .list div {
        line-height: 22px;
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

    .button {
        background-color: #dd2563;
        color: #fff;
        border-radius: 5px;
        text-align: center;
        float: right;
        padding: 3px;
        margin-top: -35px;
    }

    .next {
        width: 50%;
        margin: 0 auto;
        background-color: #704091;
        font-size: 18px;
        border-radius: 5px;
        text-align: center;
        padding: 5px;
        color: #fff;
    }
</style>

