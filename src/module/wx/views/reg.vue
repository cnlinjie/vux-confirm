<template>

    <div>
        <div class="yd" @click="yd" v-show="isYd">

        </div>
        <div style="width: 90%;  margin: 0 auto;display: none;" v-show="!isYd">
            <div class="banner"></div>
            <img :src="wxUser.headImgUrl" class="touxiang ">
            <span style="vertical-align: top;line-height: 78px;font-size: 16px;margin-left: 10px;">{{wxUser.nickname}}</span>
            <div>
                <div class="msg">
                    <div class="span">手机号码</div>
                    <input v-model="user.phone"/>
                </div>

                <div class="msg">
                    <div class="span">手机验证码</div>
                    <input v-model="user.code" style="width: 20%"/> <div :class="isSending?'send-button-dis':'send-button'" @click="sendCode"  >{{sendCodeText}}</div>
                </div>


                <div class="button " @click="save">注册/登录</div>
            </div>
        </div>
    </div>



</template>

<script>
    import {info, reg, isNull} from '../assets/js/verification'
    import { go, getUrl } from 'vux/src/libs/router'

    export default {
        data() {
            return {
                sendCodeText:'发送验证码',
                isSending:false,
                user: {
                    phone:'',
                    code:'',
                },
                wxUser:{},
                isYd:true,
                sizeList: [
                    'S:155-160(cm)',
                    'M:160-165 (cm) ',
                    'L:165-170(cm)',
                    'XL:170-175(cm)',
                    'XXL:175-180(cm)',
                    'XXXL:180-185(cm)'
                ],
            }
        },
        components: {},
        methods: {
            yd() {
                this.isYd = false;
            },
            getWxUser() {
                this.ajax.get('/session/get-wx-user', {}, (data) => {
                    this.wxUser = data;
                });
            },
            sendTimeing() {
                let t = 60;
                let  si = setInterval((data)=> {
                    t--;
                    if (t === 0) {
                        this.sendCodeText= '发送验证码';
                        clearInterval(si);
                        this.isSending = false;
                    } else {
                        this.sendCodeText = t;
                    }
                },1000);

            },
            sendCode() {
                if (this.isSending) {
                    return;
                }
                this.isSending = true;
                this.ajax.put('/code/get-reg-code?phone='+this.user.phone,(data) => {
                    _showError('发送成功');
                    this.sendTimeing();
                },(err)=> {
                    this.isSending = false;
                })
            },
            save() {
                let user = this.user;
                let msg = '';
                if (isNull(user.code)) {
                    msg = '验证码不能为空';
                } else if (reg.mobile.test(user.phone) === false) {
                    msg = '请填写正确的手机号';
                }
                if (msg !== '') {
                    _showError(msg)
                    return;
                }
                this.ajax.postForm('/users/reg', user, (data) => {
                    _showError('登录成功');
                    go('/wx/?rnd=1');
                },(err)=>{
                    if (err.msg === '已经注册过了') {
                        go('/wx/?rnd=1');
                    }
                });
            }
        },
        mounted() {
            this.getWxUser();
        }
    }

</script>


<style scoped>
    .yd {
        position: absolute;
        z-index: 999;
        top: 0;
        width: 100%;
        height: 100%;
        background:url('../assets/images/yd1.jpg') no-repeat center/100%;
    }
    .msg .span {
        font-size: 15px;
        color: #704091;
        width: 78px;
        display: inline-block;
    }

    .msg input {
        background: transparent;
        border: 1px solid #704091;
        padding: 5px;
        border-radius: 5px;
        padding-left: 10px;
        width: 45%;
        font-size: 15px;

    }

    .msg select {
        background: transparent;
        border: 1px solid #704091;
        padding: 4px;
        border-radius: 5px;
        width: 50%;
        font-size: 15px;
    }

    label {
        font-size: 15px;
    }

    .error {
        color: #f35353;
        display: inline-block;
        font-size: 14px;
        font-style: normal;
    }

    .touxiang {
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }


    .send-button-dis {
        width: 80px;
        background-color: #cccccc;
        color: #fff;
        font-size: 14px;
        border-radius: 5px;
        text-align: center;
        padding: 2px;
        display: inline-block;
    }

    .send-button {
        width: 80px;
        background-color: #704091;
        color: #fff;
        font-size: 14px;
        border-radius: 5px;
        text-align: center;
        padding: 2px;
        display: inline-block;
    }

    .button {
        width: 50%;
        margin: 30px auto;
        background-color: #704091;
        color: #fff;
        font-size: 16px;
        border-radius: 5px;
        text-align: center;
        padding: 4px;
    }
</style>