import axios from "axios"
import store from "@/store"
import { getToken } from "@/utils/auth.js"

// 创建 axios 实例
// 请求的实际url =  base url + request url
const service = axios.create({
  // baseURL: process.env.BASE_API, // 可以根据环境变量设置baseurl
  baseURL: "http://r740.youlishu.com:8888",
  // withCredentials: true, // 跨域请求时发送cookies
  timeout: 5000 // 请求超时时间
})

// 请求拦截
service.interceptors.request.use(
  config => {
    // 判断是否存在token，如果存在的话，则每个http header都加上token
    if (!config.headers.hasOwnProperty("Authorization") && store.getters.token) { // eslint-disable-line 
      config.headers.Authorization = getToken()
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截

export default service
