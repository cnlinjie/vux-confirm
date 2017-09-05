<template>
    <div style="margin: 10px auto ; width: 90% ">
        <div>
            <scroller ref="scroller" lock-x height="340px" >
                <div class="skycontent">
                    <div class="list" v-for="item in pageData.content">
                        <img :src="item.headImg" class="img">
                        <div :class="item.type !== 0 && item.type !== 5 ?'line-height-50':''">{{item.message}}</div>
                        <div v-if="(item.type === 0 || item.type === 5 ) && item.operation === 0">
                            <i class="yes rose" @click="agree">同意</i> <i class="no" @click="reject">拒绝</i>
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

    export default {
        data() {
            return {
                asyncCount: 0,
                title:'',
                pageData: {
                    content: [],
                    pageIndex: 1,
                    pageSize: 10
                }
            }
        },
        components: {
            Scroller
        },
        methods: {
            agree(item) {
                console.log('agree');
            },
            reject(item) {
                console.log('reject');
            },
            page() {
                this.ajax.get('/messages',{},(data) => {
                    console.log(data);
                    this.pageData = data;
                    this.resetScroller();
                })
            },
            resetScroller() {
                this.$nextTick(() => {
                    this.$refs.scroller.reset();
                })
            }
        },
        mounted() {
           this.page();
        }
    }


</script>
<style scoped>
    .donation{
        width: 30%;
        background-color:#704091;
        color: #fff;
        font-size: 14px;
        border-radius: 5px;
        text-align: center;
        padding: 5px;
    }
    .ipu{
        width: 70%;
        height: 30px;
        border-radius: 3px;
        border: 1px solid #704091;
        background-color: transparent;
    }
    .btn{
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
    .list{
        border-bottom: 1px solid rgba(112,65,145,.3);
        height: 55px;
        margin-top: 10px;
        padding-bottom: 5px;
    }
    .skycontent {
        font-size: 14px;
    }
    .yes,.no{
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

