<template>
    <div style="width: 90% ; margin: auto">
        <div class="banner"></div>
        <div class="sky violet">我已募捐</div>
        <flexbox>
            <flexbox-item><div class="flex-demo">队伍</div></flexbox-item>
            <flexbox-item><div class="flex-demo">金额</div></flexbox-item>
            <flexbox-item><div class="flex-demo">时间</div></flexbox-item>
        </flexbox>
        <div class="hahahah">
            <scroller ref="scroller" lock-x height="280px" >
                <flexbox v-for="item in list" >
                    <flexbox-item ><div class="demo">{{item.name}}</div></flexbox-item>
                    <flexbox-item ><div class="demo">{{item.money}}</div></flexbox-item>
                    <flexbox-item ><div class="demo" >{{item.time}}</div></flexbox-item>
                </flexbox>
            </scroller>
        </div>

    </div>
</template>
<script>
    import {Scroller,Flexbox, FlexboxItem} from 'vux'
    export default {
        data() {
            return {
                money:'',
                picked:'',
                list: [
                    {name: 'haha', money: '100', time: '2017'},
                    {name: 'haha', money: '100', time: '2017'},
                    {name: 'haha', money: '100', time: '2017'},
                    {name: 'haha', money: '100', time: '2017'}
                ]
            }
        },
        components: {
            Scroller,Flexbox, FlexboxItem
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
<style>
    .sky {
        margin: 0 auto;
        text-align: center;
        color: #fff;
        font-size: 16px;
        margin-bottom: 10px;
        padding: 5px;
    }
    .flex-demo, .demo {
        text-align: center;
        color: #704091;
        background-clip: padding-box;
        font-size: 16px;
        height: 30px;
        line-height: 30px;
    }

    .flex-demo {
        background-color: rgba(112, 64, 145, 0.57);
    }
    .demo {
        background-color:rgba(0, 0, 0, 0.08);
    }
</style>
