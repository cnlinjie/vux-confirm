<template>
    <el-carousel :interval="5000"   :indicator-position="outside"  arrow="always">
        <el-carousel-item   v-for="item in 4" :key="item">
            <h3>{{ item }}</h3>
        </el-carousel-item>
    </el-carousel>
</template>
<script type="text/babel">
    export default {
        data() {
            return {

            };
        },

    };
</script>
