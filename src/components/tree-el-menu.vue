<style>
</style>
<template>
    <div>
        <el-menu v-if="level == 0" :router="true" default-active="1" class="el-menu-vertical-demo" theme="dark"
                 :unique-opened="true">
            <tree-el-menu :menus="menus" level="1"></tree-el-menu>
        </el-menu>

        <template v-if="level != 0" v-for="m in menus">
            <el-menu-item v-if="!m.menus" :index="m.path"><i class="el-icon-message"></i>{{m.name}}</el-menu-item>
            <template v-else>
                <el-submenu :index="m.name">
                    <template slot="title">{{m.name}}</template>
                    <tree-el-menu :menus="m.menus" level="1"></tree-el-menu>
                </el-submenu>
            </template>
        </template>


    </div>
</template>
<script>

    export default {
        name: 'tree-el-menu',
        props: {
            menus: {},
            level: {
                default: 0
            }
        }
    };


</script>
