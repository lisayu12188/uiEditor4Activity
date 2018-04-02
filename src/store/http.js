import axios from "axios"
import Vue from "../main"
// import Config from '../../config/index'


const instance = axios.create({
  withCredentials:true,
  baseURL: 'http://dev.91jkys.com:8089',
  timeout: 5000,

//  headers: {'X-auth-token': getToken()},
});
// instance.updateToken = (token) => {
//     instance.defaults.headers['X-auth-token'] = token||getToken()
// }


//拦截重复请求(规则:同url同method视为同一请求,必须请求返回结果才能继续请求)
const CancelToken = axios.CancelToken;
let requesting={};





//添加请求拦截器

//添加响应拦截器


let getFn=instance.get;

instance.get=function(url,data={},config={}){
  config.params=data;
  return getFn(url,config)
}

export default instance;
