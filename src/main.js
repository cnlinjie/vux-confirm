import Vue from 'vue'
import App from './App'

import  { ConfirmPlugin } from 'vux'
Vue.use(ConfirmPlugin)

new Vue({
    render: h => h(App)
}).$mount('#app');
