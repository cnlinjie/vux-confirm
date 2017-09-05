<template>
    <div style="width: 90%; margin: 0 auto">
        <span style="vertical-align: top;line-height: 70px;font-size: 14px;color: #704091;">队伍头像：</span>
        <img :src="team.headImg" class="touxiang ">
        <div class="msg"><span>队伍名称：</span> <input v-model="team.name"/>
        </div>
        <div class="msg"><span>队伍口号：</span> <input v-model="team.slogan"/>
        </div>
        <div class="msg"><span>筹款目标：</span> <input v-model="team.target"/>
            <i class="error">*金额不得低于400元，若未填写则默认400元</i>
        </div>
        <div style="font-size: 14px;color: rgba(0, 0, 0, .7);;
    border: 1px dashed #704091; padding: 10px;">
            <div style="color:#f32c2c;font-size: 14px;">友情提示：</div>
            <div>1: 建队成功后，队长不得更换；<i style="color:#f32c2c;font-style: normal"> 除非解算队伍</i></div>
            <div>2: 规定期间内，队长可更换同组队员，但须成员同意，
                逾期系统将无法进行“队员更换操作”
            </div>
            <div>3：队伍需在组队完成后缴交200元押金队伍才算真正成立,方可进行募捐</div>
        </div>
        <div class="button" @click="save">提交</div>
    </div>


</template>
<script>
    export default {
        components: {},
        data () {
            return {
                team: {
                    name: '',
                    slogan: '',
                    target: 400,
                    headImg: '/files/default/head.png'
                }
            }
        },
        computed: {},
        methods: {
            save() {
                let team = this.team;
                if (team.target < 400) {
                    _showError('筹款目标必须大于400哦')
                    return;
                }
                if (team.name === '') {
                    _showError('队伍名称不能为空哦')
                    return;
                }
                if (team.slogan === '') {
                    _showError('口号不能为空哦')
                    return;
                }
                this.ajax.postForm('/teams', team, (data) => {
                    console.log(data);
                    _showError('创建成功')
                })
            }
        },
        mounted() {

        },

    }
</script>
<style scoped>
    .touxiang {
        width: 60px;
        height: 60px;
        margin-top: 10px;
    }

    .msg span {
        font-size: 15px;
        color: #704091;
    }

    .msg input {
        background: transparent;
        border: 1px solid #704091;
        padding: 4px;
        border-radius: 5px
    }

    .error {
        color: #f35353;
        display: inline-block;
        font-size: 14px;
        font-style: normal;
    }

    .button {
        width: 50%;
        margin: 20px auto;
        background-color: #704091;
        color: #fff;
        font-size: 14px;
        border-radius: 5px;
        text-align: center;
        padding: 5px;

    }
</style>