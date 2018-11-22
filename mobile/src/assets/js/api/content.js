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

const defaultUser = 0;
const defaultChannel = 0;


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

api.getContentById = function (contentId, callback) {
    let cnt = {
        contentId: contentId,
    };
    util.call(baseUrl + 'getContentById', cnt, callback);
}

api.queryContentsByTag = function (type, tagKey, tags, count, offset, callback) {
    let cnt = {
        appId: appId,
        userId: "1",
        type: type,
        tagKey: tagKey,
        tags: tags,
        count: count,
        offset: offset,
    };

    util.call(baseUrl + 'content/queryContents', cnt, callback);
}

export default {api, type, level, defaultUser, defaultChannel}
