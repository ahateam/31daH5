<template>
    <van-button type="default">默认按钮</van-button>
</template>

<script>

    import {Button} from 'vant';

    export default {
        name: 'home',
        components: {
            [Button.name]: Button
        }
    }
</script>
