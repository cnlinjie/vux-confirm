<template>
    <div>
        <div class="banner"></div>
        <div class="sky">免责声明</div>
        <div>
            <scroller ref="scroller" lock-x height="370px">
                <div class="skycontent">
                   <span style="text-align: center;display: block;font-size: 18px;">安全须知</span>
                    <br/>【一路纯悦•2017（厦门)公益徒步活动】安全声明
                    <br/> 亲爱的【一路纯悦•2017（厦门）公益徒步】参与队员们：
                    <br/><span style="text-indent:2em;display: inline-block;">感谢您参加【一路纯悦•2017（厦门）公益徒步】活动，因为【一路纯悦•2017（厦门）公益徒步】是一项需要自我挑战、坚持努力才能完成的户外公益<span class="red">类徒步</span>活动，20KM长距离徒步对您存在一定的安全风险，请您务必认真阅读并确认以下几点<span class="red">要求</span>：
                    </span><br/> 一、参与者声明及保证
                    <br/>1、本人确认是自愿参加【一路纯悦•2017（厦门）公益徒步】活动，并且愿意承担自身<span class="red">造成的</span>的风险和责任。
                    <br/>2、本人承诺不转让参与名额，如<span class="red">私自</span>转让名额造成的一切后果由本人自行负责。
                    <br/>3、本人承诺在此次活动路线上做到不抽烟、不点明火、不嬉戏，<span class="red">不闹事并且服从现场工作人员的指引</span>，注意交通安全，如因本人不遵守规则所造成的一切后果均由本人自行负责。
                    <br/> 4、本人承诺在活动过程中遵守组委会的安排，凡因个人私自行动或隐瞒个人实际情况（病史、身体状况及其他状况）而造成的一切后果，由其本人承担完全责任。
                    <br/> 二、对身体状态的声明及保证
                    本人确认自己身体健康，无心脏病、高血压、<span class="red">低血糖</span>、心肌炎、糖尿病和严重心律不齐等不适合长距离徒步的疾病或家族病史，并保证在参加此次活动前有在医院或其他<span class="red">医疗</span>机构进行健康体检，确保身体条件符合参与<span class="red">此次活动的标准</span>。
                    <br/> 三、对个人信息的声明及保证
                    本人<span class="red">确保</span>在【一路纯悦•2017（厦门）公益徒步】活动报名网站提交的个人信息的准确性，若因信息不准确导致保险无法生效，组委会无须承担相应的责任，须本人自行承担全部后果。
                    <br/> 四、对授权使用音像制品的声明和保证
                    本人同意组委会有权使用本队伍或<span class="red">本组</span>队员参与【一路纯悦•2017（厦门）公益徒步】活动的影像资料，包括照片、录像和影像，这些信息和材料使用无需向本人进行提前通知，或提供任何的报酬。
                    <br/>五、对筹款的声明和保证
                    <br/> 1、本人与队友承诺，凡是通过【一路纯悦•2017（厦门）公益徒步】活动直接或间接筹集的善款，都将悉数捐赠给福建省青少年发展基金会。
                    <br/>2、【一路纯悦•2017（厦门）公益徒步】是一项公益筹款活动，本人报名的队伍一定按照组委会要求，在活动筹款截止日之前完成至少400元的筹款，否则，组委会有权拒绝<span class="red">甚至</span>取消本人及<span class="red">所在组成</span>员今后参加【一路纯悦•厦门公益徒步】<span class="red">的相关</span>活动。
                    <br/>感谢爱心奉献，祝您与您的队友们能够顺利完成你们共同设立的目标！
                    <br/> 【一路纯悦•2017（厦门）公益徒步】活动组委会
                    <br/>福建省青少年发展基金会
                </div>
            </scroller>
        </div>
        <div class="for">
        <input type="radio" id="two"value="true"  v-model="picked">
        <label for="two"  class="red">我已阅读并同意以上声明</label>
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
        font-size: 14px;
        text-align: center;
        margin: 5px;
    }
    .violet{
        background-color: #704091;
    }
</style>
