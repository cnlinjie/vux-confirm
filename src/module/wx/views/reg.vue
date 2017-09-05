<template>

    <div style="width: 90%;  margin: 0 auto;">
        <div class="banner"></div>
        <img src="../assets/images/header.jpg" class="touxiang ">
        <span style="vertical-align: top;line-height: 78px;font-size: 16px;">微信昵称</span>
        <div>
            <div class="msg" style="margin-top: 10px">
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
                <div class="send-button">获取验证码</div>
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


        <div class="button " @click="save">注册提交</div>

    </div>
    </div>
</template>

<script>
    import {info, reg, isNull} from '../assets/js/verification'
    export default {
        data() {
            return {
                user: {},
                sizeList: [
                    'S:155-160(cm)',
                    'M:160-165 (cm) ',
                    'L:65-170(cm)',
                    'XL:170-175(cm)',
                    'XXL:175-180(cm)',
                    'XXXL:180-185(cm)'
                ],
            }
        },
        components: {},
        methods: {
            getUser() {
                this.ajax.get('/my/user', {}, (data) => {
                    console.log(data);
                    this.user = data;
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
                }
                if (msg !== '') {
                    _showError(msg)
                    return;
                }
                this.ajax.post('/users/update', user, (data) => {
                    _showError('保存成功')
                });
            }
        },
        mounted() {
            this.getUser();
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
        width: 45%;

    }

    .msg select {
        background: transparent;
        border: 1px solid #704091;
        padding: 4px;
        border-radius: 5px;
        width: 50%;
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

    .send-button {
        width: 65px;
        background-color: #704091;
        color: #fff;
        font-size: 12px;
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