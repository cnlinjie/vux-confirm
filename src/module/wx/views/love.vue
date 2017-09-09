<template>
    <div>
        <div class="banner"></div>
        <swiper :list="demo01_list" v-model="demo02_index" @on-index-change="demo01_onIndexChange" :auto="true" style="height: 100px; width: 95%;
    margin: 0 auto;"></swiper>
        <div class="" style=" margin: 10px;">

            <d-player :video="video"
                      :autoplay="autoplay"
                      @play="play"
                      ref="player">
            </d-player>


        </div>
        <router-link to="/team" class="buttom">查看榜单</router-link>
    </div>
</template>
<script>
    const baseList = [{
        url: 'javascript:',
        img: '/files/default/video.jpg',
        title: '一路悦纯'
    },{
        url: 'javascript:',
        img: '/files/default/video2.png',
        title: '一路悦纯'
    },{
        url: 'javascript:',
        img: '/files/default/video3.png',
        title: '一路悦纯'
    },{
        url: 'javascript:',
        img: '/files/default/video4.png',
        title: '一路悦纯'
    }];
    const urlList = baseList.map((item, index) => ({
        url: 'http://m.baidu.com',
        img: item.img,
        title: `(可点击)${item.title}`
    }));
    import {Swiper} from 'vux'
    import VueDPlayer from 'src/components/VueDPlayer.vue'

    export default {
        data() {
            return {
                demo01_list: baseList,
                asyncCount: 0,
                video: {
                    url: 'http://video-test.qring.cc/12.mp4',
                    pic: '/files/default/video.jpg'
                },
            }
        },
        components: {
            Swiper,
            'd-player': VueDPlayer
        },
        methods: {
            play() {

            },
            demo01_onIndexChange(index) {
                this.demo01_index = index
            }
        },
        mounted() {
        }
    }


</script>
<style scoped>
    .buttom {
        width: 50%;
        background-color: #704091;
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

