<template>
    <div :class="{class}" :id="id">

    </div>
</template>

<script>
    export default {
        name: "Child",
        data() {
            return {
                id: "id"
            }
        },
        props: {
            class: {
                type: String,
                required: true
            }
        }
    }
</script>

<style scoped>

</style>