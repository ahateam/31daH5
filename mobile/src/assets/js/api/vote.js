import util from '../util'

const baseUrl = util.hosturl + "/vote/";

let api = {};

/**
 *投票类型
 */
const type = {
    TYPE_SINGLE: 0,//单选
    TYPE_MULTIPLE: 1,//多选
};

/**
 * 选项（弃权，赞同，反对）
 */
const opt = {
    OPT_ABSTAINED: 0,
    OPT_AGREE: 1,
    OPT_DISAGREE: 2,
}

/**
 * 创建投票
 *
 * @param orgId
 *            组织编号
 * @param title
 *            标题
 * @param remark
 *            备注
 * @param type
 *            投票类型，单选多选
 * @param choiceCount
 *            多选数量限制
 * @param startTime
 *            开始日期
 * @param expiryTime
 *            截止日期
 * @return 创建的投票对象
 *
 */
api.createVote = function (orgId, title, remark, type, choiceCount, startTime, expiryTime, callback) {
    let cnt = {
        orgId: orgId,
        title: title,
        remark: remark,
        type: type,
        choiceCount: choiceCount,
        startTime: startTime,
        expiryTime: expiryTime,
    };
    util.call(baseUrl + 'createVote', cnt, callback);
}

/**
 * 获取组织的投票列表
 *
 * @param orgId
 *            组织编号
 * @param count
 *            数量（用于分页）
 * @param offset
 *            起始位置（从零开始，用于分页）
 *
 * @return 投票列表
 *
 */
api.getVotes = function (orgId, count, offset, callback) {
    let cnt = {
        orgId: orgId,
        count: count,
        offset: offset,
    };
    util.call(baseUrl + 'getVotes', cnt, callback);
}

/**
 * 添加投票的选项
 *
 * @param voteId
 *            投票编号
 * @param title
 *            标题
 * @param remark
 *            备注
 * @return 添加的选项
 *
 */
api.addVoteOption = function (voteId, title, remark, callback) {
    let cnt = {
        voteId: voteId,
        title: title,
        remark: remark,
    };
    util.call(baseUrl + 'addVoteOption', cnt, callback);
}

/**
 * 获取组织的投票的选项列表
 *
 * @param voteId
 *            投票编号
 *
 * @return 投票选项列表
 *
 */
api.getVoteOptions = function (voteId, callback) {
    let cnt = {
        voteId: voteId,
    };
    util.call(baseUrl + 'getVoteOptions', cnt, callback);
}

/**
 * 设置投票的选项
 *
 * @param optionId
 *            投票选项编号
 * @param title
 *            标题
 * @param remark
 *            备注
 * @return 添加的选项
 *
 */
api.setVoteOption = function (optionId, title, remark, callback) {
    let cnt = {
        optionId: optionId,
        title: title,
        remark: remark,
    };
    util.call(baseUrl + 'setVoteOption', cnt, callback);
}

/**
 * 删除投票的选项 TODO 将来投票启动之后，不允许随便删除
 *
 * @param optionId
 *            投票选项编号
 *
 */
api.delVoteOption = function (optionId, callback) {
    let cnt = {
        optionId: optionId,
    };
    util.call(baseUrl + 'delVoteOption', cnt, callback);
}

/**
 * 投票
 *
 * @param voteId
 *            投票编号
 * @param userId
 *            用户编号
 * @param selections
 *            选项JSON数组</br>
 *            [{"option":"134441","opt","2"},{"option":"234234","opt","1"}]</br>
 *            option是指VoteOption编号，opt是指具体选项：</br>
 *            OPT_ABSTAINED = 0;</br>
 *            OPT_AGREE = 1;</br>
 *            OPT_DISAGREE = 2;</br>
 * @param weight
 *            用户的投票权重
 * @param remark
 *            备注
 *
 */
api.vote = function (voteId, userId, selections, weight, remark, callback) {
    let cnt = {
        voteId: voteId,
        userId: userId,
        selections: selections,
        weight: weight,
        remark: remark,
    };
    util.call(baseUrl + 'vote', cnt, callback);
}

/**
 * 删除投票的选项 TODO 将来投票启动之后，不允许随便删除
 *
 * @param voteId
 *            投票编号
 *
 */
api.getVoteDetail = function (voteId, callback) {
    let cnt = {
        voteId: voteId,
    };
    util.call(baseUrl + 'getVoteDetail', cnt, callback);
}

/**
 * 获取用户的选票
 *
 * @param voteId
 *            投票编号
 * @param userId
 *            用户编号
 *
 */
api.getVoteTicket = function (voteId, userId, callback) {
    let cnt = {
        voteId: voteId,
        userId: userId,
    };
    util.call(baseUrl + 'getVoteTicket', cnt, callback);
}

export default {api, type, opt}
