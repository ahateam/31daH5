<template>
    <div>


        <van-cell-group>
            <van-cell title="test">
                <van-button type="default" @click="testapi">testapi</van-button>
            </van-cell>

            <van-cell title="vote">
                <van-button type="default" @click="createVote">createVote</van-button>

                <van-button type="default" @click="getVotes">getVotes</van-button>

                <van-button type="default" @click="addVoteOption">addVoteOption</van-button>

                <van-button type="default" @click="getVoteOptions">getVoteOptions</van-button>

                <van-button type="default" @click="setVoteOption">setVoteOption</van-button>

                <van-button type="default" @click="delVoteOption">delVoteOption</van-button>


                <van-button type="default" @click="vote">vote</van-button>

                <van-button type="default" @click="getVoteDetail">getVoteDetail</van-button>

            </van-cell>

        </van-cell-group>


    </div>
</template>

<script>

    import {Button, Cell, CellGroup} from 'vant';

    import ctrl_test from '../assets/js/api/test'

    import ctrl_vote from '../assets/js/api/vote'


    export default {
        name: 'home',
        components: {
            [Button.name]: Button,
            [Cell.name]: Cell,
            [CellGroup.name]: CellGroup,
        },
        methods: {
            testapi: function () {
                ctrl_test.api.postapi(function (data) {
                    alert(JSON.stringify(data.data));
                })
            },
            //Long orgId, String title, String remark, Byte type, Byte choiceCount, Date expiryTime
            createVote: function () {
                //时间用数字格式
                ctrl_vote.api.createVote("395109308203032", "这是第一个投票", "备注", //
                    ctrl_vote.type.TYPE_SINGLE, 0, new Date().getTime(), function (data) {
                        alert(JSON.stringify(data.data));
                    })
            },
            getVotes: function () {
                ctrl_vote.api.getVotes("395109308203032", 10, 0, function (data) {
                    alert(JSON.stringify(data.data));
                })
            },
            addVoteOption: function () {
                ctrl_vote.api.addVoteOption("395110831225576", "选项x", "备注x", function (data) {
                    alert(JSON.stringify(data.data));
                })
            },
            getVoteOptions: function () {
                ctrl_vote.api.getVoteOptions("395110831225576", function (data) {
                    alert(JSON.stringify(data.data));
                })
            },
            setVoteOption: function () {
                ctrl_vote.api.setVoteOption("395111049113323", "选项xx", "改动了", function (data) {
                    alert(JSON.stringify(data.data));
                })
            },
            delVoteOption: function () {
                ctrl_vote.api.delVoteOption("395111049113323", function (data) {
                    alert(JSON.stringify(data.data));
                })
            },
            //voteId, userId, selections, weight, remark
            vote: function () {
                //[{"option":"134441","opt","2"},{"option":"234234","opt","1"}]
                //必须填写完整投票的所有选项，不能空，目前有四个option，四个都得填完整

                var o1 = new Object();
                o1.option = "395111181631731";//选项编号
                o1.opt = ctrl_vote.opt.OPT_ABSTAINED;//选择

                var o2 = new Object();
                o2.option = "395111181239538";//选项编号
                o2.opt = ctrl_vote.opt.OPT_AGREE;//选择

                var o3 = new Object();
                o3.option = "395111153318641";//选项编号
                o3.opt = ctrl_vote.opt.OPT_DISAGREE;//选择

                var o4 = new Object();
                o4.option = "395111054078444";//选项编号
                o4.opt = ctrl_vote.opt.OPT_ABSTAINED;//选择

                var selections = new Array();
                selections.push(o1, o2, o3, o4);


                ctrl_vote.api.vote("395110831225576", "395109572314393", selections, 2, "备注", function (data) {
                    alert(JSON.stringify(data.data));
                })
            },
            getVoteDetail: function () {
                ctrl_vote.api.getVoteDetail("395110831225576", function (data) {
                    alert(JSON.stringify(data.data));
                })
            },

        }
    }
</script>
