import Router from 'vue-router'
import Vue from 'vue'
import login from '&/vue/login'
import logout from '&/vue/logout'
import table from '&/vue/table/table'
Vue.use(Router);

const routes = [
    { path: '/login', component: login, name: 'login' },
    { path: '/logout', component: logout, name: 'logout' },
    { path: '/table', component: table, name: 'table' }
];

export const router = new Router({ routes });