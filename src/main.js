import Vue from 'vue'
import { router } from './router'
import App from './App'

let vm1 = new Vue({
    el: '#container1',
    router,
    render: h => h(App),
    // components: {
    //     login: login
    // }
});

