<template>
    <div style="margin-top: 10px">

        <div class="msg">
            <div class="span">姓名</div>
            <input v-model="user.realname"/>
        </div>

        <div class="msg">
            <div class="span">性别</div>
            <select v-model="user.gender">
                <option value="Man">男</option>
                <option value="Girl">女</option>
            </select>
        </div>
        <div class="msg">
            <div class="span">手机号码</div>
            <input v-model="user.phone"/>
        </div>

        <div class="msg">
            <div class="span"> 证件类型</div>
            <select v-model="user.cardType">
                <option value="身份证">身份证</option>
                <option value="护照">护照</option>
                <option value="军官证">军官证</option>
            </select>
        </div>
        <div class="msg">
            <div class="span">证件号码</div>
            <input v-model="user.cardId"/></div>
        <div class="msg">
            <div class="span">衣服尺寸</div>
            <select v-model="user.clothesSize">
                <option v-for="item in sizeList " :key="item" :value="item">{{item}}</option>
            </select>
        </div>
        <div class="msg">
            <div class="span">紧急联系人</div>
            <input v-model="user.sosRealname"/></div>
        <div class="msg">
            <div class="span" style="width: 110px;">紧急联系人电话</div>
            <input style="" v-model="user.sosPhone"/></div>


        <div class="button " @click="save">提交</div>

    </div>


</template>

<script>
    import {info, reg, isNull} from '../assets/js/verification'
    import {mapActions, mapGetters} from "vuex"
    import {go, getUrl} from 'vux/src/libs/router'
    export default {
        data() {
            return {
                sendCodeText: '发送验证码',
                isSending: false,
                user: {},
                code: '',
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

            sendTimeing() {

                let t = 120;
                let si = setInterval((data) => {
                    t--;
                    if (t === 0) {
                        this.sendCodeText = '发送验证码';
                        clearInterval(si);
                        this.isSending = false;
                    } else {
                        this.sendCodeText = t;
                    }
                }, 1000);

            },
            sendCode() {
                if (this.isSending) {
                    return;
                }
                this.isSending = true;
                this.ajax.put('/code/get-reg-code?phone=' + this.user.phone, (data) => {
                    _showError('发送成功');
                    this.sendTimeing();
                }, (err) => {
                    this.isSending = false;
                })
            },

            getUser() {
                this.ajax.get('/my/user', {}, (data) => {
                    this.user = data;
                    if (isNull(this.user.cardType)) {
                        this.user.cardType = '身份证';
                    }
                    if (isNull(this.user.gender)) {
                        this.user.gender = '男';
                    }
                    if (isNull(this.user.clothesSize)) {
                        this.user.clothesSize = 'S:155-160(cm)';
                    }
                });
            },
            save() {
                let user = this.user;
                let msg = '';
                if (isNull(user.realname)) {
                    msg = '名字不能为空';
                } else if (reg.mobile.test(user.phone) === false) {
                    msg = '请填写正确的手机号';
                } else if (isNull(user.cardId)) {
                    msg = '请填写证件号'
                } else if (user.cardType === '身份证' && reg.idcode.test(user.cardId) === false) {
                    msg = '请填写有效的身份证号'
                } else if (isNull(user.cardType)) {
                    msg = '请选择证件';
                } else if (isNull(user.gender)) {
                    msg = '请选择性别';
                } else if (isNull(user.clothesSize)) {
                    msg = '请选择衣服尺寸';
                } else if (isNull(user.sosRealname)) {
                    msg = '请填写紧急联系人';
                } else if (isNull(user.sosPhone)) {
                    msg = '请填写紧急联系人电话';
                } else if (reg.mobile.test(user.sosPhone) === false) {
                    msg = '请填写正确的紧急联系人电话';
                }
                if (msg !== '') {
                    _showError(msg)
                    return;
                }
                this.ajax.post('/users/update', user, (data) => {
                    _showError('保存成功')
                    go('/teanmoney', this.$router);
                });

            }
            , ...mapActions(['setActive'])
        },
        mounted() {
            this.getUser();
            this.setActive('data')
        }
    }

</script>


<style scoped>
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
        width: 50%;
        font-size: 15px;

    }

    .msg select {
        background-color: rgba(225, 215, 240, .6);
        border: 1px solid #704091;
        padding: 4px;
        border-radius: 5px;
        width: 55%;
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

    .button {
        width: 50%;
        margin: 15px auto;
        background-color: #704091;
        color: #fff;
        font-size: 16px;
        border-radius: 5px;
        text-align: center;
        padding: 4px;
    }

    .touxiang {
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }

    .send-button-dis {
        width: 70px;
        background-color: #cccccc;
        color: #fff;
        font-size: 14px;
        border-radius: 5px;
        text-align: center;
        padding: 2px;
        display: inline-block;
    }

    .send-button {
        width: 70px;
        background-color: #704091;
        color: #fff;
        font-size: 14px;
        border-radius: 5px;
        text-align: center;
        padding: 2px;
        display: inline-block;
    }


</style>