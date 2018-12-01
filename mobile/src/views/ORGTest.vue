<template>
    <div>


        <van-cell-group>
            <van-cell title="test">
                <van-button type="default" @click="testapi">testapi</van-button>
            </van-cell>

            <van-cell title="org">
                <van-button type="default" @click="createORG">createORG</van-button>

                <van-button type="default" @click="setORG">setORG</van-button>

                <van-button type="default" @click="getORGs">getORGs</van-button>

                <van-button type="default" @click="updateORGUser">updateORGUser</van-button>

                <van-button type="default" @click="importUser">importUser</van-button>

                <van-button type="default" @click="loginByMobileAndPwd">loginByMobileAndPwd</van-button>

                <van-button type="default" @click="loginInORG">loginInORG</van-button>

                <van-button type="default" @click="getORGDirectors">getORGDirectors</van-button>

                <van-button type="default" @click="getORGShareholders">getORGShareholders</van-button>

                <van-button type="default" @click="getORGSupervisors">getORGSupervisors</van-button>

            </van-cell>

        </van-cell-group>


    </div>
</template>

<script>

    import {Button, Cell, CellGroup} from 'vant';

    import ctrl_test from '../assets/js/api/test'

    import ctrl_org from '../assets/js/api/org'


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
            //name, code, province, city, district, address, imgOrg, imgAuth, shareAmount
            createORG: function () {
                ctrl_org.api.createORG("testName", "code123", "贵州省", "贵阳市", "南明区", "某地某某某", "imgOrg", "imgAuth", 100, function (data) {
                    alert(JSON.stringify(data.data));
                })
            },
            //orgId, province, city, district, address, imgOrg, imgAuth, shareAmount
            setORG: function () {
                ctrl_org.api.setORG("395109308203032", null, null, null, null, null, null, Math.random() * 10, function (data) {
                    alert(JSON.stringify(data.data));
                })
            },
            getORGs: function () {
                ctrl_org.api.getORGs(10, 0, function (data) {
                    alert(JSON.stringify(data.data));
                })
            },


            updateORGUser: function () {
                ctrl_org.api.updateORGUser("395109308203032", "395153000894227", ctrl_org.share.SHARE_SHAREHOLDER, 2, ctrl_org.duty.DUTY_NONE, ctrl_org.visor.VISOR_NONE
                    , function (data) {
                        alert(JSON.stringify(data.data));
                    }
                )
            },
            importUser: function () {
                //orgId, mobile, name, idNumber, share, weight, duty, visor
                ctrl_org.api.importUser("395109308203032", "18812313212", "猴子", "555555555555551234",//
                    ctrl_org.share.SHARE_SHAREHOLDER, 0, ctrl_org.duty.DUTY_NONE, ctrl_org.visor.VISOR_NONE,//
                    function (data) {
                        alert(JSON.stringify(data.data));
                    })
            },
            loginByMobileAndPwd: function () {
                ctrl_org.api.loginByMobileAndPwd("18812313212", "551234", function (data) {
                    alert(JSON.stringify(data.data));
                })
            },
            loginInORG: function () {
                ctrl_org.api.loginInORG("395109308203032", "395109572314393", function (data) {
                    alert(JSON.stringify(data.data));
                })
            },
            getORGDirectors: function () {
                ctrl_org.api.getORGDirectors("395109308203032", 10, 0, function (data) {
                    alert(JSON.stringify(data.data));
                })
            },
            getORGShareholders: function () {
                ctrl_org.api.getORGShareholders("395109308203032", 10, 0, function (data) {
                    alert(JSON.stringify(data.data));
                })
            },
            getORGSupervisors: function () {
                ctrl_org.api.getORGSupervisors("395109308203032", 10, 0, function (data) {
                    alert(JSON.stringify(data.data));
                })
            },


        }
    }
</script>
