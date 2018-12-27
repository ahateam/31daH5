<template>
    <div>


        <van-cell-group>
            <van-cell title="test">
                <van-button type="default" @click="testapi">testapi</van-button>
                <van-button type="default" @click="newapi">newapi</van-button>
                <van-button type="default" @click="newapi2">newapi2</van-button>


            </van-cell>
            <van-cell title="user">
                <van-button type="default" @click="registByNameAndPwd">registByNameAndPwd</van-button>

                <van-button type="default" @click="loginByNameAndPwd">loginByNameAndPwd</van-button>

                <van-button type="default" @click="loginByAnonymous">loginByAnonymous</van-button>

                <van-button type="default" @click="getUserById">getUserById</van-button>
            </van-cell>

            <van-cell title="tag">
                <van-button type="default" @click="createTag">createTag</van-button>

                <van-button type="default" @click="getTags">getTags</van-button>
            </van-cell>
            <van-cell title="content">
                <van-button type="default" @click="createContent">createContent</van-button>

                <van-button type="default" @click="getContentById">getContentById</van-button>
            </van-cell>

        </van-cell-group>


    </div>
</template>

<script>

    import {Button, Cell, CellGroup} from 'vant';

    import ctrl_test from '../assets/js/api/test'

    import ctrl_user from '../assets/js/api/user'

    import ctrl_tag from '../assets/js/api/tag'

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
            newapi:function(){
                ctrl_test.api.newapi(function (data) {
                    alert(JSON.stringify(data.data));
                })
            },
            newapi2:function(){
                ctrl_test.api.newapi2(function (data) {
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

                ctrl_content.api.createContent(0,//
                    ctrl_content.type.H5,//
                    ctrl_content.level.PUBLIC, //
                    0,//
                    "testTitle", "testOrigin", "testMeta", data, function (data) {
                        alert(JSON.stringify(data.data));
                    })
            },
            getContentById: function () {
                ctrl_content.api.getContentById(0, "394992395864434", function (data) {
                    alert(JSON.stringify(data.data));
                })
            },
            createTag: function () {
                ctrl_tag.api.createTag(0, "tagKind", "tagType", "tagName", function (data) {
                    alert(JSON.stringify(data.data));
                });
            },
            getTags: function () {
                ctrl_tag.api.getTags(0, "tagKind", "tagType", function (data) {
                    alert(JSON.stringify(data.data));
                });
            }
        }
    }
</script>
