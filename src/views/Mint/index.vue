<template>
  <div class="mint">
     <div class="first">
        <h1>First Round</h1>
        <span>EST-Time:&nbsp;{{timezone.tz(new Date(startTime),'Asia/New_York').format('YYYY-MM-DD kk:mm:ss')}} To {{timezone.tz(new Date(endTime),'Asia/New_York').format('YYYY-MM-DD kk:mm:ss')}}</span>
        <span>SGT-Time:&nbsp;{{timezone.tz(new Date(startTime),'Asia/Shanghai').format('YYYY-MM-DD kk:mm:ss')}} To {{timezone.tz(new Date(endTime),'Asia/Shanghai').format('YYYY-MM-DD kk:mm:ss')}}</span>
        <div class="content">
          <img src="@/assets/images/round_img_1.png" alt="">
          <div class="wallet">
            <div v-if="!account">
              <img src="@/assets/images/gt.png" alt="">
              <span>Please connect wallet</span>
            </div>
            <div v-if="account">
              <span>{{ splitNum(0,7,account)+'***'+splitNum(account.length-5,account.length,account)}}</span>
            </div>
            <div>
              <h1>{{hasMintCount}}/{{everyMintTotal}}</h1>
              <span>Mint Total:{{hasMintTotal}} / {{maxMintCount}}</span>
            </div>
            <div>
              <span>{{filAmount}} FIL</span>
              <div>
                <span @click="reduce">
                 <img src="@/assets/images/reduce.png" alt="">
                </span>
                <!-- <input type="number" v-model="number"> -->
                <a-input-number disabled="true" class="number"  id="inputNumber" v-model:value="number" :min="1" :max="1000000000000000000000000" />

               <span @click="add">
                  <img src="@/assets/images/add.png" alt="">
               </span>
              </div>
            </div>
            <button @click="connectWallet()" v-if="!account">Wallet not connected</button>
            <div  v-else class="btnsw">
               <button @click="disconnect()">
                  Disconnect
               </button>
               <button>
                  <span class="mint_b" @click="filApprove()" v-if="!isMint">MINT</span>
                  <loading v-else/>
               </button>
            </div>
            <span>Time left：{{time}}</span>
          </div>
        </div>
     </div>
   
    <!-- <Footer /> -->
  </div>
</template>
<script>
import {
  ref,
  getCurrentInstance,
  onMounted,
  defineComponent,
  reactive,
  toRefs,
  computed
} from "vue";
import Footer from "@/components/Footer/index.vue";
import loading from '@/components/loading/index.vue'
import { splitNum } from '@/utils'

import {Approve, 
    approveFil,
    isETH,
    allowance,
    getStartTime,
    getEndTime,
    getHasEveryMintCount,
    getEveryMintTotal,
    getMAXTotal,
    gethasMintTotal,
    getOnePrice,
    canMintNumWhitelist,
    maxMintAmount,
    hasMintNums,
    whitelistSale,
    balance,
    changeAccount
} from '@/web3/methods'
import { userBaseStore } from '@/store/base.js'
import moment from 'moment'
import timezone from 'moment-timezone'
import { notification } from 'ant-design-vue';


export default defineComponent({
  setup() {
     const proxy = getCurrentInstance()?.appContext.config.globalProperties;
     const baseStore = userBaseStore()
     const data = reactive({
       icons:proxy.$icons,
       isMint:false,
       number:1,
       account:null,
       sign:null,
       startTime:null,
       endTime:null,
       hasMintCount:0,
       everyMintTotal:0,
       maxMintCount:0,
       hasMintTotal:0,
       onePrice:0,
       canMintNumWhites:0,
       hasMintNum:0,
       time:null,
       balance:0

     })
     const reduce =()=>{
       if(data.number>=2){
         data.number-=1
       }
     }
     const add =()=>{
       if(data.canMintNumWhites==0) return
       if(data.number == data.canMintNumWhites) return
       data.number+=1
     }
     const filAmount = computed(()=>{
       return data.onePrice* data.number
     })

     const cutDown = ()=>{  //倒计时
        if(data.endTime){
          let now = moment().valueOf()
          let end = moment(data.endTime).valueOf()
          let diff = moment(end).diff(now);
           let hours =  moment.duration(diff).hours() 
           let days = moment.duration(diff).days() 
           let mins =  moment.duration(diff).minutes() 
           let secs= moment.duration(diff).seconds() 
           if(now>=end){
            data.time='Time is End'
            return
           }
           data.time = `${days}days ${hours}hours ${mins}minutes ${secs} seconds`
           
        }
     }

     const connectWallet = async ()=>{ //链接钱包并签名
      let res = await Approve()
       console.log(res)
       if(!res){
         message.error('用户取消切换bsc链')
         return
       }
       data.sign = res.sign
       data.account=res.account
     }

     const getBalance = async (address)=>{
      if(address){
        let res = await balance(address)
        data.balance = res
      }
     }

     const filApprove = async()=>{ 
          let allowances = await allowance(data.account)
          if(allowances){
            console.log('已经授权')
            if(data.canMintNumWhites< data.number){
              notification['warning']({
                  message: `Left ${data.canMintNumWhites} mint`,
                  description:'',
                  duration:2
               })
               return
            }
            if(balance<filAmount.value){  //余额不足
              notification['warning']({
                  message: 'Sorry, your credit is running low',
                  description:'',
                  duration:2
               })
               return
            }
            if(moment().valueOf()<moment(startTime).valueOf()||moment().valueOf()>moment(endTime).valueOf()){ //超时
                notification['warning']({
                  message: 'Time out of range',
                  description:'',
                  duration:2
               })
               return
            }
            data.isMint = true
            let res = await whitelistSale(data.number,data.account)
            data.isMint = false
            if(res.status){
               notification.open({
                  message: 'Mint success',
                  description:'',
                  duration:2
               })
               hasMintTotal()
               hasmintCount()
               canMintNumWhites()
            }
          }else{
             let res = await approveFil(data.account) //授权
             console.log(res)
          }
          console.log(allowances)
         
     }

    const startTime= async()=>{ //活动开始时间
      let res = await getStartTime()
      if(res){
         data.startTime = moment(res*1000).format('YYYY-MM-DD HH:mm:ss')
      }
    } 

    const endTime= async()=>{ //活动开始时间
      let res = await getEndTime()
      if(res){
         data.endTime = moment(res*1000).format('YYYY-MM-DD HH:mm:ss')
         setInterval(()=>{
           cutDown(res)
         },1000)
      }
    } 
    const hasmintCount=async()=>{ //每轮已经授权的
      let res = await getHasEveryMintCount()
      data.hasMintCount = res
    }

    const everyMintTotal = async()=>{ //每轮最大可mint数量
       let res = await getEveryMintTotal()
       data.everyMintTotal = res
    }

    const maxCount = async()=>{
      let res =  await getMAXTotal()
      data.maxMintCount = res
    }

    const hasMintTotal= async()=>{
       let res =  await gethasMintTotal()
       data.hasMintTotal = res
    }
    const onePrice = async()=>{
       let res =  await getOnePrice()
       data.onePrice = res
    }
    const canMintNumWhites = async(account)=>{ //白名单最大可购买数量 (预售阶段)
       let res =  await canMintNumWhitelist(account)
       console.log(res,'剩余可mit的')
       data.canMintNumWhites = res
    }
   
    const hasMintNum = async(account)=>{ 
       let res =  await hasMintNums(account)
       data.hasMintNum = res
    }

    const isbscNetwork = async()=>{
      let res = await isETH()
      if(!res){
        notification['warning']({
          message: `Please select ETH Chain`,
          duration:2
        })
        return
      }
    }
   
    const disconnect = ()=>{
      localStorage.clear()
      window.location.reload()
    }
    const changeMyAccount = async()=>{
         await changeAccount()
          
    }

    onMounted(() => {
       data.account = localStorage.getItem('account') || userBaseStore.account
       isbscNetwork()
       startTime()
       endTime()
       hasmintCount()
       everyMintTotal()
       maxCount()
       hasMintTotal()
       onePrice()
       canMintNumWhites(data.account)
       hasMintNum(data.account)
       getBalance(data.account)
       changeMyAccount()
    });
    return {
      ...toRefs(data),
      reduce,
      add,
      filAmount,
      connectWallet,
      filApprove,
      disconnect,
      splitNum,
      timezone
    };
  },
  components: {
    Footer,
    loading
  },
 
});
</script>

<style scoped lang='scss'>
@import "./index.scss";
</style>
<style scoped>
*{
  font-family: kavoon;
}
</style>
<style>
.ant-notification-notice-closable .ant-notification-notice-message{
  font-family: kavoon;
}
</style>