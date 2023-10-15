import { web3 } from "./config"
import {message} from 'ant-design-vue'
import {  ippg_contract,fil_contract,fil_token,ippg_token} from './config'
import { userBaseStore } from '@/store/base.js'

  
  

 const isWeb3 = ()=>{
    if (!web3) {
      message.error('请安装mateMask')
      return false
    }
    return true
   }
  
  export const isETH = function () { //判断是否是以太坊链
    return web3.utils.hexToNumber(window.ethereum.chainId) === 4
  }

  export const switchChain = () => {
    window.ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [
        {
          chainId: web3.utils.numberToHex(4),
          chainName: 'Rinkeby Test',
          nativeCurrency: {
            name: 'RinkebyETH',
            symbol: 'RinkebyETH', // 2-6 characters long
            decimals: 18
          },
          rpcUrls: ['https://rinkeby.infura.io/v3/'],
          blockExplorerUrls: ['https://rinkeby.etherscan.io']
        }
      ]
    }).then((res) => {
      console.log(res)
    }).catch(() => {
      message.error('用户取消切换ETH链')
    })
  }

   const Approve = async () => {
    isWeb3()
    if(!isETH()){
      switchChain()
    }
    const result= await window.ethereum.request({
       method: 'eth_requestAccounts'
    });
    if(result.length > 0){
        try{
          const signs = await sign(result[0])
          return  signs
        }catch(e){
          return null;
        }
        
    }
  }  
  const sign=async function(account){
    if(!account){
     message.warning('请链接钱包');
       return
    }
  const baseStore = userBaseStore()
   const signResult= await web3.eth.personal.sign(web3.utils.utf8ToHex(`Welcome to IPPG!`), account)

   localStorage.setItem('account',account)
   localStorage.setItem('signResult',signResult)
   baseStore.setAccount(account)
   return {
     sign:signResult,
     account:account
   }
} 

const approveFil = async (address)=>{ // 对fil授权
  try {
    const res = await fil_contract.methods
      .approve(
        ippg_token,
        '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
      )
      .send({
        from: address,
        gas: '230000',
        gasPrice: await web3.eth.getGasPrice(),
      });
      console.log(res)
    return res;
  } catch (err) {
    console.log(err);
    return err?.message || '用户拒绝授权Fil';
  }
}

async function balance(address) { //fil余额
  
  try {
    const res = await fil_contract.methods.balanceOf(address).call();
    return web3.utils.fromWei(res, 'ether');
  } catch (err) {
    console.log(err);
  }
}

const allowance = async (address)=>{ //是否授权过
  try {
    const res = await fil_contract.methods.allowance(address, ippg_token).call();
    return Number(res);
  } catch (err) {
    console.log(err);
  }
}

const getStartTime = async()=>{ //开始时间
  try{
    let res = await ippg_contract.methods.saleStartTime1().call()
    return res
  }catch(err){

  }
}


const getEndTime = async()=>{ //结束时间
  try{
    let res = await ippg_contract.methods.saleEndTime1().call()
    return res
  }catch(err){
    console.log(err)
  }
}

const getHasEveryMintCount = async()=>{ //每轮已经mint的数量
  try{
    let res = await ippg_contract.methods.hasMintAmountTotal().call()
    console.log(res,'数量')
    return res
  }catch(err){

  }
}
const getEveryMintTotal = async()=>{
  try{
    let res = await ippg_contract.methods.canMintAmountTotal().call()
    return res
  }catch(err){

  }
}

const getMAXTotal = async()=>{ //总的nft数量
  try{
    let res = await ippg_contract.methods.MAX_NFTS().call()
    return res
  }catch(err){
  }
}

const gethasMintTotal = async()=>{ //已经mint的总数量
  try{
    let res = await ippg_contract.methods.totalSupply().call()
    return res
  }catch(err){
  }
}

const getOnePrice = async()=>{  //每个nft的fil价格
  try{
    let res = await ippg_contract.methods.price().call()
    return  web3.utils.fromWei(res, 'ether');
  }catch(err){
  }
}

const canMintNumWhitelist = async( address)=>{ //白名单最大可购买数量 (预售阶段)
  try{
    let res = await ippg_contract.methods.canMintNumWhitelist(address).call()
    console.log(res)
    return res;
  }catch(err){
  }
  
}

const maxMintAmount = async()=>{ //最大可购买数量 (公售阶段)
  try{
    let res = await ippg_contract.methods.maxMintAmountByAddress().call()
    return res;
  }catch(err){
  }
  
}


const hasMintNums = async(address)=>{ //已经mint的数量 (公售阶段)
  try{
    let res = await ippg_contract.methods.hasMintNumByAddress(address).call()
    return res;
  }catch(err){
  }
  
}

const whitelistSale = async(amount,address)=>{  //预售mint方法
  try{
    let res = await ippg_contract.methods.whitelistSale(amount).send({
      from: address,
      gas: '230000',
      gasPrice: await web3.eth.getGasPrice(),
    })
    return res;
  }catch(err){
  }
}
const changeAccount = async()=>{  //切换钱包地址
  try{
    let res =  await window.ethereum.on('accountsChanged',function(re){
      console.log(re)
      if(re[0]){
       localStorage.clear()
       window.location.reload()
      }else{
        return false
      }
    })
  }catch(err){
    console.log(err)
  }
}



export{
  Approve,
  approveFil,
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
}

