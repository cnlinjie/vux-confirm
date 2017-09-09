<template>

    <scroller lock-x :height="height" :use-pullup="true" ref="scroller" @on-pullup-loading="loadData"
              v-model="status">
        <div>
            <slot></slot>
        </div>

        <div slot="pullup" class="" style=" line-height: 30px; ;text-align: center;">
            <span v-show="status.pullupStatus === 'default'"></span>
            <span class="pullup-arrow" v-show="status.pullupStatus === 'down' || status.pullupStatus === 'up'"
                  :class="{'rotate': status.pullupStatus === 'up'}">↑</span>
            <span v-show="status.pullupStatus === 'loading'">
                    <spinner type="ios-small"></spinner>
            </span>
        </div>
    </scroller>
</template>
<script>
    import {Scroller,Spinner} from 'vux'

    export default {
        name: 'XScroller',
        components: {
            Scroller,Spinner
        },
        props: {
            height: {
                type: Number,
                default: -53
            }
        },
        methods: {
            resetScroller() {
                this.$nextTick(() => {
                    this.$refs.scroller.donePullup()
                    this.$refs.scroller.reset();
                })
            },
            reset() {
                this.$nextTick(() => {
                    this.$refs.scroller.reset();
                })
            },
            resetTop() {
                this.$nextTick(() => {
                    this.$refs.scroller.donePullup()
                    this.$refs.scroller.reset({
                        top: 0
                    });
                })
            },

            loadData() {
                this.$emit('on-load-data', this.resetScroller);
            }
        },
        data () {
            return {
                status: {
                    pullupStatus: 'default'
                }
            }
        }
    }
</script>

<style>

</style>
