<template>
   <div class="app-warp">
       <header class="header-pc" :style="'background:'+`rgba(18, 18, 18, `+ opacity +`)`">
           <div class="header-l">
              <span class="header-item" >
                <img src="@/assets/images/logo.png" alt="" class="logo" @click="routePath('/Home')">
              </span>
              
          </div>
          <div class="header-r">
            <span class="outItem " :class="[activeRouter=='/Home'?'active':'']"  @click="routePath('/Home')">HOME</span>
            <a-tooltip placement="bottom" color="#fff">
               <template #title>
                  <span class="come">Coming Soon</span>
               </template>
               <span class="outItem">UTILITY</span>
            </a-tooltip>

             <a-tooltip placement="bottom" color="#fff">
               <template #title>
                  <span class="come">Coming Soon</span>
               </template>
               <span class="outItem">SHOP</span>
            </a-tooltip>
             <span class="outItem" :class="[activeRouter=='/Mint'?'active':'']"  @click="routePath('/Mint')">MINT</span>
             <span alt="" class="i img_i_1" @click="link('https://loomeeworld.com/')"></span>
             <span alt="" class="i img_i_2" @click="link('https://twitter.com/IPPG_NFT')"></span>
             <span alt="" class="i img_i_3"></span>
             <span alt="" class="i img_i_4" @click="link('https://www.instagram.com/ippg_nft/tagged/')"></span>
            
          </div>
       </header>

       <div class="header-phone" :style="'background:'+`rgba(18, 18, 18, `+ opacity +`)`">
          <img src="@/assets/images/logo.png" alt="" class="logo" @click="routePath('Home')" ref="iconlogo">
          <img src="@/assets/images/list.png"  alt="" class="list" @click="isDrawer=true">
       </div>

       <a-drawer
            :bodyStyle='drawerStyle'
             placement="left"
            :closable="false"
            :visible="isDrawer"
            @close="isDrawer=!isDrawer"
            
            width='70%'
            class="mylist"
            >
            <p class="title">
              <img src="@/assets/images/close.png" alt="" class="colse" @click="isDrawer=false">
            </p>
            <p class="ment-item" @click="routePath('Home');isDrawer=false">
               <span class="name-text">HOME</span>
            </p>
            <p class="ment-item" >
               <span class="name-text" @click="comeSoon">UTILITY</span>
            </p>
            <p class="ment-item">
               <span class="name-text"  @click="comeSoon">SHOP</span>
            </p>
             <p class="ment-item">
               <span class="name-text"  @click="routePath('Mint');isDrawer=false">MINT</span>
            </p>
             <p class="ment-item" @click="link('https://loomeeworld.com/')">
               <span class="name-text"  @click="comeSoon">LOOMEE</span>
               <img src="@/icons/svg/loomee.svg" alt="" />
            </p>

            <p class="ment-item" @click="link('https://twitter.com/IPPG_NFT')">
               <span class="name-text">TWITTER</span>
               <img src="@/icons/svg/twitter.svg" alt="" >
            </p>

             <p class="ment-item">
               <span class="name-text"  @click="comeSoon">DISCORD</span>
              <img src="@/icons/svg/game.svg" alt="">
            </p>

            <p class="ment-item" @click="link('https://www.instagram.com/ippg_nft/tagged/')">
               <span class="name-text">INSTAGRAM</span>
               <img src="@/icons/svg/phone.svg" alt="" >
            </p>
          
       </a-drawer>
       <router-view/>
   </div>
  
</template>
<script>
import {onMounted,reactive, toRefs,ref,watch,getCurrentInstance,computed } from 'vue'
import { userBaseStore } from '@/store/base.js'
import {  useRouter } from 'vue-router'
import { message } from 'ant-design-vue';
const drawerStyle={
  background:'rgba(18, 18, 18,1)',
  padding:0
}

export default{
   setup(){
      const {proxy } = getCurrentInstance()
      const baseStore = userBaseStore()
      let opacity= ref(0)
      let $icons =proxy.$icons
      const router = useRouter()
      let isDrawer=ref(false)
      const data = reactive({
         activeRouter:''
      })
    
      const routePath=((route)=>{
            data.activeRouter =route
            console.log(data.activeRouter)
            if(route!='Home'){
              proxy.opacity=1
            }
            if(route=='Home'){
              proxy.opacity=0
            }
            router.push({path:route})
        })
      const comeSoon=()=>{
         message.info('Coming Soon');
      }  
      const scroll=()=>{
         if(router.currentRoute.value.name!='Home'){
            proxy.opacity=1
           }
          window.document.body.onscroll = () => {
           let scrollTop = document.documentElement.scrollTop
            if(router.currentRoute.value.name!='Home'){
               proxy.opacity=1
              }else{
               proxy.opacity=scrollTop/1200
            }
          };
      }   
      const link =(url)=>{
         window.open(url)
      }
      onMounted(()=>{
        data.activeRouter =proxy.$router.currentRoute.value.fullPath
        window.addEventListener('resize',()=>{
          let clientWidth = document.documentElement.clientWidth
          if(clientWidth>=1200){
            proxy.isDrawer=false
            baseStore.setIsPC(false)
          }else{
             baseStore.setIsPC(true)
          }
        })
       proxy.scroll()
      })  
     return{
        isDrawer,
        $icons,
        drawerStyle,
        routePath,
        opacity,
        scroll,
        link,
        comeSoon,
        ...toRefs(data),
     }
   }
}
</script>
<style lang="scss" scoped>
 @import './base.scss';
</style>
<style>
  .ant-tooltip-inner{
    padding:6px 11px !important;
    border-radius: 8px;
    color: #121212 !important;
    font-family: hev !important;
}
.come{
   font-family: hev !important;
}
.ant-message-info span{
  font-family: hev !important;
}
</style>
