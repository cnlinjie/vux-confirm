<template>
    <div style="width: 90% ; margin: auto">
        <div class="banner"></div>
        <div class="sky violet">
            <i style="text-align: left;  margin-left: 5px;">队伍名字 啊啊啊</i>
        </div>

        <div class="money">
            <div class="span">募捐金额</div>
            <span @click="selectMoney(item)" :class="req.money === item ? 'select-span':''" v-for="item in defaultJk"
                  :key="item">{{item}}元</span>
        </div>
        <div class="msg">
            <div class="span">其他金额</div>
            <input v-model="req.money" placeholder="输入其它金额" style="margin-bottom: 10px;"/>
        </div>


        <div class="sky violet"> 捐款人信息 </div>
        <div class="msg">
            <div class="span">姓名</div>
            <input v-model="req.realname"/></div>
        <div class="msg">
            <div class="span">留言</div>
            <input v-model="req.message"/></div>

        <div class="msg">
            <div class="span">是否要发票</div>
            <input :disabled="req.money < 100" type="radio" id="one" value="T" v-model="picked" style="width: 10%"/>
            <label for="one">是</label>
            <input :disabled="req.money < 100" type="radio" id="two" value="F" v-model="picked" style="width: 10%"/>
            <label for="two">否</label>
            <i class="error">* 单笔捐款100元以上（含100元）可开具发票</i>
        </div>

        <div v-show="picked === 'T' && req.money >= 100">
            <div class="msg">
                <div class="span">发票抬头</div>
                <input v-model="req.invoiceTitle"/></div>
            <div class="msg">
                <div class="span">邮寄地址</div>
                <input v-model="req.invoiceAddress"/></div>
            <div class="msg">
                <div class="span">联系人</div>
                <input v-model="req.invoiceContactName"/></div>
            <div class="msg">
                <div class="span">联系电话</div>
                <input v-model="req.invoiceContactPhone"/></div>
        </div>

        <div style="margin: 0 15px; margin-bottom: 15px;">
            <div @click="pay" to="donations" class="button violet">跳转捐款</div>
        </div>

    </div>
</template>
<script>


    import {info, reg, isNull} from '../../assets/js/verification'
    export default {
        data() {
            return {
                defaultJk: [100, 200, 500],
                picked: '',
                req: {
                    money: 0,
                    message: '加油!加油!',
                    realname: '',
                    needInvoice: 0,
                    invoiceTitle: '',
                    invoiceAddress: '',
                    invoiceContactName: '',
                    invoiceContactPhone: '',
                }
            }
        },
        components: {},
        methods: {
            pay() {
                let msg = '';

                this.req.needInvoice = 0;
                if (this.picked === 'T' && this.req.money >= 100) {
                    this.req.needInvoice = 1;
                }
                if (this.req.money <= 0) {
                    msg = '捐款金额不能小于或等于0哦';
                } else if (reg.integer.test(this.req.money) === false) {
                    msg = '捐款金额只能是整数哦';
                } else if (isNull(this.req.realname)) {
                    msg = '请填写姓名';
                } else if (isNull(this.req.realname)) {
                    msg = '请填写留言';
                } else if (this.req.needInvoice === 1) {
                    if (isNull(this.req.invoiceTitle)) {
                        msg = '请填写发票抬头';
                    } else if (isNull(this.req.invoiceAddress)) {
                        msg = '请填写联系邮寄地址';
                    } else if (isNull(this.req.invoiceContactName)) {
                        msg = '请填写联系人';
                    } else if (isNull(this.req.invoiceContactPhone)) {
                        msg = '请填写联系电话';
                    } else if (reg.mobile.test(this.req.invoiceContactPhone) === false) {
                        msg = '请填写正确的联系电话';
                    }
                }


                if (msg !== '') {
                    _showError(msg)
                    return;
                }
                _showError('OK')
            },
            selectMoney(m) {
                this.req.money = m;
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

    i {
        font-style: normal;
        display: inline-block;
    }

    .money i {
        font-size: 14px;
        color: #704091;
        margin: 10px 10px 10px 0;
    }

    .money span {
        width: 78px;
        border: 1px solid #704091;
        margin-right: 8px;
        font-size: 14px;
        padding: 5px;
        border-radius: 5px;

    }

    .select-span {
        background-color: red;
        color: white;;
    }

    .money input {
        width: 50%;
        background: transparent;
        border: 1px solid #704091;
        margin-top: 5px;
        line-height: 28px;
        font-size: 12px;
    }

    .span {
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

    label {
        font-size: 14px;
    }

    .error {
        color: #f35353;
        display: inline-block;
        font-size: 14px;
        font-style: normal;
    }

    .button {
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
