<template>
    <button>{{name}}</button>
</template>
<script>
    define(["Vue"], function (Vue) {
        class Button {
            setName(name){
                this.vm.name = name;
            }
            constructor(parentId, name) {
                this.vm = new Vue({
                    template: template,
                    data() {
                        return {
                            name: name
                        }
                    }
                })
                this.vm.$mount("#" + parentId)
            }
        }

        return Button
    })
</script>
<style scoped>

</style>