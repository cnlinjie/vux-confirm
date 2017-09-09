<template>
    <div>
        <div class="banner"></div>
        <div class="sky rose">【一路·纯悦2017(厦门)公益徒步】简介</div>
        <div>
            <scroller ref="scroller" lock-x height="-230">
                <div class="skycontent">
                    <p style="text-align:left">
                        <span style="font-size: 16px;font-family:微软雅黑">【一路·纯悦2017（厦门）公益徒步】是由福建省青少年发展基金会、厦门太古可口可乐饮料有限公司共同发起的一项公益和运动相结合的大型户外公益徒步活动。活动从2014年开展至今，已成功举办三年，共吸引17700位社会爱心人士及外国友人参与，筹集爱心善款219万余元，共为附件地区87所山区小学安装143台净水设备，让25000名孩子喝上干净的直饮水。</span>
                    </p>
                    <p style="text-align:left">
                        <span style="font-size:14px;font-family:微软雅黑">&nbsp;</span>
                    </p>
                    <p style="text-align:left">
                        <span style="font-size: 16px;font-family:微软雅黑">本次公益徒步活动设有悦动健行组和纯真亲子组两种类别；活动采用组队同行的形式（<strong><span style="color:#7030A0">健行组需由4位年龄均在18-65周岁的成人组成，一起走过20公里路程；<span style="background:yellow;background:yellow">亲子组可允许3或4人成队</span>，且要求至少有一位年龄在4-18岁的成员及一位年龄在18-65周岁的成人，共同完成6公里行走</span></strong>），以在规定时间内连续（不间断）共同行走的方式，要求队伍需依次抵达活动检查点，并完成规定路线的行走。同时，每支参与队伍还需要在限定时间内为福建省青少年发展基金会公益项目募捐到<strong><span style="color:#7030A0">不低于400元</span></strong>的善款。活动</span><span style="font-size:16px;font-family:微软雅黑">筹得的善款均会被使用在福建省青少年基金会与厦门太古可口可乐饮料有限公司携手在福建省开展的【净水计划】</span><span style="font-size:16px;font-family:微软雅黑">慈善项目</span><span style="font-size:16px;font-family:微软雅黑">当中，</span><span style="font-size: 16px;font-family:微软雅黑;">为福建山区学校安装校园直饮净水设备，保证儿童在校期间能喝到干净、安全和足量的直饮水。</span>
                    </p>
                    <p style="text-align:left">
                        <span style="font-size: 16px;font-family:微软雅黑">组队同行，挑战规定线路；走过厦门最优美的杏林湾区，为福建山区的孩子筹集爱心善款，让他们喝上干净的直饮水。</span>
                    </p>
                    <p style="text-align:left">
                        <span style="font-size: 16px;font-family:微软雅黑">【一路·纯悦2017（厦门）公益徒步】</span><span style="font-size:16px;font-family:微软雅黑">活动，期待您的加入！</span>
                    </p>
                    <p>
                        <br/>
                    </p>
                </div>
            </scroller>
        </div>
    </div>
</template>
<script >

    import {Scroller} from 'vux'

    export default {
        data() {
            return {
                picked: ''
            }
        },
        components: {
            Scroller
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
        background-color: #dd2563;
        font-size: 18px;
        margin-bottom: 10px;
        padding: 5px;
    }
    .skycontent{
        width: 90%;
        margin: 0 auto;
        font-size: 14px;

        margin-bottom: 10px;
    }
    .skycontent p {
        text-indent:2em;
        line-height: 30px;
    }
</style>
