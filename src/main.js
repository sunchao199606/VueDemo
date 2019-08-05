import Vue from 'vue'

import login from './vue/login'
// 声明
// let login = {
//     template: '<h2>嗒嗒滴答滴<h2>'
// }
let vm = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue'
    },
    components: {
        login: login
    }
});