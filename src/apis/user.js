import http from "@/utils/http"

// 登录接口
export function login(data) {
  return http({
    url: "/user/login",
    method: "post",
    data
  })
}
// 获取登录用户信息接口
export function getInfo(token) {
  return http({
    url: "/user/info",
    method: "get",
    params: { token }
  })
}
// 注册用户接口
export function register(data) {
  return http({
    url: "/user/register",
    method: "post",
    data
  })
}
// 修改用户手机号码接口
export function changePhone(params) {
  return http({
    url: "/user/change/phone",
    method: "get",
    params
  })
}
// 获取注册时的验证码
export function getRegisterCode(params) {
  return http({
    url: "/user/regist/registMessage",
    method: "get",
    params
  })
}
// 添加用户接口
export function addUser(data) {
  return http({
    url: "/user/add/user",
    method: "post",
    data
  })
}
// 删除用户接口
export function deleteUser(data) {
  return http({
    url: "/user/del/user",
    method: "post",
    data
  })
}
// 更改密码或者换绑手机号时获取验证码
export function getVerificationCode(params) {
  return http({
    url: "/user/get/verification/code",
    method: "get",
    params
  })
}
// 更改密码
export function updatePassword(data) {
  return http({
    url: "/user/update/pd",
    method: "post",
    data
  })
}
// 用户审核
export function examineUser(params) {
  return http({
    url: "/user/examine",
    method: "get",
    params
  })
}
// 用户审核列表
export function getExamineList(params) {
  return http({
    url: "/user/examine/list",
    method: "get",
    params
  })
}
// 用户列表
export function getUserList(params) {
  return http({
    url: "/user/user/list",
    method: "get",
    params
  })
}
// 用户修改账号
export function updateAccount(params) {
  return http({
    url: "/user/update/account",
    method: "get",
    params
  })
}
// 用户修改头像接口
export function updateIcon(icon) {
  return http({
    url: "/user/update/icon",
    method: "get",
    params: { icon }
  })
}
// 验证码验证
export function checkVerificationCode(params) {
  return http({
    url: "/user/check/verification/code",
    method: "get",
    params
  })
}

