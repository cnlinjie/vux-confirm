<template>
    <div>
        <div class="banner"></div>
        <div class="sky violet">选择方阵</div>
        <div
            @click="selectQinzi"
            :class="isSelectQinZi ? 'group rose select-team' :  'group rose '"
        >
            纯真亲子组
            <div style="line-height: 30px; font-size: 16px;">
                {{teamNum[0].process > teamNum[0].total ? teamNum[0].total : teamNum[0].process}} /  {{teamNum[0].total}}
            </div>
        </div>
        <div @click="selectYueDong" :class="isSelectYueDong?'white group select-team':'white group '"
             style="margin-top: 18px;">
            悦动健行组
            <div style="line-height: 30px; font-size: 16px;">
                {{teamNum[1].process > teamNum[1].total ? teamNum[1].total : teamNum[1].process}}  /  {{teamNum[1].total}}
            </div>
        </div>
        <div class="button" @click="isOK" v-show="isSelectQinZi||isSelectYueDong">确定加入</div>
    </div>
</template>
<script>
    import {mapActions, mapGetters} from "vuex"
    import {info, reg, isNull} from '../../assets/js/verification'
    import {go, getUrl} from 'vux/src/libs/router'
    export default {
        data() {
            return {
                isSelectQinZi: false,
                isSelectYueDong: false,
                my: {},
                teamNum: [
                    {total: 100, process: 0},
                    {total: 200, process: 0}
                ]

            }
        },
        computed: {


            isSelectQinZiNext() {
                let ageNum = 0;
                this.teammate.forEach(e => {
                    if (e.age <= 18) {
                        ageNum++;
                    }
                });
                if (ageNum >= 1) {
                    return true;
                }
                return false;
            },

            ...mapGetters(['team', 'teammate'])
        },
        components: {},
        methods: {

            getTeamNum() {
                this.ajax.get('/team-num', {}, (data) => {
                    this.teamNum = data;
                });
            },

            selectQinzi() {
                this.isSelectQinZi = true;
                this.isSelectYueDong = false;

            },
            selectQinziBak() {
                if (this.teamNum[0].process >= this.teamNum[0].total) {
                    alert('对不起，该方阵人员已满');
                } else if (this.isSelectQinZiNext) {
                    this.isSelectQinZi = true;
                    this.isSelectYueDong = false;
                } else {
                    alert('对不起，您的队 伍里并无4-18岁成员，不可加入该方阵');
                }
            },

            selectYueDong() {
                this.isSelectQinZi = false;
                this.isSelectYueDong = true;
            },

            selectYueDongBak() {
                if (this.teamNum[1].process >= this.teamNum[1].total) {
                    alert('对不起，该方阵人员已满');
                } else if (this.team.peopleNum < 4) {
                    alert('您的队伍人数还不满足此方阵');
                } else {
                    this.isSelectQinZi = false;
                    this.isSelectYueDong = true;
                }
            },

            isOK() {
                let r = false;

                if (this.isSelectQinZi) {
                    r = confirm("请确认是否加入【纯真亲子组】，选择后不可更改");
                } else if (this.isSelectYueDong) {
                    r = confirm("请确认是否加入【悦动健行组】，选择后不可更改");
                } else {
                    alert("请选择方阵");
                }
                if (r === true) {
                    let id = this.isSelectQinZi ? 1 : 2;
                    this.ajax.postForm('/teams/join', {id: id}, (data) => {
                       alert('加入成功，交纳押金后可以进行募捐');
                       go('/teanmoney',this.$router);
                    })

                }

            },

            getUser() {
                this.ajax.get('/my/user', {}, (data) => {
                    if (isNull(data) || isNull(data.teamId)) {
                        go('/createteam', this.$router);
                    } else if (data.role !== 1) {
                        _showError('您不是队长,无法选择方阵');
                        go('/teanmoney', this.$router);
                    } else {
                        this.my = data;
                    }
                });
            },
            ...mapActions(['setTeam','setActive'])
        },
        mounted() {
            this.getUser();
            this.setTeam();
            this.getTeamNum();
            this.setActive('team')
        }
    }
</script>
<style scoped>
    .sky {
        width: 90%;
        margin: 0 auto;
        text-align: center;
        color: #fff;
        font-size: 16px;
        margin-top: 10px;
        margin-bottom: 10px;
        padding: 5px;
    }

    .select-team {
        border: 2px solid #704091;
    }

    .white {
        background-color: white;
        color: #c93a63 !important;
    }

    .group {
        width: 90%;
        height: 70px;
        margin: 0 auto;
        text-align: center;
        color: #fff;
        font-size: 24px;
        padding: 5px;
        padding-top: 16px;
    }

    .button {
        width: 40%;
        background-color: #704091;
        color: #fff;
        font-size: 16px;
        border-radius: 5px;
        text-align: center;
        padding: 10px;
        display: block;
        margin: 90px auto;
    }
</style>

