import util from '../util'

const baseUrl = util.hosturl + "/org/";

let api = {};


/**
 *股东类型
 */
const share = {
    SHARE_NONE: 20,// 非股东
    SHARE_SHAREHOLDER: 21, //股东
    SHARE_REPRESENTATIVE: 22,//股东代表
};

/**
 * 董事会成员类型
 */
const duty = {
    DUTY_NONE: 10,//非董事
    DUTY_DIRECTOR: 11,// 董事
    DUTY_CHAIRMAN: 12,// 董事长（主席）
    DUTY_VICE_CHAIRMAN: 13,// 副董事长
};

/**
 * 监事会成员类型
 */
const visor = {
    VISOR_NONE: 10,// 非监事
    VISOR_SUPERVISOR: 11,// 监事
    VISOR_CHAIRMAN: 12,// 监事长（主席）
    VISOR_VICE_SUPERVISOR: 13,// 副监事长
}

/**
 * 创建组织
 *
 * @param name
 *            组织名称（必填）
 * @param code
 *            组织机构代码（必填）
 * @param province
 *            省（必填）
 * @param city
 *            市（必填）
 * @param district
 *            区（必填）
 * @param address
 *            地址（必填）
 * @param imgOrg
 *            组织机构证书
 * @param imgAuth
 *            组织授权证书
 * @param shareAmount
 *            总股份数
 * @return 成功创建的组织对象
 */
api.createORG = function (name, code, province, city, district, address, imgOrg, imgAuth, shareAmount, callback) {
    let cnt = {
        name: name,
        code: code,
        province: province,
        city: city,
        district: district,
        address: address,
        imgOrg: imgOrg,
        imgAuth: imgAuth,
        shareAmount: shareAmount,
    };
    util.call(baseUrl + 'createORG', cnt, callback);
}

/**
 * 更新组织信息
 *
 * @param orgId
 *            组织编号（必填）
 * @param province
 *            省（可空）
 * @param city
 *            市（可空）
 * @param district
 *            区（可空）
 * @param address
 *            地址（可空）
 * @param imgOrg
 *            组织机构证书（可空）
 * @param imgAuth
 *            组织授权证书（可空）
 * @param shareAmount
 *            总股份数（可空）
 * @return 成功更新的组织对象
 */
api.setORG = function (orgId, province, city, district, address, imgOrg, imgAuth, shareAmount, callback) {
    let cnt = {
        orgId: orgId,
        province: province,
        city: city,
        district: district,
        address: address,
        imgOrg: imgOrg,
        imgAuth: imgAuth,
        shareAmount: shareAmount,
    };
    util.call(baseUrl + 'setORG', cnt, callback);
}


/**
 * 获取组织列表
 *
 * @param count
 *            数量（用于分页）
 * @param offset
 *            起始位置（从零开始，用于分页）
 * @return 返回组织列表
 */
api.getORGs = function (count, offset, callback) {
    let cnt = {
        count: count,
        offset: offset,
    };
    util.call(baseUrl + 'getORGs', cnt, callback);
}

/**
 * 获取用户的组织列表
 *
 * @param userId
 *            用户编号
 * @return 返回组织列表
 */
api.getUserORGs = function (userId, callback) {
    let cnt = {
        userId: userId,
    };
    util.call(baseUrl + 'getUserORGs', cnt, callback);
}


/**
 * 导入用户
 *
 * @param orgId
 *            组织编号
 * @param mobile
 *            手机号
 * @param name
 *            名称
 * @param idNumber
 *            身份证号
 * @param share
 *            股东身份类型
 * @param weight
 *            股东权重
 * @param duty
 *            董事会职务类型
 * @param visor
 *            监事会职务类型
 *
 */
api.importUser = function (orgId, mobile, name, idNumber, share, weight, duty, visor, callback) {
    let cnt = {
        orgId: orgId,
        mobile: mobile,
        name: name,
        idNumber: idNumber,
        share: share,
        weight: weight,
        duty: duty,
        visor: visor,
    };
    util.call(baseUrl + 'importUser', cnt, callback);
}


/**
 * 手机号密码登录
 *
 * @param mobile
 *            电话号码
 * @param pwd
 *            密码
 * @param 登录业务对象
 */
api.loginByMobileAndPwd = function (mobile, pwd, callback) {
    let cnt = {
        mobile: mobile,
        pwd: pwd,
    };
    util.call(baseUrl + 'loginByMobileAndPwd', cnt, callback);
}

/**
 * 二次登录，进入对应组织
 *
 * @param userId
 *            用户编号
 * @param orgId
 *            组织编号
 * @return 组织登录业务对象
 */
api.loginInORG = function (orgId, userId, callback) {
    let cnt = {
        orgId: orgId,
        userId: userId,
    };
    util.call(baseUrl + 'loginInORG', cnt, callback);
}


/**
 * 获取组织董事会成员列表
 *
 * @param orgId
 *            组织编号
 * @param count
 *            数量（用于分页）
 * @param offset
 *            起始位置（从零开始，用于分页）
 * @return 董事会成员列表
 */
api.getORGDirectors = function (orgId, count, offset, callback) {
    let cnt = {
        orgId: orgId,
        count: count,
        offset: offset,
    };
    util.call(baseUrl + 'getORGDirectors', cnt, callback);
}


/**
 * 获取组织股东成员列表
 *
 * @param orgId
 *            组织编号
 * @param count
 *            数量（用于分页）
 * @param offset
 *            起始位置（从零开始，用于分页）
 * @return 股东成员列表
 */
api.getORGShareholders = function (orgId, count, offset, callback) {
    let cnt = {
        orgId: orgId,
        count: count,
        offset: offset,
    };
    util.call(baseUrl + 'getORGShareholders', cnt, callback);
}


/**
 * 获取组织监事会成员列表
 *
 * @param orgId
 *            组织编号
 * @param count
 *            数量（用于分页）
 * @param offset
 *            起始位置（从零开始，用于分页）
 * @return 监事会成员列表
 */
api.getORGSupervisors = function (orgId, count, offset, callback) {
    let cnt = {
        orgId: orgId,
        count: count,
        offset: offset,
    };
    util.call(baseUrl + 'getORGSupervisors', cnt, callback);
}

export default {api, share, duty, visor}
