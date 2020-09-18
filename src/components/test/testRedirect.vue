<template>
    <div>
        <h1>Redirect</h1>
    </div>
</template>

<script>
    export default {
        name: "testRedirect",
        data() {
            console.log("aaaaaa");
            console.log(this.$route);
            console.log(this.$router);
            return {}
        }
    }
</script>

<style scoped>

</style>