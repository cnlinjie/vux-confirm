<template>
    <div>
        <swiper :list="demo01_list" v-model="demo02_index" @on-index-change="demo01_onIndexChange" :auto="true" style="height: 100px;" ></swiper>
        <div class="log">
            <div class="img"></div>
        </div>
        <div class="run">
            <div  class="run-box">
                <router-link :to="teamUrl"  class="run-a rose">
                    <i class="run-i" >我的队伍</i>
                </router-link>
            </div>
            <div  class="run-box">
                <router-link to="donation" class="run-a violet">
                    <i class="run-i" >我要捐款</i>
                </router-link>
            </div>
            <div  class="run-box">
                <router-link to="love"  class="run-a blue">
                    <i class="run-i" >爱心榜单</i>
                </router-link>
            </div>
            <div  class="run-box">
                <router-link to="project"  class="run-a orange">
                    <i class="run-i" >项目介绍</i>
                </router-link>
            </div>

        </div>
        <div class="count">
            <div class="count-q">报名：</div><div class="count-q">哈哈哈：</div>
            <div class="count-q">哈哈哈：</div><div class="count-q">哈哈哈：</div>
        </div>
        <div>
            <ul class="textContent" ref="noticeBox" >
                <li ref="noticeLi">
                    <a class="notice-a" ref="noticeA" :style="naStyle">厦门太古可口可乐有限公司</a>
                </li>
            </ul>
        </div>

    </div>
</template>

<script >
    import { Swiper,MarqueeItem,Marquee} from 'vux'
    import {isNull} from '../assets/js/verification'
    import { mapActions, mapGetters } from "vuex"
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
    export default {
        components: {
            Swiper,MarqueeItem, Marquee
        },
        data () {
            return {
                demo01_list: baseList,
                asyncCount: 0,
                speed: 1,
                tx: 0,
                ts: 40,
                ots: 40
            }
        },

        computed: {
            teamUrl() {
                if (isNull(this.user)  ||  isNull(this.user.teamId)) {
                    return '/createteam';
                } else {
                    return '/teanmoney';
                }

            },
            naStyle () {
                let str = `translateX(${-this.tx}px)`;
                let obj = {
                    msTransform: str,
                    webkitTransform: str,
                    transform: str,
                    willChange: 'transform'
                };
                if (this.ts !== 0) {
                    obj.transition = `transform ${this.ts}ms linear`
                }
                return obj
            },
            ...mapGetters(['user'])
        },
        methods: {
            demo01_onIndexChange (index) {
                this.demo01_index = index
            },
            noticeAnimate () {
                const time = 3000;
                let noticeList = this.$refs.noticeLi;
                let height = noticeList[0].offsetHeight;
                let halfHeight = (this.noticeList.length * height) / 2;
                this.timer = setTimeout(() => {
                    animateCss()
                }, time);
                let animateCss = () => {
                    if (-halfHeight > this.$refs.noticeBox.offsetTop) {
                        this.$refs.noticeBox.style.top = 0
                    } else {
                        this.$refs.noticeBox.style.top = this.$refs.noticeBox.offsetTop - height + 'px'
                    }
                    clearTimeout(this.timer);
                    this.timer = setTimeout(() => {
                        animateCss()
                    }, time)
                }
            },
            marquee () {
                let parent = this.$refs.noticeLi;
                let child = this.$refs.noticeA;
                let pw = parent.offsetWidth;
                let cw = child.offsetWidth;
                let tx = this.tx;
                if (tx < cw) {
                    this.tx += this.speed
                } else if (tx < cw + this.speed) {
                    this.tx += this.speed;
                    this.ts = 0
                } else {
                    this.tx = -pw - this.speed;
                    setTimeout(() => {
                        if (this.ots) {
                            this.ts = this.ots
                        }
                    }, this.ots)
                }
            }
        },
        mounted() {
            this.mqSi = setInterval(() => {
                this.marquee()
            }, this.ts);
        },
        destroyed () {
            clearTimeout(this.timer);
            clearInterval(this.mqSi)
        }
    }
</script>

<style scoped>
    .home{
        /*background:url('../assets/images/index.jpg') no-repeat center/cover;*/
        /*width: 100vw;*/
        /*height: 100vh;*/
        /*background-position: center center;*/
        /*background-size:  cover;*/
        /*background-repeat: no-repeat;*/
        /*position:absolute;*/
        /*filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='../../../assets/imgs/index.jpg',sizingMethod='scale');*/
    }

    .log {
        margin-top: 10px;
        width: 100% ;
        height:100px;
        overflow:hidden;
    }
    .log .img{
        width: 54%;
        margin: 0 auto;
        height: 100%;
        background:url('../assets/images/banner.png') no-repeat center/100%;
    }
     .textContent{
        left: 60px;
        top: 0;
        width: 100%;
        transition: top 0.5s;
        font-size: 0;
    }
    .textContent li{
        overflow: hidden;
        height: 30px;
        line-height: 30px;
        position: absolute;
        bottom: 0px;
        width: 100%;
        background-color: rgba(255, 255, 255, 0.48);
    }
   .textContent li a{
        display: inline-block;
        font-size: 12px;
    }
    .run {
        width: 60%;
        position: absolute;
        left: 20%;
        top: 260px;
    }
    .run-box{
        width: 50% ;
        float: left;
        text-align: center;
        margin-bottom: 10px;
    }
    .run-a{
        border-radius: 50%;
        width: 80px;
        height: 80px;
        font-size: 17px;
        line-height: 26px;
        text-align: center;
        display: inline-block;
    }
    .run-i{
        padding: 15px;
        width: 59px;
        display: inline-block;
        letter-spacing: 9px;
        color: #fff;
        font-style:normal
    }
    .count {
        width: 80%;
        height:50px;
        position: absolute;
        left: 10%;
        bottom: 60px;
        background-color: rgba(255, 255, 255, 0.33);

    }
    .count-q{
        width: 40% ;
        float: left;
        text-align: left;
        padding-left: 20px;
        line-height: 25px;
        text-align: center;
        font-size: 15px;
    }

</style>
