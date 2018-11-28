import util from '../util'

const baseUrl = util.hosturl + "/user/";

let api = {};


/**
 * 根据编号获取用户信息
 */
api.getUserById = function (userId, callback) {
    let cnt = {
        userId: userId,
    }
    util.call(baseUrl + 'getUserById', cnt, callback);
}

/**
 * 用户名密码注册
 */
api.registByNameAndPwd = function (name, pwd, callback) {
    let cnt = {
        name: name,
        pwd: pwd,
    };
    //返回之前，应该先拦截并保存userSession

    util.call(baseUrl + 'registByNameAndPwd', cnt, callback)
}

/**
 * 用户名密码登录
 */
api.loginByNameAndPwd = function (name, pwd, callback) {
    let cnt = {
        name: name,
        pwd: pwd,
    }
    util.call(baseUrl + 'loginByNameAndPwd', cnt, callback);
}

/**
 * 匿名登录
 */
api.loginByAnonymous = function (callback) {
    let cnt = {}
    util.call(baseUrl + 'loginByAnonymous', cnt, callback);
}

export default {api}
