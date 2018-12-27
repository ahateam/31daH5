<template>
    <div>


        <h1>This is an OSS page</h1>

        <div>
            <div>
                <input type="file" id="id" @change="doUpload($event)"/>
                <div>完成了--{{curProcess}}</div>
            </div>
        </div>

    </div>


</template>


<script>


    import OSS from 'ali-oss';

    let client = new OSS({
        region: 'oss-cn-hangzhou',
        //云账号AccessKey有所有API访问权限，建议遵循阿里云安全最佳实践，部署在服务端使用RAM子账号或STS，部署在客户端使用STS。
        accessKeyId: 'LTAIJ9mYIjuW54Cj',
        accessKeySecret: '89EMlXLsP13H8mWKIvdr4iM1OvdVxs',
        bucket: 'jitijingji-test1'
    });

    export default {
        name: 'home',
        data() {
            return {
                curProcess: 0,
            }
        },
        methods: {
            getProgress(p) {
                console.error("完成了 " + p);
                this.curProcess = p;

            },
            doUpload(event) {
                // this.$emit('getProgress', 0);
                this.getProgress(0);
                let file = event.target.files;
                this.multipartUpload(encodeURIComponent(file[0].name), file[0]);
            },
            multipartUpload(upName, upFile) {
                //Vue中封装的分片上传方法（详见官方文档）
                let _this = this
                const progress = async function (p) {
                    //项目中需获取进度条，故调用进度回调函数（详见官方文档）
                    // _this.$emit('getProgress', Math.round(p * 100))
                    _this.getProgress(Math.round(p * 100));
                }
                try {
                    let result = client.multipartUpload(upName, upFile, {
                        progress,
                        meta: {
                            year: 2017,
                            people: 'test'
                        }
                    }).then(res => {
                        _this.videoUrl = res.res.requestUrls[0].split('?')[0]
                        let info = {}
                        info.name = res.name
                        info.size = _this.size
                        info.videoUrl = _this.videoUrl
                        _this.$emit('getUrl', info)
                        let head = client.head(upName);

                    }).catch(err => {
                        console.log(err)
                    });

                } catch (e) {
                    // 捕获超时异常
                    if (e.code === 'ConnectionTimeoutError') {
                        console.log("Woops,超时啦!");
                    }
                    console.log(e)
                }
            },
        }
    }
</script>
