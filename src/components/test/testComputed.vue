<template>
    <div>
        <h5>string:{{message}}</h5>
        <h5>计算属性string length：{{messageLength1}}</h5>
        <h5>方法属性string length：{{messageLength2()}}</h5>
        <h5>再次调用计算属性string length：{{messageLength1}}</h5>
        <h5>再次调用方法属性string length：{{messageLength2()}}</h5>
    </div>
</template>

<script>
    export default {
        name: "testComputed",
        data() {
            return {
                message: "init Message"
            }
        },
        computed: {
            messageLength1() {
                console.log("call messageLength1")
                return this.message.length
            }
        },
        methods: {
            messageLength2() {
                console.log("call messageLength2")
                return this.message.length
            }
        }
    }
</script>

<style scoped>

</style>