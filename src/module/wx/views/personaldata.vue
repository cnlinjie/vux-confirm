<template>
    <div>
        <div class="msg" style="margin-top: 10px"><span>姓名</span> <input/>
            <i class="error">*请务必填写真实姓名，用于购买保险时使用</i>
        </div>
        <div class="msg"><span>性别</span>
            <input type="radio" id="one" value="T" v-model="picked">
            <label for="one">男</label>
            <input type="radio" id="two" value="F" v-model="picked">
            <label for="two">女</label>
        </div>
        <div class="msg"><span>手机号码</span> <input/></div>
        <div class="msg"><span>证件类型</span>
            <select>
                <option value="volvo">身份证</option>
                <option value="saab">护照</option>
                <option value="opel">军官证</option>
            </select>
        </div>
        <div class="msg"><span>证件号码</span> <input/></div>
        <div class="msg"><span>衣服尺寸</span>
            <select>
                <option value="volvo"></option>
                <option value="saab"></option>
                <option value="opel">军官证</option>
            </select>
        </div>
        <div class="msg"><span>紧急联系人</span> <input/></div>
        <div class="msg"><span>紧急联系人电话</span> <input style="width: 48%"/></div>
        <div class="button">提交</div>

    </div>
</template>
<style scoped>
    .msg span {
        font-size: 15px;
        color: #704091;
    }

    .msg input {
        background: transparent;
        border: 1px solid #704091;
        padding: 4px;
        border-radius: 5px
    }

    .msg select {
        background: transparent;
        border: 1px solid #704091;
        padding: 4px;
        border-radius: 5px;
        width: 30%;
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
        background-color: #ccc;
        color: #fff;
        font-size: 16px;
        border-radius: 5px;
        text-align: center;
        padding: 4px;
    }
</style>