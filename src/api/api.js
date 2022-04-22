import http from "../utils/request"
 
//首页
export function banner(data) {
    return http.get('/get', data)
}