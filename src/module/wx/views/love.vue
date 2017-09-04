<template>
    <div>
        <div class="banner"></div>
        <swiper :list="demo01_list" v-model="demo02_index" @on-index-change="demo01_onIndexChange" :auto="true" style="height: 100px; width: 95%;
    margin: 0 auto;"></swiper>
            <div class=""></div>
        <router-link to="/team" class="buttom">查看榜单</router-link>
    </div>
</template>
<script>
    const baseList = [{
        url: 'javascript:',
        img: 'https://static.vux.li/demo/1.jpg',
        title: '送你一朵fua'
    }, {
        url: 'javascript:',
        img: 'https://static.vux.li/demo/2.jpg',
        title: '送你一辆车'
    }, {
        url: 'javascript:',
        img: 'https://static.vux.li/demo/3.jpg',
        title: '送你一次旅行'
    }];
    const urlList = baseList.map((item, index) => ({
        url: 'http://m.baidu.com',
        img: item.img,
        title: `(可点击)${item.title}`
    }));
    import {Swiper} from 'vux'

    export default {
        data() {
            return {
                demo01_list: baseList,
                asyncCount: 0,
            }
        },
        components: {
            Swiper
        },
        methods: {
            demo01_onIndexChange(index) {
                this.demo01_index = index
            }
        },
        mounted() {
        }
    }


</script>
<style scoped>
    .buttom{
        width: 50%;
        background-color:#704091;
        color: #fff;
        font-size: 14px;
        border-radius: 5px;
        text-align: center;
        bottom: 10px;
        padding: 5px;
        left: 25%;
        display: block;
        position: absolute;
    }
</style>

