<template>
    <div>
        <div v-for="(item, aa) in items" :key="aa">
            <el-submenu index="item.path" v-if="hasChildren(item)">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">{{item.meta.title}}</span>
                </template>
                <side-bar-items :items="item.children"></side-bar-items>
            </el-submenu>
            <el-menu-item index="item.path" v-else>{{item.meta.title}}</el-menu-item>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SideBarItems",
        props: ["items"],
        methods: {
            hasChildren(route) {
                return route.children && route.children.length > 0
            }
        }
    }
</script>

<style scoped>

</style>