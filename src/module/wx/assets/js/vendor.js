/**
 * Created by linjie on 2017/6/2.
 */
/**
 * 查询参数值
 * @param item
 * @returns {*}
 * @constructor
 */
window.QueryString = function (item) {
    var sValue = location.href.split('#')[1].match(new RegExp('[\?\&]' + item + '=([^\&]*)(\&?)', 'i'))
    var v = sValue ? sValue[1] : sValue
    if (v === null || v === undefined) {
        return null
    }
    return v
}

window.QueryUrl = function () {
    var split = location.href.split('#')
    if (split.length < 2) {
        return '/'
    } else {
        var sValue = split[1].split('?')[0]
        return sValue
    }

}
/**
 * 查询 URL  上的参数（/a/1) 传 a  则可以得到 1
 * @param param
 * @constructor
 */
window.QueryPath = function (param) {
    var _temp = QueryUrl().split(param)
    if (_temp.length < 2) {
        return ''
    } else {
        var sValue = _temp[1].split('/')[1]
        return sValue
    }

}

window.getDateDiff = function (dateTimeStamp) {
    var minute = 1000 * 60
    var hour = minute * 60
    var day = hour * 24
    var halfamonth = day * 15
    var month = day * 30
    var now = new Date().getTime()
    var diffValue = now - dateTimeStamp
    if (diffValue < 0) {return}
    var monthC = diffValue / month
    var weekC = diffValue / (7 * day)
    var dayC = diffValue / day
    var hourC = diffValue / hour
    var minC = diffValue / minute
    var result = ''
    if (monthC >= 1) {
        result = '' + parseInt(monthC) + '月前'
    }
    else if (weekC >= 1) {
        result = '' + parseInt(weekC) + '周前'
    }
    else if (dayC >= 1) {
        result = '' + parseInt(dayC) + '天前'
    }
    else if (hourC >= 1) {
        result = '' + parseInt(hourC) + '小时前'
    }
    else if (minC >= 1) {
        result = '' + parseInt(minC) + '分钟前'
    } else
        result = '刚刚'
    return result
}

window.str2Date = function(strDate) {
    var st = strDate;
    var a = st.split(" ");
    var b = a[0].split("-");
    var c = a[1].split(":");
    console.log(b[0]);
    console.log(b[1]);
    console.log(b[2]);
    console.log( c[0]);
    console.log(c[1]);
    console.log(c[2]);
    var date = new Date(b[0], b[1]-1, b[2], c[0], c[1], c[2]);
    return date;
}

window.getDateDiffByMinutes = function (dateTimeStamp, dateTimeStamp2) {
    var minute = 1000 * 60
    var hour = minute * 60
    var day = hour * 24
    var halfamonth = day * 15
    var month = day * 30
    var diffValue = dateTimeStamp2 - dateTimeStamp
    if (diffValue < 0) {return}
    var monthC = diffValue / month
    var weekC = diffValue / (7 * day)
    var dayC = diffValue / day
    var hourC = diffValue / hour
    var minC = diffValue / minute
    var result = ''
    if (minC >= 1) {
        result = '' + parseInt(minC) + '分钟'
    } else {
        result = '1分钟内'
    }
    return result
}

window.removeHTMLTag = function (str) {
    str = str.replace(/<\/?[^>]*>/g, '') //去除HTML tag
    str = str.replace(/[ | ]*\n/g, '\n') //去除行尾空白
    //str = str.replace(/\n[\s| | ]*\r/g,'\n'); //去除多余空行
    str = str.replace(/&nbsp;/ig, '')//去掉&nbsp;
    return str
}

window.getTopicTypeCN = function (es) {
    if (es === 'TF') {
        return '判断题';
    } else if (es === 'Single') {
        return '单选题';
    } else if (es === 'Multi') {
        return '多选题';
    } else if (es === 'Blank') {
        return '填空题';
    } else if (es === 'Sketch') {
        return '简述题';
    } else if (es === 'Expound') {
        return '论述题';
    } else {
        return '其他'
    }
}



Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "H+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

window.dateFormat = function (date) {
    if (date === '' || date === null || date === undefined) {
        return null;
    }
    return date.Format('yyyy-MM-dd HH:mm:ss');

}

