<template>
    <div style="margin: 0 auto ; width: 90% ">
        <div class="banner"></div>
        <!--<router-link to="dona" class="donation">我已捐款</router-link>-->
        <div><input  class="ipu" v-model="search.name"/> <span class="btn rose" @click="doSearch">搜索</span></div>
        <div style="margin-top: 10px;">
            <x-scroller  height="-190" @on-load-data="onLoad" ref="scroller">
                <div class="skycontent">
                    <div v-show="content.length <= 0" style="text-align: center; line-height: 50px;font-size: 13px;">没有数据</div>
                    <div class="list" v-for="item in content">
                        <img :src="item.headImg" class="img">
                        <div  class="button" @click="mujuan">募捐</div>
                        <div>名称： {{item.name}}</div>
                        <div>已筹善款： {{item.process}} </div>
                    </div>
                </div>
            </x-scroller>

        </div>

    </div>
</template>
<script>
    import {Scroller} from 'vux'
    import XScroller from '../../components/XScroller'
    import { go, getUrl } from 'vux/src/libs/router'
    export default {
        data() {
            return {
                asyncCount: 0,
                title: '',
                content:[],
                search:{
                    status:0,
                    name:'',
                    pageIndex:0,
                    pageSize:10,
                }
            }
        },
        components: {
            Scroller,XScroller
        },
        methods: {
            mujuan() {
                go('/dona',this.$router);
            },
            doSearch() {
                this.content.length = 0;
                this.search.pageIndex = 0;
                this.page();
            },
            page(done) {
                this.search.pageIndex++;
                this.ajax.get('/teams/search',this.search,(data) => {
                    if (data.content.length === 0) {
                        this.search.pageIndex--;
                    } else {
                        this.content.push(...data.content);
                    }
                    done();
                    this.resetScroller();
                });
            },
            resetScroller() {
                this.$nextTick(() => {
                    this.$refs.scroller.resetScroller();
                })
            },
            onLoad(done) {
                this.page(done);
            }
        },
        mounted() {
            this.page();
        }
    }


</script>
<style scoped>
    .donation {
        background-color: #704091;
        color: #fff;
        font-size: 14px;
        line-height: 28px;
        border-radius: 5px;
        text-align: center;
        padding: 5px;
    }

    .ipu {
        width: 60%;
        height: 30px;
        border-radius: 3px;
        border: 1px solid #704091;
        background-color: transparent;
        font-size: 15px;
        padding-left: 10px;
    }

    .btn {
        width: 22%;
        line-height: 28px;
        background-color: #704091;
        border-radius: 5px;
        padding: 2px;
        font-size: 14px;
        display: inline-block;
        text-align: center;
        color: #fff;
        margin-left: 10px;
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

    .button {
        float: right;
        background-color: #dd2563;
        color: rgb(255, 255, 255);
        padding: 4px;
        margin-top: 17px;
        margin-right: 10px;
        border-radius: 5px;
        width: 50px;
        text-align: center;
        font-size: 14px;
    }

    .img {
        width: 45px;
        height: 45px;
        border-radius: 5px;
        float: left;
        margin-right: 10px;
    }
</style>

