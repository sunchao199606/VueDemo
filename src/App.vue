<template>
    <div>
        <h1>App</h1>
        <router-link to="/login">登录</router-link>
        <router-link to="/logout">登出</router-link>
        <router-link to="/stock">stock</router-link>
        <router-link to="/c">redirect</router-link>
        <router-link to="/sidebar">侧边栏</router-link>
        <router-link to="/testComputed">测试计算属性</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        computed: {
            key() {
                return this.$route.path
            }
        }
    };
</script>

<style>
</style>


