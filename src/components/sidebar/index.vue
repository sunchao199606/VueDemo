<template>
    <el-aside>
        <el-menu>
            <side-bar-items :items="routes"></side-bar-items>
        </el-menu>
    </el-aside>
</template>

<script>
    import SideBarItems from "&/components/sidebar/SideBarItems"

    export default {
        name: "SideBar",
        components: {SideBarItems},
        data() {
            return {}
        }
    }
</script>

<style scoped>

</style>