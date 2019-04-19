import axios from 'axios'
//定义fetch函数，config为配置
export function fetch(config){
   //返回promise对象
    return new Promise((resolve,reject) =>{
       //创建axios实例，把基本的配置放进去
        const instance = axios.create({
           //定义请求文件类型
            headers:{
                'Content-Type': 'application/json',
            },      
            timeout: 3000,
            //定义请求根目录
            baseURL: 'http://101.132.106.244:8000/'
        });
       //请求成功后执行的函数
        instance(config).then(res =>{
            console.log(res);
            resolve(res);
        //失败后执行的函数
        }).catch(err => {
            console.log(err);
            reject(err);
        })
    });
}
// http request 请求拦截器，有token值则配置上token值
axios.interceptors.request.use(
    config => {
        if (token) {  // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
            config.headers.Authorization = token;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    });
 
// http response 服务器响应拦截器，这里拦截401错误，并重新跳入登页重新获取token
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 这里写清除token的代码
                    router.replace({
                        path: 'login',
                        query: {redirect: router.currentRoute.fullPath}//登录成功后跳入浏览的当前页面
                    })
            }
        }
        return Promise.reject(error.response.data) 
    });