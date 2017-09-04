<template>
    <div>
        <div class="banner"></div>
        <div class="sky violet">选择方阵</div>
        <div class="group rose">纯真亲子组 6/100 </div>
        <div class="group" style="margin-top: 18px;">悦动健行组 6/100</div>
        <div class="button" @click="isOK">确定加入</div>
    </div>
</template>
<script >
    export default {
        data() {
            return {
            }
        },
        components: {
        },
        methods: {
            isOK() {
                this.$router.push('/createteamok')
            }
        },
        mounted() {
        }
    }
</script>
<style scoped>
    .sky {
        width: 90%;
        margin: 0 auto;
        text-align: center;
        color: #fff;
        font-size: 16px;
        margin-top: 10px;
        margin-bottom: 10px;
        padding: 5px;
    }
    .group{
        width: 50%;
        height: 70px;
        line-height: 60px;
        text-align: center;
        margin: 0 auto;
        color: #fff;
        font-size: 16px;
        border: 1px solid crimson;
    }
    .button {
        width: 50%;
        background-color:#704091;
        color: #fff;
        font-size: 14px;
        border-radius: 5px;
        text-align: center;
        padding: 5px;
        display: block;
        margin: 90px auto;
    }
</style>

