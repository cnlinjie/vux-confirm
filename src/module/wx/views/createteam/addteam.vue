<template>
    <div style="margin: 0 auto ; width: 90% ">
        <div class="banner"></div>
        <div><input class="ipu" v-model="keyword" placeholder="姓名、昵称、身份证号"/> <span class="btn" @click="serach">搜索</span>
        </div>
        <div>
            <scroller ref="scroller" lock-x height="350px">
                <div class="skycontent">
                    <div class="list" v-for="item in pageData.content" :key="item.id">
                        <img src="../../assets/images/header.jpg" class="img">
                        <div>张三2</div>
                        <div class="button">&nbsp;&nbsp;邀请&nbsp;&nbsp;</div>
                    </div>
                </div>
            </scroller>
        </div>
        <div class="next" @click="next">下一步</div>
    </div>
</template>
<script>
    import {Scroller} from 'vux'

    export default {
        data() {
            return {
                asyncCount: 0,
                keyword: '',
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
            serach() {
                if (this.keyword === '') {
                    _showError('请输入您需要查找的关键字')
                    return;
                }
                this.ajax.get('/users/search', {keyword: this.keyword}, (data) => {
                    if (data.content.length === 0) {
                        _showError('没有您要找的人')
                    } else {
                        this.pageData = data;
                    }
                });
            },
            resetScroller() {
                this.$nextTick(() => {
                    this.$refs.scroller.reset();
                })
            },
            next () {
                this.$router.push('/selectteam')
            }
        },
        mounted() {
            setTimeout(() => {
                this.resetScroller();
            }, 500)
        }
    }


</script>
<style scoped>
    .donation {
        width: 30%;
        background-color: #704091;
        color: #fff;
        font-size: 18px;
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
        padding-left: 10px;
    }

    .btn {
        width: 22%;
        height: 30px;
        line-height: 30px;
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
        height: 50px;
        margin-top: 10px;
        font-size: 14px;
        padding-bottom: 5px;

    }

    .skycontent {
        font-size: 18px;
    }

    .yes, .no {
        color: rgb(255, 255, 255);
        padding: 3px;
        border-radius: 5px;
        width: 50px;
        text-align: center;
        font-style: normal;
        display: inline-block;
    }

    .no {
        background-color: #586c94;
    }

    .img {
        width: 45px;
        height: 45px;
        border-radius: 5px;
        float: left;
        margin-right: 10px;
    }

    .button {
        background-color: #dd2563;
        color: #fff;
        border-radius: 5px;
        text-align: center;
        float: right;
        padding: 3px;
    }

    .next {
        width: 50%;
        margin: 20px auto;
        background-color: #704091;
        font-size: 12px;
        border-radius: 5px;
        text-align: center;
        padding: 5px;
        color: #fff;
    }
</style>

