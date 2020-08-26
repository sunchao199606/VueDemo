import Router from 'vue-router'
import Vue from 'vue'
import login from '&/components/login'
import logout from '&/components/logout'
import stock from '&/components/stock'

Vue.use(Router);

const routes = [
    {path: '/login', component: login, name: 'login'},
    {path: '/logout', component: logout, name: 'logout'},
    {path: '/stock', component: stock, name: 'stock'},
    {
        path: '/a', component: stock, name: 'testRedirect', redirect: '/b'
    }
];

export const router = new Router({routes});
