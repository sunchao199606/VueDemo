import Vue from 'vue'
import { router } from './router'
import App from './App'
import axios from 'axios'
import ElementUI from 'element-ui'
import '&/icons'

Vue.prototype.$http = axios.create({
    baseURL: 'http://stock.market.alicloudapi.com',
    timeout: 1000,
    headers: { "Content-Type": "application/json; charset=utf-8", "Authorization": "APPCODE bc956a7321354e20b9de18a0aabaffef" }
});

Vue.use(ElementUI);

var vm1 = new Vue({
    el: '#container1',
    router,
    render: h => h(App),
    // components: {
    //     login: login
    // }
});

