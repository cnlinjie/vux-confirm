import Vue from 'vue'

let vue = new Vue()

const reg = {
	"nickname": /^[\u4e00-\u9fa5_a-zA-Z0-9]*$/, // 昵称 由 3 ~ 12 位字符的汉字、字母、数字、下划线组成，一个汉字占两个字符
	"personname": /^[\u4e00-\u9fa5a-zA-Z]*$/, // 人名 由汉字、字母组成
	"account": /^[a-zA-Z][a-zA-Z0-9_]{5,11}$/, // 用户名  由 3~12 位字母、数字、下划线组成，且第一位不能是下划线
	"password": /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,20}$/,// 密码由6~20位数字、字母、特殊字符组成，且不能为纯数字、字母、特殊字符
	"paypwd": /^\d{4}$/, // 支付密码  由4位纯数字组成
	"code": /^[a-zA-Z0-9]+$/, // code
	"describe": /^[\u4e00-\u9fa5a-zA-Z0-9_]*$/, // 描述 由汉字、字母组成  1~30 位字符组成 一个汉字占两字符
	"word": /^[\u4e00-\u9fa5\w\s]+$/, // 文字，textarea
	"money": /^[1-9]\d*(\.\d{1,3})?$|^0(\.\d{1,3})?$/, // 金钱 整数 或 1~3位的小数 或 0
	"card": /^\d{15,20}$/, // 卡号 由 15~20 位纯数字组成
	"integer": /^-?\d+$/, // 整数
	"age": /^[1-9][0-9]?$/, // 年龄
	"idcode": /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i, // 身份证号
	"mobile": /^1(3|4|5|7|8)\d{9}$/, // 手机号码
	"qqnum": /^\d{4,11}$/, // QQ号码
	"ballnum": /^\d{1,2}$/, // 球号
	"email": /^\w+([-_.]\w+)*@(\w+[-.])+[A-Za-z]{2,5}$/, // 邮箱
	"provinceId": /^[a-zA-Z0-9]{7,21}$/ ,
	"Disabletag":/^(?!<([^>*]+)>)/g
};

const info = {
	account: '由 6~12 位字母、数字、下划线组成，且第一位必须是字母',
	password: '由 6~20 位数字、字母、特殊字符组成，且不能为纯数字、字母、特殊字符',
};

let notEmpty = (lists) => { /* 非空判断 */
	let showList = [];
	for (let i in lists) {
		if (lists[i].show) {
			lists[i].code = i;
			showList.push(lists[i])
		}
	}
	for (let it of showList) {
		if (typeof it.val === 'string' && it.val === '' && !it.allowNull) {
			it.status = 0;
			it.attention = `${it.name}不能为空`;
		}
	}
	let errorList = showList.filter(it => !it.status);
	return (errorList.length === 0 && showList.length > 0) ? showList : false
}

export { info, reg, notEmpty }

