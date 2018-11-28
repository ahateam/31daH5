import util from '../util'

const baseUrl = util.hosturl + "/tag/";

let api = {};

api.createTag = function (userId, tagKind, tagType, tagName, callback) {
    let cnt = {
        userId: userId,
        tagKind: tagKind,
        tagType: tagType,
        tagName: tagName,
    };
    util.call(baseUrl + 'createTag', cnt, callback)
}

api.getTags = function (userId, tagKind, tagType, callback) {
    let cnt = {
        userId: userId,
        tagKind: tagKind,
        tagType: tagType,
    };
    util.call(baseUrl + 'getTags', cnt, callback);
}


export default {api}
