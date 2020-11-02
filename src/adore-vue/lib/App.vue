<template>
    <div><h1>{{message}}</h1></div>
</template>

<script>
    define(['exports', 'Vue'], function (exports, Vue) {
        exports["default"] = {}
        return new Vue({
            template: template,
            data() {
                return {
                    message: "Hello"
                }
            }
        })
    });
</script>

<style scoped>

</style>