<template>
    <div style="margin: 10px auto ; width: 90% ">
        <div>
            <scroller ref="scroller" lock-x height="-230">
                <div class="skycontent">
                    <div class="list" v-for="item in pageData.content">
                        <img :src="item.headImg" class="img">
                        <div :class="item.type !== 0 && item.type !== 5 ?'line-height-50':''">{{item.message}}</div>
                        <div v-if="(item.type === 0 || item.type === 5 ) && item.operation === 0">
                            <i class="yes rose" @click="agree(item)">同意</i> <i class="no" @click="reject(item)">拒绝</i>
                        </div>
                        <div v-if="(item.type === 0 || item.type === 5 ) && item.operation !== 0">
                            {{item.note}}
                        </div>
                    </div>
                </div>
            </scroller>
        </div>
    </div>
</template>
<script>
    import {Scroller} from 'vux'
    import {mapActions, mapGetters} from "vuex"
    export default {
        data() {
            return {
                asyncCount: 0,
                title: '',
                pageData: {
                    content: [],
                    pageIndex: 1,
                    pageSize: 10
                },
                isSend: false,
            }
        },
        components: {
            Scroller
        },
        methods: {
            agree(item) {
                if (this.isSend) {
                    _showError('处理中,请稍等')
                    return;
                }
                this.isSend = true;
                this.ajax.postForm('/messages/agree', {id: item.id}, (data) => {
                    _showError('已同意')
                    item.operation = 1;
                    item.note = '已同意';
                    this.isSend = false;
                }, (err) => {
                    this.isSend = false;
                });

            },
            reject(item) {
                if (this.isSend) {
                    _showError('处理中,请稍等')
                    return;
                }
                this.isSend = true;
                this.ajax.postForm('/messages/reject', {id: item.id}, (data) => {
                    item.operation = 1;
                    item.note = '已拒绝';
                    _showError('已拒绝')
                    this.isSend = false;
                }, (err) => {
                    this.isSend = false;
                });

            },
            page() {
                this.ajax.get('/messages', {}, (data) => {
                    this.pageData = data;
                    this.resetScroller();
                })
            },
            resetScroller() {
                this.$nextTick(() => {
                    this.$refs.scroller.reset();
                })
            }
            , ...mapActions(['setActive'])
        },
        mounted() {
            this.setActive('message')
            this.page();
        }
    }


</script>
<style scoped>
    .donation {
        width: 30%;
        background-color: #704091;
        color: #fff;
        font-size: 14px;
        border-radius: 5px;
        text-align: center;
        padding: 5px;
    }

    .ipu {
        width: 70%;
        height: 30px;
        border-radius: 3px;
        border: 1px solid #704091;
        background-color: transparent;
    }

    .btn {
        width: 22%;
        background-color: #704091;
        border-radius: 5px;
        padding: 2px;
        font-size: 14px;
        display: inline-block;
        text-align: center;
        color: #fff;
        margin-left: 10px;
        line-height: 28px;
    }

    .list {
        border-bottom: 1px solid rgba(112, 65, 145, .3);
        height: 55px;
        margin-top: 10px;
        padding-bottom: 5px;
    }

    .skycontent {
        font-size: 14px;
    }

    .yes, .no {
        margin-top: 5px;
        color: rgb(255, 255, 255);
        padding: 3px;
        border-radius: 5px;
        width: 50px;
        text-align: center;
        font-size: 12px;
        font-style: normal;
        display: inline-block;
    }

    .no {
        background-color: #586c94;
    }

    .img {
        width: 45px;
        height: 45px;
        border-radius: 500px;
        float: left;
        margin-right: 10px;
    }

    .line-height-50 {
        line-height: 50px;
    }
</style>

