<style>
</style>
<template>
    <div>

            <tree-el-menu :menus="menus"></tree-el-menu>

    </div>
</template>
<script>

    import treeElMenu from  './tree-el-menu.vue'

    export default {

        data() {
            return {
                menus : [
                    {id:1, name:"首页", path:'/index'},
                    {id:2,name:"计划", path:'/crawler'},
                    {id:3,name:"站点2", path:'/site'},
                    {
                        id:4,
                        name:"选项4",
                        menus : [
                            {id:5,name:"首页", path:'/index'},
                            {id:6,name:"计划", path:'/crawler'},
                            {id:7,name:"站点2", path:'/site'},
                            {
                                name:"选项5",
                                id:8,
                                menus : [
                                    {id:9,name:"首页", path:'/index'},
                                    {id:10,name:"计划", path:'/crawler'},
                                    {id:11,name:"站点2", path:'/site'},
                                    {
                                        name:"选项5",
                                        id:12,
                                        menus : [
                                            {id:13,name:"首页", path:'/index'},
                                            {id:14,name:"计划", path:'/crawler'},
                                            {id:15,name:"站点2", path:'/site'}
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            };
        },
        components: {
            treeElMenu
        }

    };


</script>
