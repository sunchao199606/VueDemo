import Vue from 'vue'
import { router } from './router'
import App from './App'

console.log(App);

var vm1 = new Vue({
    el: '#container1',
    router,
    render: h => h(App),
    // components: {
    //     login: login
    // }
});

console.log(vm1);

