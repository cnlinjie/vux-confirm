<template>
    <div>
        <div><input  class="ipu" v-model="search.keyword"/> <span class="btn rose" @click="doSearch">搜索</span></div>
        <div v-i="">
            <x-scroller  height="300px" @on-load-data="onLoad" ref="scroller">
                <div class="skycontent">
                    <div v-show="content.length <= 0" style="text-align: center; line-height: 50px;font-size: 13px;">没有数据</div>
                    <div class="list" v-for="item in content">
                        <img :src="item.headImg" class="img">
                        <div>名称： {{item.nickname}}</div>
                        <div>已捐款： {{item.donationTotal}} </div>
                    </div>
                </div>
            </x-scroller>


        </div>

    </div>
</template>
<script>
    import {Scroller} from 'vux'
    import XScroller from '../../components/XScroller'
    import { mapActions, mapGetters } from "vuex"
    export default {
        data() {
            return {
                asyncCount: 0,
                title:'',
                content:[],
                search:{
                    keyword:'',
                    pageIndex:0,
                    pageSize:10,
                }
            }
        },
        components: {
            Scroller,XScroller
        },
        methods: {
            doSearch() {
                this.content = [];
                this.search.pageIndex = 0;
                this.page();
            },
            page(done) {
                this.search.pageIndex++;
                this.ajax.get('/users/top-search',this.search,(data) => {
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
            },
            ...mapActions(['setLoveActive'])
        },
        mounted() {
            this.page();
            this.setLoveActive('personal')
        }
    }


</script>
<style scoped>
    .ipu{
        width: 60%;
        height: 30px;
        border-radius: 3px;
        border: 1px solid #704091;
        background-color: transparent;
        font-size: 15px;
        padding-left: 15px;
    }
    .btn{
        width: 22%;
        border-radius: 5px;
        padding: 2px;
        font-size: 14px;
        display: inline-block;
        text-align: center;
        color: #fff;
        margin-left: 10px;
        line-height: 28px;
    }
    .img {
        width: 45px;
        height: 45px;
        border-radius: 5px;
        float: left;
        margin-right: 10px;
    }
    .list{
        border-bottom: 1px solid rgba(112,65,145,.3);
        height: 50px;
        margin-top: 10px;
        font-size: 14px;
        padding-bottom: 5px;
    }
    .skycontent div{
        font-size: 14px;
    }
</style>