// let baseURL= '/api'
let baseURL='http://loomee.nft.api.tulan123.com/api'
import axios from 'axios'
import Vue from 'vue'
import { ACCESS_TOKEN } from '@/store/mutation-types'
async function upImg(api,parmas){
  const res =await axios({
    url:baseURL+`${api}`,
    method: 'POST',
    data:parmas,
    headers:{
      'Content-Type':'multipart/form-data;charset=UTF-8',
      'Authorization':'Bearer '+Vue.ls.get(ACCESS_TOKEN)
    }
  })
  return res
}

export{
    upImg,
}

