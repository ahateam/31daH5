<template>
    <div>


        <van-cell-group>
            <van-cell title="test">
                <van-button type="default" @click="testapi">testapi</van-button>
            </van-cell>
            <van-cell title="user">
                <van-button type="default" @click="registByNameAndPwd">registByNameAndPwd</van-button>

                <van-button type="default" @click="loginByNameAndPwd">loginByNameAndPwd</van-button>

                <van-button type="default" @click="loginByAnonymous">loginByAnonymous</van-button>

                <van-button type="default" @click="getUserById">getUserById</van-button>
            </van-cell>

            <van-cell title="content">
                <van-button type="default" @click="createContent">createContent</van-button>
            </van-cell>
        </van-cell-group>


    </div>
</template>

<script>

    import {Button, Cell, CellGroup} from 'vant';

    import ctrl_test from '../assets/js/api/test'

    import ctrl_user from '../assets/js/api/user'

    import ctrl_content from '../assets/js/api/content'

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
            registByNameAndPwd: function () {
                ctrl_user.api.registByNameAndPwd("testName", "testPwd", function (data) {
                    alert(JSON.stringify(data.data));
                })
            },
            loginByNameAndPwd: function () {
                ctrl_user.api.loginByNameAndPwd("testName", "testPwd", function (data) {
                    alert(JSON.stringify(data.data));
                })
            },
            loginByAnonymous: function () {
                ctrl_user.api.loginByAnonymous(function (data) {
                    alert(JSON.stringify(data.data));
                })
            },
            getUserById: function () {
                ctrl_user.api.getUserById("394974168156752", function (data) {
                    alert(JSON.stringify(data.data));
                })
            },
            createContent: function () {

                let data = {
                    content: "<div>this is a test content</div>"
                };

                ctrl_content.api.createContent(ctrl_content.defaultUser,//
                    ctrl_content.type.H5,//
                    ctrl_content.level.PUBLIC, //
                    ctrl_content.defaultChannel,//
                    "testTitle", "testOrigin", "testMeta", data, function (data) {
                        alert(JSON.stringify(data.data));
                    })
            }
        }
    }
</script>
