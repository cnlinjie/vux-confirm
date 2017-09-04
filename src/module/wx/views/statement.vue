<template>
    <div>
        <div class="banner"></div>
        <div class="sky">免责声明</div>
        <div>
            <scroller ref="scroller" lock-x height="280px">
                <div class="skycontent">
                    中共中央政治局8月31日召开会议，
                    研究中国共产党第十八届中央委员会第七次全体会议和中国共产党第十九次全国代表大会筹备工作。
                    中共中央总书记习近平主持会议。 <br/>
                    会议决定，中国共产党第十八届中央委员会第七次全体会议于2017年10月11日在北京召开。
                    中共中央政治局将向党的十八届七中全会建议<br/>
                    会议决定，中国共产党第十八届中央委员会第七次全体会议于2017年10月11日在北京召开。
                    中共中央政治局将向党的十八届七中全会建议<br/>
                    会议决定，中国共产党第十八届中央委员会第七次全体会议于2017年10月11日在北京召开。
                    中共中央政治局将向党的十八届七中全会建议<br/>
                    会议决定，中国共产党第十八届中央委员会第七次全体会议于2017年10月11日在北京召开。
                    中共中央政治局将向党的十八届七中全会建议<br/>
                    会议决定，中国共产党第十八届中央委员会第七次全体会议于2017年10月11日在北京召开。
                    中共中央政治局将向党的十八届七中全会建议
                </div>
            </scroller>
        </div>
        <div class="for">
        <input type="radio" id="two"value="true"  v-model="picked">
        <label for="two" >我已阅读并同意以上声明</label>
        </div>
            <div  :class="picked==='true' ? 'buttom violet':'buttom'" >下一步</div>
    </div>
</template>
<script>

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
    .buttom{
        width: 50%;
        margin: 0 auto;
        background-color: #ccc;
        color: #fff;
        font-size: 18px;
        border-radius: 5px;
        text-align: center;
        margin-top: 10px;
        padding: 5px;
    }
    .for{
        color: #dd2563;
        font-size: 14px;
        text-align: center;
        margin: 5px;
    }
    .violet{
        background-color: #704091;
    }
</style>
