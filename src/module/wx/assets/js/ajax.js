import axios from 'axios';
import Vue from 'vue'
//判断是否存在指定函数
function isFunction(funcName) {
    try {
        if (typeof (eval(funcName)) == "function") {
            return true;
        }
    } catch (e) {
    }
    return false;
}
function _showOrClose (display) {
    let loading = document.querySelector('#public-loading')
    if (loading !== null) {
        loading.style.display = display
    }
}

function _showError (msg) {
    let error = document.querySelector('#public-error')
    let errorMsg = document.querySelector('#public-error-msg')
    if (error !== null && errorMsg !== null) {
        error.style.display = ''
        errorMsg.textContent = msg
        setTimeout(function () {
            error.style.display  = 'none'
        },1000)
    }
}

let ajax = {
    get: function (url, config, success, error) {
        _showOrClose('')
        return axios.get(url, {params:config}).then(res => {
            _showOrClose('none')
            if (res.data.code != 0) {
                _showError(res.data.msg)
                if (isFunction(error)) {
                    error(res.data);
                }
            } else {
                if (isFunction(success)) {
                    success(res.data.data);
                }
            }
        }).catch(err => {
            _showOrClose('none')
            if (isFunction(error)) {
                error(err);
            }
        });
    },

    postForm: function (url, config, success, error) {
        _showOrClose('')

        let params = new URLSearchParams();
        for (let key in config) {
            params.append(key, config[key])
        }
        return axios.post(url, params).then(res => {
            _showOrClose('none')
            if (res.data.code != 0) {
                _showError(res.data.msg)
                if (isFunction(error)) {
                    error(res.data);
                }
            } else {
                if (isFunction(success)) {
                    success(res.data.data);
                }
            }
        }).catch(err => {
            _showOrClose('none')
            if (isFunction(error)) {
                error(err);
            }
        });
    },

    post: function (url, config, success, error) {
        _showOrClose('')

        return axios.post(url, config).then(res => {
            _showOrClose('none')
            if (res.data.code != 0) {
                _showError(res.data.msg)
                if (isFunction(error)) {
                    error(res.data);
                }
            } else {
                if (isFunction(success)) {
                    success(res.data.data);
                }
            }
        }).catch(err => {
            _showOrClose('none')
            if (isFunction(error)) {
                error(err);
            }
        });

    },

    put: function (url, success, error) {
        _showOrClose('')
        return axios.put(url).then(res => {
            _showOrClose('none')
            if (res.data.code != 0) {
                _showError(res.data.msg)
                if (isFunction(error)) {
                    error(res.data);
                }
            } else {
                if (isFunction(success)) {
                    success(res.data.data);
                }
            }
        }).catch(err => {
            _showOrClose('none')
            if (isFunction(error)) {
                error(err);
            }
        });
    },

    putJSON: function (url, config, success, error) {
        _showOrClose('')

        return axios.put(url, config).then(res => {
            _showOrClose('none')
            if (res.data.code != 0) {
                _showError(res.data.msg)
                if (isFunction(error)) {
                    error(res.data);
                }
            } else {
                if (isFunction(success)) {
                    success(res.data.data);
                }
            }
        }).catch(err => {
            _showOrClose('none')
            if (isFunction(error)) {
                error(err);
            }
        });

    },
    delete: function (url, config, success, error) {
        _showOrClose('')
        return axios.delete(url, config).then(res => {
            _showOrClose('none')
            if (res.data.code != 0) {
                _showError(res.data.msg)
                if (isFunction(error)) {
                    error(res.data);
                }
            } else {
                if (isFunction(success)) {
                    success(res.data.data);
                }
            }
        }).catch(err => {
            _showOrClose('none')
            if (isFunction(error)) {
                error(err);
            }
        });
    }
};

export  default  ajax;