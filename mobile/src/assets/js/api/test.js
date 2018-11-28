import util from '../util'

const baseUrl = util.hosturl + "/test/";

let api = {};


api.postapi = function (callback) {
    let cnt = {
        appId: "123",
        userId: "345",
    };
    util.call(baseUrl + 'postapi', cnt, callback)
}

export default {api}
