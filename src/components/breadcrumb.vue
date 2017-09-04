<template>
    <div class="breadcrumb">
        <span class="breadcrumb-now">&nbsp;&nbsp;&nbsp;当前位置 : &nbsp;</span>
        <el-breadcrumb separator=">>">
            <template v-for="path in paths">
                <el-breadcrumb-item> {{path.name}}</el-breadcrumb-item>
            </template>
        </el-breadcrumb>
    </div>
</template>

<style lang="css">
    .breadcrumb {
        border: 1px solid #eaeefb;
        border-radius: 4px;
        transition: 2s;
        width: 100%;
        background-color: #ffffff;
        padding: 12px 0 12px 0;
        box-sizing: border-box;
    }

    .breadcrumb-now {
        float: left;
        font-size: 13px;
        line-height: 1;
        margin-right: 10px;
        color: #48576a;
    }

    .el-breadcrumb__item__inner:hover {
        cursor: auto;
        color: #48576a;
    }
</style>

<script type="text/babel">
    export default {
        data() {
            return {
                mapName: {
                    "index": "首页",
                    "site": "站点",
                    "crawler": "计划"
                },
                paths: []
            };
        },

        created() {
            this.update();
        },

        methods: {
            update() {
                let href = window.location.href;
                let names = href.split("#")[1].split("/");
                let _this = this;
                _this.paths = [];
                for (let i = 1; i < names.length; i++) {
                    alert(_this.mapName[names[i]].split('?')[0]);
                    _this.paths.push({name: _this.mapName[names[i]].split('?')[0]});
                }
            }
        },
        watch: {
            '$route':function () {
               this.update();
            }
        }
    };
</script>
