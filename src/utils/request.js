import axios from "axios"
//引入vant的toast组件
// import { Toast } from 'vant';
// 请求头配置基础、 公共的配置（ baseUrl, timeOut, withcookies）
const service = axios.create({
        // baseURL: processs.evn.BUE_APP_BASE_URL,
        baseURL: 'http://120.24.252.91:3000',
        withCredentials: true, //跨域的状态下是否携带参数
        timeout: 6000, //超时时间
    })
    // 也可以这样写axios.defaults.baseURL = processs.evn.BUE_APP_BASE_URL,
 
// 请求拦截
service.interceptors.request.use(config => {
    //每次发送请求要进行的公共的操作
    //loading
    // Toast.loading({
    //     message: '加载中...',
    //     forbidClick: true, //是否开启禁止单击
    // });
    // token
    // let token = Window.localStorage.getItem('token')
    // config.header.token = token || ''
//标准写法
    // config.headers['Authorization'] = 'Bearer '+ token
    return config
}, err => {
    throw Error(err)
//或者   
    Promise.reject(err)
 
})
 
//响应拦截
service.interceptors.response.use(result => {
    const res = result.data
    // if (res.status && res.status !== 200) {
    //     // 登录超时,重新登录
    //     if (res.status === 401) {
    //         store.dispatch('FedLogOut').then(() => {
    //             location.reload()
    //         })
    //     }
    //     return Promise.reject(res || 'error')
    // } else {
    //     return Promise.resolve(res)
    // }
    return Promise.resolve(res)
}, err => {
    return Promise.reject(err)
})
 
export default service