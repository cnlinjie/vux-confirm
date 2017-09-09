import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './vuex/index'
import { sync } from 'vuex-router-sync'
import Axios from 'axios'
import ajax from './assets/js/ajax'
import 'url-search-params-polyfill';
import './assets/css/common.css'
import './assets/js/vendor'

import  { ConfirmPlugin } from 'vux'
Vue.use(ConfirmPlugin)


Vue.config.productionTip = true;
Vue.prototype.$fontSize = () => {
    /* 设置html字体根大小 */
    let docEl = document.documentElement;
    let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    let recalc = function () {
        if (docEl.clientWidth > 640) {
            docEl.style.fontSize = 12 * (640 / 180) + 'px'
        } else {
            docEl.style.fontSize = 12 * (docEl.clientWidth / 180) + 'px'
        }
    };
    window.addEventListener(resizeEvt, recalc, false);
    document.addEventListener('DOMContentLoaded', recalc, false)
};

Vue.prototype.$fontSize();
sync(store, router);

// 0. 如果使用模块化机制编程，導入Vue和VueRouter，要调用 Vue.use(VueRouter)

// 1. 定义（路由）组件。
// 可以从其他文件 import 进来

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
// const routes = [
//     {path: '/foo', component: MainHeader},
//     {path: '/bar', component: MainFooter}
// ];
// es6Promise.polyfill();
// Axios.defaults.baseURL = '/api';

const FastClick = require('fastclick')
FastClick.attach(document.body)

// let getViewportSize = () => {
//     return {
//         width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
//         height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
//     };
// }
// let wh = getViewportSize();
// Vue.prototype.wh = wh;
// Vue.prototype.contentHeight = wh.height - 53;
Axios.defaults.baseURL = '/wx'
// Axios.defaults.baseURL = 'http://192.168.31.70:8080/wx'
Vue.prototype.$axios = Axios
Vue.prototype.ajax = ajax

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app');
