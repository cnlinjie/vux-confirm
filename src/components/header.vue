<style scoped>


    .header {
        height: 60px;
        background-color: #464646;
        color: #fff;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 100;
        position: relative;
        min-width: 100%;
        overflow: hidden;

    }

    .header div {
        height: 100%;
        text-align: center;
    }

    .header-head {
        float: right;
        width: 50px;
        text-align:left !important;
    }

    .header-head .img {
        width: 30px; border-radius:50%;margin:15px 10px 15px 10px
    }

    .header-head-nickname {
        float: right;
        width: 200px;
        text-align: left !important;
        font-size: 13px;
    }

    .header .exit {
        float:right; width: 120px;  font-size: 13px;
    }
    .header .exit:hover {
        background-color: #3a3939;
        cursor:pointer;

    }

    .header .kefu {
         float:right; width: 140px; font-size: 13px;
     }

    .header .kefu:hover {
        background-color: #3a3939;
        cursor:pointer;
    }

    .header  .header-line-height {
        line-height: 60px;
    }

</style>

<template>
    <header class="header">
        <div style="float: left; width: 230px;">
            <a href="/"> <img src="../assets/imgs/logo.png" style="width: 75%;height: 75%; margin: 3% "/></a>

        </div>
        <div style="float: left; width: 150px;  ">
            <span style="font-size: 20px;" class="header-line-height">用户中心</span>
        </div>
        <div class="exit header-line-height"  @click="logout" >
            <i class="iconfont icon-19" @click="logout" ></i>&nbsp;&nbsp;<span @click="logout" >退出</span>
        </div>
        </div>
        </div>
        <div class="kefu header-line-height">

            <i class="iconfont icon-qq"></i>&nbsp;&nbsp;<span>联系客服</span>
        </div>
        <div class="header-head-nickname header-line-height">
           <span>微信昵称微信昵称 欢迎登录</span>
        </div>
        <div class="header-head">
                 <img class="img" src="../assets/imgs/default-head.jpg" style=""/>
        </div>

    </header>
</template>

<script type="text/babel">
    export default {
        data() {
            return {

            };
        },
        methods: {
            logout() {
                this.ajax.get('/session/logout',{},data => {
                    window.location.href = '/login'
                    sessionStorage.clear();
                })
            }
        }
    };
</script>
