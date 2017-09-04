<template>
    <div class="ball" :class="typeCode" :style="transStyle">
        <i class="num" :class="`no_${item}`" v-for="item of ballArr">{{item}}</i>
    </div>
</template>

<script>
    export default {
        name: 'ball',
        props: {
            ball: {
                type: String,
                default: '01-02-03-04-05'
            },
            typeCode: {
                type: String,
                default: 'cqssc'
            },
            width: {
                type: String,
                default: '500'
            }
        },
        computed: {
            ballArr () {
                return this.ball.split('-');
            },
            transStyle () {
                let times = +this.width / 500 || 1;
                return {
                    margin: `-${(1 - times) * 100 / 2}px -${(1 - times) * 500 / 2}px`,
                    transform: `scale(${times})`
                };
            }
        }
    };
</script>

<style lang="stylus">
    .ball
    width: 500px
              height: 100px
                         font-size: 0
    text-align: center
    .num
    display: inline-block
    width: 66px
             height: 66px
                       margin-top: 17px
                                     font: 30px/66px 'Impact'
    text-align: center
    color: #eee
    background: #e93030
    border-radius: 50%
    & + .num
        margin-left: 10px
        &.bjpk10
                       .num
                       width: 45px
                                height: 44px
                                          margin-top: 28px
                                                        font: 24px/44px 'Microsoft Yahei'
    text-shadow: 2px 2px 2px #000
                          border-radius: 1px
                & + .num
                                          margin-left: 5px
                                                        .no_01, .no_1
    background: #dbd507
    .no_02, .no_2
    background: #01b7ff
    .no_03, .no_3
    background: #636862
    .no_04, .no_4
    background: #e4670d
    .no_05, .no_5
    background: #7bf8fc
    .no_06, .no_6
    background: #2600f7
    .no_07, .no_7
    background: #ceced6
    .no_08, .no_8
    background: #f80509
    .no_09, .no_9
    background: #690000
    .no_10
    background: #090
    &.bjkb
     .num
     width: 44px
              height: 42px
                        margin: 4px 3px
                                     font: 26px/42px 'Microsoft Yahei'
    border-radius: 3px
        &.xglhc
                    .num
                    position: relative
                    width: 60px
                             height: 72px
                                       padding: 3px
                                                 margin-top: 14px
                                                               font: 26px/1.2 ''
    background: #0d0
    border-radius: 3px
                    box-shadow: 0 0 3px #666
    &:nth-child(7)
     margin-left: 1em
                    &:before
                   content: '+'
    position: absolute
    left: -1em
            bottom: 0
    width: 1em
            height: 72px
                      line-height: 72px
                                     color: #000
    &:after
     content: '无'
    position: absolute
    left: 0
    bottom: 3px
             width: 100%
    .red_ball, .no_01, .no_02, .no_07, .no_08, .no_12, .no_13, .no_18, .no_19, .no_23, .no_24, .no_29, .no_30, .no_34, .no_35, .no_40, .no_45, .no_46
    background: #fa6200
    .green_ball, .no_05, .no_06, .no_11, .no_16, .no_17, .no_21, .no_22, .no_27, .no_28, .no_32, .no_33, .no_38, .no_39, .no_43, .no_44, .no_49
    background: #2cdd00
    .blue_ball, .no_03, .no_04, .no_09, .no_10, .no_14, .no_15, .no_20, .no_25, .no_26, .no_31, .no_36, .no_37, .no_41, .no_42, .no_47, .no_48
    background: #01b7ff
    &.xync
     .num
     width: 50px
              height: 50px
                        margin: 25px 6px 0
    font: 24px/50px 'Microsoft Yahei'
    border-radius: 50%
    & + .num
        margin-left: 6px

</style>
