<template>
    <div>
        <div class="banner"></div>
        <div class="sky blue">{{now}}年公益回顾</div>
        <div style="background-color: rgba(255,255,255,0.6); padding-bottom:  20px; padding-top: 15px; margin-top: 15px;">

            <scroller ref="scroller" lock-x  height="-230">
                <div class="skycontent">

                    <div v-if="now === '2014'">
                        <p style="text-align:left">
                            <span style="font-size: 16px;font-family:微软雅黑">一、2014年冰露·纯悦公益健行活动</span>
                        </p>

                        <p style="text-align:left">
                            <span style="font-size:16px;font-family:微软雅黑">2014</span><span style="font-size:16px;font-family:微软雅黑">年11月29日，来自全国各地的1496名参赛者齐聚厦门，共同健行32公里，并且在三个月内筹集逾40万元爱心善款。这些善款于2015年覆盖在西南地区三个县，共计安装87台净水设备，累计帮助26100名学生喝上干净的饮用水。</span>
                        </p>

                        <br/>
                        <p style="text-align:left;text-indent:32px">
                            <d-player :video="video2014"
                                      :autoplay="autoplay"
                                      @play="play"
                                      ref="player">
                            </d-player>

                        </p>
                        <br/>

                        <p style="text-align:left;text-indent:32px">
                            <span style="font-size:16px;font-family: 微软雅黑">&nbsp;</span>
                        </p>
                    </div>

                    <div v-if="now === '2015'">
                        <p style="text-align:left">
                            <span style="font-size: 16px;font-family:微软雅黑">二、2015年冰露·纯悦公益健行活动</span>
                        </p>
                        <p style="text-align:left">
                            <span style="font-size:16px;font-family:微软雅黑">2015</span><span style="font-size:16px;font-family:微软雅黑">年11月28日，冰露·纯悦[爱同行]大型公益徒步活动共吸引了5200名参赛者共同完成了30公里长距离的公益徒步，累计筹集79万余元的善款。这些善款于2016年上半年在龙岩、三明等地区36所学校安装61台净水器，帮助近8000名山区孩子喝上干净的直饮水。</span>
                        </p>
                        <br/>
                        <p style="text-align:left;text-indent:32px">
                            <d-player :video="video2014"
                                      :autoplay="autoplay"
                                      @play="play"
                                      ref="player">
                            </d-player>

                        </p>
                        <br/>

                    </div>

                    <div v-if="now === '2016'">
                        <p style="text-align:left">
                            <span style="font-size: 16px;font-family:微软雅黑">三、2016年冰露·纯悦公益健行活动</span>
                        </p>
                        <p style="text-align:left">
                            <span style="font-size:16px;font-family:微软雅黑">2016</span><span style="font-size:16px;font-family:微软雅黑">年11月26日，【一路∙纯悦 2016（厦门）公益徒步】共吸引11000名参赛者共同完成了26公里长距离的公益徒步；累计筹集100万元的善款。该善款于2017年下半年在漳州、三明等地区51所学校安装82台净水器，帮助近16000名山区孩子喝上干净的直饮水。</span>
                        </p>
                        <br/>
                        <p style="text-align:left;text-indent:32px">
                            <d-player :video="video2014"
                                      :autoplay="autoplay"
                                      @play="play"
                                      ref="player">
                            </d-player>

                        </p>
                        <br/>
                    </div>
                </div>
            </scroller>
        </div>
    </div>
</template>
<script>
    import { Scroller } from 'vux'

    import VueDPlayer from 'src/components/VueDPlayer.vue'

    export default {
        data() {
            return {
                now:'2014',
                video2014: {
                    url: 'http://video-test.qring.cc/12.mp4',
                    pic: '/files/default/video.jpg'
                },
                video2015: {
                    url: 'http://video-test.qring.cc/12.mp4',
                    pic: '/files/default/video.jpg'
                },
                video2016: {
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
            this.now = QueryString('now');
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
