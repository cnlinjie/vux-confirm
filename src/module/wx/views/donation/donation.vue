<template>
    <div style="width: 90% ; margin: auto">
        <div class="banner"></div>
        <div class="sky violet">
            <i style="text-align: left;  margin-left: 5px;">队伍名字 啊啊啊</i>
        </div>

        <div class="money"><i>募捐金额</i>
            <span>100</span><span>200</span><span>500</span> <input v-model="money" placeholder="输入其它金额"/>
        </div>
        <div class="sky violet"> 捐款人信息 </div>
        <div class="msg"><span>姓名</span> <input /></div>
        <div class="msg"><span>留言</span> <input /></div>
        <div class="msg"><span>是否要发票</span>
            <input type="radio" id="one" value="T" v-model="picked">
            <label for="one">是</label>
            <input type="radio" id="two" value="F" v-model="picked">
            <label for="two">否</label>
        </div>
        <div class="msg"><span>发票抬头</span> <input /></div>
        <div class="msg"><span>邮寄地址</span> <input /></div>
        <div class="msg"><span>联系人</span> <input /></div>
        <div class="msg"><span>联系电话</span> <input /></div>
        <div style="margin: 0 15px; margin-bottom: 15px;">
            <router-link to="donations" class="button violet">跳转捐款</router-link>
        </div>

    </div>
</template>
<script>

    export default {
        data() {
            return {
                money:'',
                picked:''
            }
        },
        components: {

        },
        methods: {

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
    .money i{
        font-size: 14px;
        color: #704091;
        margin: 10px 10px 10px 0;
    }
    .money span{
        border: 1px solid #704091;
        margin-right: 8px;
        font-size: 14px;
        padding: 5px;
        border-radius: 5px
    }
    .money input {
        width: 26%;
        background: transparent;
        border: 1px solid #704091;
        margin-top: 5px;
        line-height: 28px;
        font-size: 12px;
    }
    .msg span{
        font-size: 14px;
        color: #704091;
    }
    .msg input{
        background: transparent;
        border: 1px solid #704091;
        padding: 4px;
        border-radius: 5px
    }
    label {
        font-size: 14px;
    }
    .button{
        width: 50%;
        margin: 0 auto;
        color: #fff;
        font-size: 14px;
        border-radius: 5px;
        text-align: center;
        margin-top: 20px;
        padding: 5px;
        display: block;
}
</style>
