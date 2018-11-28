import util from '../util'

const baseUrl = util.hosturl + "/vote/";

let api = {};


api.getContentTags = function (userId, contentId, tagKind, tagType, callback) {
    let cnt = {
        userId: userId,
        contentId: contentId,
        tagKind: tagKind,
        tagType: tagType,
    };
    util.call(baseUrl + 'getContentTags', cnt, callback);
}

export default {api}
