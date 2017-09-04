import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import model from './model'

Vue.use(Vuex)

let resetName = (obj, header) => {
    let name = typeof obj.name !== 'undefined' ? obj.name : 'default'
    let _header = typeof obj.header !== 'undefined' ? obj.header : header
    name = name[0].toUpperCase() + name.slice(1)
    return _header + name
}

let init = () => {
    for (let item of model) {
        let name = item.name
        let setName = resetName(item, 'set')
        let getName = resetName(item, 'get')
        if (typeof actions[setName] === 'undefined') {
            actions[setName] = ({commit}, param) => {
                commit(setName, param)
            }
        }
        if (typeof mutations[name] === 'undefined') {
            mutations[setName] = (_state, param) => {
                _state[item.name] = param
                if (item.storage) {
                    sessionStorage[item.name] = typeof param === 'object' ? JSON.stringify(param) : param
                }
            }
        }

        if (typeof state[name] === 'undefined') {
            state[name] = item.data
        }

        if (typeof getters[name] === 'undefined') {
            if (item.storage) {
                getters[name] = (_state) => {
                    let isObject = typeof _state[name] === 'object'
                    if (sessionStorage[name]) {
                        return typeof item.data === 'object' ? JSON.parse(sessionStorage[name]) : sessionStorage[name]
                    } else if (isObject && Object.keys(_state[name]).length) {
                        return _state[name]
                    } else if (!isObject && _state[name]) {
                        return _state[name]
                    } else {
                        return item.data
                    }
                }
            } else {
                getters[name] = (_state) => {
                    return typeof _state[name] !== 'undefined' ? _state[name] : item.data
                }
            }
        }

        if (typeof getters[getName] === 'undefined') {
            if (item.storage) {
                getters[getName] = (_state) => {
                    let isObject = typeof _state[name] === 'object'
                    if (sessionStorage[name]) {
                        return typeof item.data === 'object' ? JSON.parse(sessionStorage[name]) : sessionStorage[name]
                    } else if (isObject && Object.keys(_state[name]).length) {
                        return _state[name]
                    } else if (!isObject && _state[name]) {
                        return _state[name]
                    } else {
                        return item.data
                    }
                }
            } else {
                getters[getName] = (_state) => {
                    return typeof _state[name] !== 'undefined' ? _state[name] : item.data
                }
            }
        }
    }
}

init()

export default new Vuex.Store({
    state, actions, getters, mutations
})
