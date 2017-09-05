<template>
    <div>
        <div class="banner"></div>
        <div class="sky rose">【一路·纯悦2017(厦门)公益徒步】简介</div>
        <div>
            <scroller ref="scroller" lock-x height="420px">
                <div class="skycontent">
                    【一路•纯悦2017（厦门）公益徒步】是由福建省青少年发展基金会、厦门太古可口可乐饮料有限公司共同发起的一项公益和运动相结合的大型户外公益徒步活动。
                    活动采用组队同行的形式（<span class="vio">每队由4人组成</span>），以在规定时间内连续（不间断）共同行走的方式，要求队伍需依次抵达活动检查点，并完成规定路线的行走。同时，每支参与队伍还需要在限定时间内为福建省青少年发展基金会公益项目募捐到<span class="vio">不低于400元</span>的善款。活动筹得的善款均会被使用在福建省青少年基金会与厦门太古可口可乐饮料有限公司携手在福建省开展的【净水计划】慈善项目当中，为福建山区学校安装校园直饮净水设备，保证儿童在校期间能喝到干净、安全和足量的直饮水。
                    本次公益徒步活动设有<span class="vio">健行组和亲子组</span>两种类别，亲子组要求每组<span class="vio">至少</span>有一名年龄在<span class="vio">4-18周岁</span>的小孩以及一名年龄在<span class="vio">18-65</span>周岁的成人参加,共同完成<span class="vio">5公里</span>行走；健行组则要求参与者年龄均需在18-65周岁期间，一起走过<span class="vio">20公里</span>路程。
                    4人同行，挑战规定线路；走过厦门最优美的杏林湾区，为福建山区的孩子筹集爱心善款，让他们喝上干净的直饮水。
                    【一路•纯悦2017（厦门）公益徒步】活动，期待您的加入！
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
        text-indent:2em;
        margin-bottom: 10px;
    }
</style>
