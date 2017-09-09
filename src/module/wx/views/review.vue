<template>
    <div>
        <div class="banner"></div>
        <div class="sky blue">2014-2016年公益回顾</div>
        <div style="background-color: rgba(255,255,255,0.6); padding-bottom:  20px; padding-top: 15px; margin-top: 15px;">

            <div style="width: 90%; margin: 20px;">
                <img src="../assets/images/2014.png" style="width: 100%;"/>
            </div>
            <div style="width: 90%; margin: 20px;">
                <img src="../assets/images/2015.png" style="width: 100%;"/>
            </div>
            <div style="width: 90%; margin: 20px;">
                <img src="../assets/images/2016.png" style="width: 100%;"/>
            </div>

        </div>
    </div>
</template>
<script>
    import { Scroller } from 'vux'

    import VueDPlayer from 'src/components/VueDPlayer.vue'

    export default {
        data() {
            return {
                video: {
                    url: 'http://video-test.qring.cc/12.mp4',
                    pic: '/files/default/video.jpg'
                },
            }
        },
        components: {
            Scroller,
            'd-player': VueDPlayer
        },
        methods: {
            resetScroller() {
                this.$nextTick(() => {
                    this.$refs.scroller.reset();
                })
            }
        },
        mounted() {
            setTimeout(()=> {
                this.resetScroller();
            },1000)
        }
    }


</script>
<style scoped>
    .sky {
        width: 90%;
        margin: 0 auto;
        text-align: center;
        color: #fff;
        font-size: 18px;
        padding: 5px;
    }
    .skycontent{
        width: 90%;
        margin: 0 auto;
        font-size: 14px;
        line-height: 30px;
        margin-bottom: 10px;
    }
</style>
