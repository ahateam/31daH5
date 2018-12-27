import util from '../util'

const baseUrl = util.hosturl + "/test/";

let api = {};

api.newapi = function (callback) {
    let cnt = {
        some: "123",
        i2: 234,
        i3: null,
    };
    util.call(baseUrl + 'newapi', cnt, callback)
}

api.newapi2 = function (callback) {
    //
    let jo = {test: 123, ddd: "sdhfksjdhf", obj: {sim: 12312}, arr: []};
    let v = {id: 123, expire: 234, code: "ccc"};
    let ja = [{test: "sdf"}, {test: "sdfsdf"}];

    let cnt = {
        jo: jo,
        v: v,
        ja: ja,
    };
    util.call(baseUrl + 'newapi2', cnt, callback)
}

api.postapi = function (callback) {
    let cnt = {
        appId: "123",
        userId: "345",
    };
    util.call(baseUrl + 'postapi', cnt, callback)
}

export default {api}
