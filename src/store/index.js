import Vue from "vue"
import Vuex from "vuex"
import getters from "./getters"
Vue.use(Vuex)

// 参考： https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context("./modules", true, /\.js$/)

// 自动 import modules
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1")
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

// 点击特定的场景，根据场景id不同在事项页面加载不同的事项
const store = new Vuex.Store({
  state: {
    sceneId: null
  },
  actions: {
    setSceneId({ commit }, id) {
      commit("_sceneId", id)
    }
  },
  mutations: {
    _sceneId(state, id) {
      state.sceneId = id
    }
  },
  modules,
  getters
})

export default store
