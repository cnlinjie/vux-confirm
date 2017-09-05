<template>
    <div>
        <div class="banner"></div>
        <div class="sky blue">2014-2016年公益回顾</div>
        <div>
            <scroller ref="scroller" lock-x height="400px">
                <div class="skycontent">
                        <span style="text-indent:2em;display: inline-block;">2014年冰露•纯悦公益健行活动</span>
                    <span style="text-indent:2em;display: inline-block;">2014年11月29日，来自全国各地的1496名参赛者齐聚厦门，参与冰露•纯悦公益健行活动，共同健行32公里，并且在三个月内为壹基金及可口可乐中国“净水计划”筹集逾40万元爱心善款。这些善款与2014年“净水计划”所筹集的其他善款一起，于2015年覆盖在西南地区三个县的净水计划实施上，该方案共计安装87台净水设备，平均每所学校按300人计算，累计帮助26100名学生喝上干净的饮用水。
                    </span>
                    <br/>
                    <span style="text-indent:2em;display: inline-block;">2015年冰露•纯悦公益健行活动</span>
                        <br/><span style="text-indent:2em;display: inline-block;">在2014年的经验及基础上，2015年11月28日，冰露•纯悦[爱同行]大型公益徒步活动共吸引了来自全国各地及些许国外友人的参与，累计5200名参赛者共同完成了30公里长距离的公益徒步；数以万计的爱心捐款者累计筹集79万余元的善款。这些善款于2016年上半年在龙岩、三明等受自然灾害、地理因素及环境污染原因的地区投放净水设备，以帮助孩子喝上干净的饮用水；该善款累计帮助福建地区36所学校安装61台净水器，帮助近8000名山区孩子喝上干净的直饮水。
                </span>
                    <span style="text-indent:2em;display: inline-block;"> 2016年冰露•纯悦公益健行活动</span>
                    <span style="text-indent:2em;display: inline-block;">结合2014、2015两年的成功经验，【一路∙纯悦 2016（厦门）公益徒步】活动首次将规模设置在万人之上，吸引了更多来自全国各地的参与者，其中不乏外国友人的身影；累计11000名参赛者共同完成了26公里长距离的公益徒步；数以万计的爱心捐款者累计筹集100万元的善款。这些善款于2017年下半年在漳州、三明等受灾严重的地区投放净水设备，以帮助孩子喝上干净的饮用水；该善款累计帮助福建地区51所学校安装82台净水器，帮助近16000名山区孩子喝上干净的直饮水。</span>
                </div>
            </scroller>
        </div>
    </div>
</template>
<script>
    import { Scroller } from 'vux'
    export default {
        data() {
            return {
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
        font-size: 18px;
        padding: 5px;
    }
    .skycontent{
        width: 90%;
        margin: 0 auto;
        font-size: 14px;

        margin-bottom: 10px;
    }
</style>
