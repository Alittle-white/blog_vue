import request from '../utils/request1'

let publicurl = 'http://120.24.252.91:3000'

/**
 * @msg: 获取首页数据
 * @param {type} 
 * @return: 
 */
export function index(data) {
  return request.request({
    url: `${publicurl}/post`,
    method: 'POST',
    data,
  })
}