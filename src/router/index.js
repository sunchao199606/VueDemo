import Router from 'vue-router'
import Vue from 'vue'
import login from '&/components/login'
import logout from '&/components/logout'
import stock from '&/components/stock'
import testRedirect from "&/components/test/testRedirect";
import sidebar from "&/components/sidebar"
import testComputed from "&/components/test/testComputed";

Vue.use(Router);

const routes = [
    {path: '/login', component: login, name: 'login'},
    {path: '/logout', component: logout, name: 'logout'},
    {path: '/stock', component: stock, name: 'stock'},
    {path: '/redirect', component: testRedirect, name: 'testRedirect'},
    {path: '/c', component: login, redirect: '/redirect'},
    {path: "/sidebar", component: sidebar},
    {path: "/testComputed", name: "testComputed", component: testComputed}
];

export const router = new Router({routes});
