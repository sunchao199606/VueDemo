<template>
    <div>
        <el-container>
            <el-header>
                <slot name="A"></slot>
            </el-header>
            <el-aside></el-aside>
        </el-container>

        <slot name="B"></slot>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "SlotDemo"
    }
</script>

<style scoped>

</style>