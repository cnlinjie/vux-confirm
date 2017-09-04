import axios from 'axios'
import { Message } from 'element-ui'
import { Loading } from 'element-ui'

//判断是否存在指定函数
function isFunction (funcName) {
    try {
        if (typeof (eval(funcName)) == 'function') {
            return true
        }
    } catch (e) {
    }
    return false
}

let ajax = {

    get: function (url, config, success, error) {

        return axios.get(url, {params: config}).then(res => {
            if (res.data.code != 0) {
                Message({message: res.data.msg, type: 'warning', showClose: true, duration: 2500})
                if (isFunction(error)) {
                    error(res.data)
                }
            } else {
                if (isFunction(success)) {
                    success(res.data.data)
                }
            }
        }).catch(err => {
            if (isFunction(error)) {
                error(err)
            }
        })
    },

    postForm: function (url, config, success, error) {
        let params = new URLSearchParams()
        for (let key in config) {
            params.append(key, config[key])
        }
        return axios.post(url, params).then(res => {
            if (res.data.code !== 0) {
                Message({message: res.data.msg, type: 'warning', showClose: true, duration: 2500})
                if (isFunction(error)) {
                    error(res.data)
                }
            } else {
                if (isFunction(success)) {
                    success(res.data.data)
                }
            }
        }).catch(err => {
            if (isFunction(error)) {
                error(err)
            }
        })
    },

    post: function (url, config, success, error) {
        return axios.post(url, config).then(res => {
            if (res.data.code != 0) {
                Message({message: res.data.msg, type: 'warning', showClose: true, duration: 2500})
                if (isFunction(error)) {
                    error(res.data)
                }
            } else {
                if (isFunction(success)) {
                    success(res.data.data)
                }
            }
        }).catch(err => {
            if (isFunction(error)) {
                error(err)
            }
        })

    },
    put: function (url, success, error) {
        return axios.put(url).then(res => {
            if (res.data.code !== 0) {
                Message({message: res.data.msg, type: 'warning', showClose: true, duration: 2500})
                if (isFunction(error)) {
                    error(res.data)
                }
            } else {
                if (isFunction(success)) {
                    success(res.data.data)
                }
            }
        }).catch(err => {
            if (isFunction(error)) {
                error(err)
            }
        })
    },

    putJSON: function (url, config, success, error) {
        return axios.put(url, config).then(res => {
            if (res.data.code != 0) {
                Message({message: res.data.msg, type: 'warning', showClose: true, duration: 2500})
                if (isFunction(error)) {
                    error(res.data)
                }
            } else {
                if (isFunction(success)) {
                    success(res.data.data)
                }
            }
        }).catch(err => {
            if (isFunction(error)) {
                error(err)
            }
        })
    },

    delete: function (url, config, success, error) {
        return axios.delete(url, config).then(res => {
            if (res.data.code != 0) {
                Message({message: res.data.msg, type: 'warning', showClose: true, duration: 2500})
                if (isFunction(error)) {
                    error(res.data)
                }
            } else {
                if (isFunction(success)) {
                    success(res.data.data)
                }
            }
        }).catch(err => {
            if (isFunction(error)) {
                error(err)
            }
        })
    }
}

export  default  ajax