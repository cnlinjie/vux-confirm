import Vue from 'vue'

let fnum = function (num) { /* 格式化数字 */
	return num > 9 ? num : `0${num}`
}

Vue.filter('toDate',(time) => {
    let date = new Date(time)
    let y = date.getFullYear()
    let m = date.getMonth() + 1
    m = m < 10 ? ('0' + m) : m
    let d = date.getDate()
    d = d < 10 ? ('0' + d) : d
    let h = date.getHours()
    h = h < 10 ? ('0' + h) : h
    let minute = date.getMinutes()
    let second = date.getSeconds()
    minute = minute < 10 ? ('0' + minute) : minute
    second = second < 10 ? ('0' + second) : second
    return y + '-' + m + '-' + d+' '+h+':'+minute+':'+second
})

Vue.filter('toTime',(time) => { /* 时间戳转时间 */
	time = time / 1000
	if (time > 0) {
	  let hour = fnum(parseInt(time / 3600) % 86400)
	  let mm = fnum(parseInt((time / 60) % 60))
	  let ss = fnum(parseInt(time % 60))
	  return `${hour}:${mm}:${ss}`
	} else {
	  return '00:00:00'
	}
})
Vue.filter('downTime',(time) => { /* 倒计时 */
	let dis = parseInt((time - (new Date().getTime())) / 1000)
	if (dis > 0) {
	  let hour = fnum(parseInt(dis / 3600))
	  let mm = fnum(parseInt((dis / 60) % 60))
	  let ss = fnum(parseInt(dis % 60))
	  return `${hour}:${mm}:${ss}`
	} else {
	  return '00:00:00'
	}
})
Vue.filter('toFixed',(val, num) => { /* 格式化数字 */
	return parseFloat(val.toFixed(num))
})
Vue.filter('toYuan',(val) => { /* 格式化数字 */
	return parseFloat(val / 100)
})
Vue.filter('formatOdds',(val) => { /* 格式化数字 */
	return parseFloat(val / 10000)
})
Vue.filter('toYjfModul',(val) => { /* 格式化数字 */
	return val === 100 ? '元' : val === 10 ? '角' : '分'
})
Vue.filter('addBr',(val) => { /* 格式化数字 */
	if (val.indexOf('|') > -1) {
		return val.split('|').join('<br />')
	} else {
		return val.split(',').join('<br />')
	}
})
