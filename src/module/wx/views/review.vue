<template>
    <div>
        <div class="banner"></div>
        <div class="sky blue">2014-2016年公益回顾</div>
        <div>
            <scroller ref="scroller" lock-x height="280px">
                <div class="skycontent">
                    <div>
                    </div>

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
        font-size: 14px;
        margin-bottom: 10px;
    }
</style>
