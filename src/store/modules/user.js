import { login, getInfo } from "@/apis/user"
import { getToken, setToken, removeToken } from "@/utils/auth"
import router, { resetRouter } from "@/router"

const state = {
  token: getToken(),
  name: "",
  avatar: "",
  roleName: "",
  roles: []
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_ROLENAME: (state, roleName) => {
    state.roleName = roleName
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {
  // 用户登录
  login({ commit }, userInfo) {
    const { userName, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ userName: userName.trim(), password: password }).then(res => {
        const ret = res.data
        if (!ret || ret.code !== "200") {
          reject("账号或密码不正确")
        } else {
          const { data } = ret
          commit("SET_TOKEN", data.token)
          setToken(data.token)
          resolve()
        }
      }).catch(error => {
        reject(error)
      })
    })
  },
  // 获取用户信息
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(res => {
        const ret = res.data
        if (!ret || ret.code !== "200") {
          reject("验证失败, 请重新登录")
        }
        const { data } = ret
        const { realName, avatar, roleName, roleCode } = data
        commit("SET_ROLES", [roleCode])
        // commit('SET_ROLES', ['UNIT_ADMIN'])
        // commit('SET_ROLES', ['AUDITOR'])
        commit("SET_ROLENAME", roleName)
        commit("SET_NAME", realName)
        commit("SET_AVATAR", avatar)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  // 退出登录
  logout({ commit, state, dispatch }) {
    return new Promise((resolve, reject) => {
      commit("SET_TOKEN", "")
      commit("SET_ROLES", [])
      removeToken()
      resetRouter()
      resolve()
    })
  },
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit("SET_TOKEN", "")
      commit("SET_ROLES", [])
      removeToken()
      resolve()
    })
  },
  changeRoles({ commit, dispatch }, role) {
    return new Promise(async resolve => { // eslint-disable-line 
      const token = role + "-token"
      commit("SET_TOKEN", token)
      setToken(token)
      const { roles } = await dispatch("getInfo")
      resetRouter()
      // 根据权限角色生成可访问路由表
      const accessRoutes = await dispatch("permission/generateRoutes", roles, { root: true })
      router.addRoutes(accessRoutes)
      resolve()
    })
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
