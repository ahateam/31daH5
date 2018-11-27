import util from '../util'

const baseUrl = "http://localhost:8080/zero/content/";

let api = {};

/**
 *  内容类型，跟后端完全匹配
 *            TYPE_ALBUM = 0;// 相册</br>
 *            TYPE_AUDIO = 1;// 音频</br>
 *            TYPE_VIDEO_CLIP = 2;// 短视频</br>
 *            TYPE_VIDEO = 3;// 视频</br>
 *            TYPE_LIVE = 4;// 直播</br>
 *            TYPE_H5 = 5;// H5文本</br>
 *            TYPE_POST = 6;// 帖子</br>
 *            TYPE_SET = 7;// 内容集合</br>
 */
const type = {
    ALBUM: 0,
    AUDIO: 1,
    VIDEO_CLIP: 2,
    VIDEO: 3,
    LIVE: 4,
    H5: 5,
    POST: 6,
    SET: 7,
};

/**
 * 内容等级
 *             PUBLIC = 0;// 完全公开</br>
 */
const level = {
    PUBLIC: 0,
};


api.createContent = function (userId, type, level, upChannelId, title, origin, meta, data, callback) {
    let cnt = {
        userId: userId,
        type: type,
        level: level,
        upChannelId: upChannelId,
        title: title,
        origin: origin,
        meta: meta,
        data: data,
    };
    util.call(baseUrl + 'createContent', cnt, callback)
}

api.getContentById = function (userId, contentId, callback) {
    let cnt = {
        userId: userId,
        contentId: contentId,
    };
    util.call(baseUrl + 'getContentById', cnt, callback);
}

api.addContentTags = function (userId, contentId, tagKind, tagType, tags, callback) {
    let cnt = {
        userId: userId,
        contentId: contentId,
        tagKind: tagKind,
        tagType: tagType,
        tags: tags,
    };
    util.call(baseUrl + 'addContentTags', cnt, callback);
}

api.removeContentTags = function (userId, contentId, tagKind, tagType, tags, callback) {
    let cnt = {
        userId: userId,
        contentId: contentId,
        tagKind: tagKind,
        tagType: tagType,
        tags: tags,
    };
    util.call(baseUrl + 'removeContentTags', cnt, callback);
}

api.queryContents = function (userId, contentType, status, level, upUserId, upChannelId, tagKind, tagType, tags, count, offset, callback) {
    let cnt = {
        userId: userId,
        contentType: contentType,
        status: status,
        level: level,
        upUserId: upUserId,
        upChannelId: upChannelId,
        tagKind: tagKind,
        tagType: tagType,
        tags: tags,
        count: count,
        offset: offset,
    };
    util.call(baseUrl + 'queryContents', cnt, callback);
}

api.searchContents = function (userId, contentType, status, level, upUserId, upChannelId, keyword, count, offset, callback) {
    let cnt = {
        userId: userId,
        contentType: contentType,
        status: status,
        level: level,
        upUserId: upUserId,
        upChannelId: upChannelId,
        keyword: keyword,
        count: count,
        offset: offset,
    };
    util.call(baseUrl + 'searchContents', cnt, callback);
}


api.getContentTags = function (userId, contentId, tagKind, tagType, callback) {
    let cnt = {
        userId: userId,
        contentId: contentId,
        tagKind: tagKind,
        tagType: tagType,
    };
    util.call(baseUrl + 'getContentTags', cnt, callback);
}

export default {api, type, level}
