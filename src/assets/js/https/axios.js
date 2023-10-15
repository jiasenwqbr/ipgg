import axios from 'axios'
import Vue from 'vue'
import store from '@/store/index'
import notification from 'ant-design-vue/es/notification'
import Router from 'vue-router'
import routerFrom from '@/router'

import {
    ACCESS_TOKEN
  } from '@/store/mutation-types'
let baseURL='/api'
// let baseURL= 'http://loomee.nft.api.tulan123.com/api'

const instance = axios.create({
    baseURL: baseURL,
    timeout: 2000,
    // withCredentials: true,
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json;charset=UTF-8;multipart/form-data;boundary'
    }
})

// 添加请求拦截器，在发送请求之前添加请求头
instance.interceptors.request.use(
    config => {
        config.data = JSON.stringify(config.data);
        const token = Vue.ls.get(ACCESS_TOKEN)
        if(token){
            // config.headers['token'] = token;
            config.headers.common['Authorization']='Bearer '+ token
        }
        return config;
    },
    error => {
        console.log(error);
        return Promise.reject(error);
    }
);

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    if(response.status){
        if (response.code == '4000' || response.code == '3000') {
            return Promise.resolve(response.data);
        }
        if (response.code == '202' || response.code == '201'||response.code == '200') {
    
            return Promise.resolve(response.data);
        }
        if(response.data.code == '401'|| response.data.code == '1003' ){
              store.dispatch('Logout').then(() => {
                routerFrom.replace({path:'/'})
                 window.location.reload()
              })  
        }
    }
    return Promise.resolve(response.data)
}, function (err) {
    if (err && err.response) {
        switch (err.response.code) {
            case 400:
                err.message = '错误的请求';
                break;
            case 401:
                console.log(err.response.code,'err.response.status')
                localStorage.clear();
                Vue.ls.set(ACCESS_TOKEN,'')
                Router.replace("/")
                err.message = '未授权，请重新登录';
                break;
            case 403:
                err.message = '拒绝访问';
                break;
            case 404:
                err.message = '请求错误,未找到该资源';
                break;
            case 405:
                err.message = '请求方法未允许';
                break;
            case 408:
                err.message = '请求超时';
                break;
            case 500:
                err.message = '服务器端出错';
                break;
            case 501:
                err.message = '网络未实现';
                break;
            case 502:
                err.message = '网络错误';
                break;
            case 503:
                err.message = '服务不可用';
                break;
            case 504:
                err.message = '网络超时';
                break;
            case 505:
                err.message = 'http版本不支持该请求';
                break;
            default:
                err.message = `connect error ${err.response.status}`;
        }
    } else {
        err.message = '连接到服务器失败';
    }
    return Promise.reject(err)
})

// 返回失败提示
function errorState (response) {
    store.state.isLoading=false
    if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
        return response
    }
}
// 返回成功提示
function successState (res) {
    store.state.isLoading=false
    return res
}

function apiAxios (method, url, params, ischeck = false, isadd = false) {
    let urls
    if (isadd) {
        urls = `${url}/${params}`
    } else {
        urls = url
    }
    let httpDefault = {
        method: method,
        url: urls,
        timeout: 20000
    }

    if (!ischeck && (method == 'GET' || method == 'DELETE' ||  method == 'PUT')) {
        httpDefault.params = method === 'GET' || method === 'DELETE' || method === 'PUT' ? params : null
    }
    if (ischeck) {
        httpDefault.data = method === 'POST'|| method === 'PUT'|| method === 'DELETE'? params : null
    }
    return new Promise((resolve, reject) => {
        instance(httpDefault).then(res => {
            successState(res)
            resolve(res)
        }).catch(error => {
            errorState(error)
            reject(error)
        })
    })
}

export default {
    install: function (Vue) {
        Vue.prototype.host = baseURL
        Vue.prototype.getHttp = (url, params, ischeck, isadd) => apiAxios('GET', url, params, ischeck, isadd)
        Vue.prototype.postHttp = (url, params, ischeck) => apiAxios('POST', url, params, ischeck)
        Vue.prototype.putHttp = (url, params, ischeck,isadd) => apiAxios('PUT', url, params, ischeck,isadd)
        Vue.prototype.deleteHttp = (url, params, ischeck,isadd) => apiAxios('DELETE', url, params, ischeck,isadd)
    }
}
