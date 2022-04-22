// import { Toast } from 'vant';
class Request {
    constructor(parms) {
        this.withBaseURL = parms.withBaseURL
        this.baseURL = parms.baseURL
    }
    request(parames) {
      console.log('---bug1')
        let url = parames.url || ''
        let method = parames.method || 'GET'
        let data = parames.data || ''
        this.withBaseURL = (url.indexOf('http') == -1)
        let requestUrl = this.withBaseURL ? this.baseURL + url : url;
      console.log('---bug2')

        let options = {
            method,
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(data)
        }
      console.log('---bug3')

        if (method == 'GET') {
      console.log('---bug4')

            delete options.body;
            let qs = '?';
            for (const key in parames.data) {
                qs += key + '=' + parames.data[key] + '&'
            }
            qs = qs.substring(0, qs.length - 1)
            qs.length > 1 ? requestUrl += qs : ''
        }
      console.log('---bug5')

        return fetch(requestUrl, options)
            .then(function (response) {
                return response.json();
            })
            .then(function (res) {
                return successFn(res)
            }).catch(function (err) {
                error(err)
            })
            
    }
}
function error(err) {
    // Toast({
    //     message: '网络不给力！请稍后再试',
    //     icon: 'none',
    //     duration: 3500
    // })
    alert('网络不给力！请稍后再试')
}
function successFn(data) {
    switch (data.code) {
        case 0:
            return data.data
            break;
        default:
            businessError(data.msg)
            break;
    }

}
function businessError(params) {
    // Toast({
    //     message: params,
    //     duration: 2000
    // })
    alert(params)
}
const request = new Request({
    baseURL: process.env.VUE_APP_API,
    withBaseURL: true
})


export default request
