<template>
    <div>


        <h1>This is an Excel page</h1>

        <button @click="openExcel">open excel</button>

        <div id="demo"></div>

    </div>


</template>


<script>

    import axios from 'axios'
    import XLSX from 'xlsx';

    var url = "https://jitijingji-test1.oss-cn-hangzhou.aliyuncs.com/user/395239429596298/%25E6%259D%25BE%25E6%259E%2597%25E6%259D%2591%25E8%2582%25A1%25E4%25BB%25BD%25E7%25BB%258F%25E6%25B5%258E%25E5%2590%2588%25E4%25BD%259C%25E7%25A4%25BE%25E7%2594%25A8%25E6%2588%25B7%25E4%25BF%25A1%25E6%2581%25AF%25E8%25A1%25A8%25E6%25A8%25A1%25E6%259D%25BF.xlsx";


    export default {
        methods: {
            openExcel() {
                console.info("openExcel");
                var _this = this;
                axios.get(url,{responseType: 'arraybuffer'}).then(function (response) {
                    // console.info("axios>" + JSON.stringify(response.data));

                    var data = new Uint8Array(response.data);
                    // console.error("data>" + JSON.stringify(data));
                    var wb = XLSX.read(data, {type: "array"});
                    _this.process_wb(wb);

                }).catch(function (readyState, status, error) {
                    console.error("axios>>>" + error);
                    console.error(readyState);
                })
            },
            process_wb(wb) {
                //console.error("process_wbprocess_wbprocess_wb")
                var output = this.to_csv(wb);
                console.error(output)
                var out = document.getElementById('demo');
                if (out.innerText === undefined) {
                    out.textContent = output;
                } else {
                    out.innerText = output;
                    if (typeof console !== 'undefined') console.log("output", new Date());
                }
            },
            to_csv(workbook) {
                var result = [];
                console.error("xxxx" + JSON.stringify(workbook));
                workbook.SheetNames.forEach(function (sheetName) {
                    console.error("yyy" + sheetName);

                    var csv = XLSX.utils.sheet_to_csv(workbook.Sheets[sheetName]);


                    if (csv.length > 0) {
                        result.push("SHEET: " + sheetName);
                        result.push("");
                        result.push(csv);
                    }
                });
                return result.join("\n");
            },
        }
    }


</script>
