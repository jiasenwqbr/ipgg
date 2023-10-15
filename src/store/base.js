import { defineStore } from 'pinia'


export const userBaseStore = defineStore('baseStore',{
    // id:'baseStore',
    state: () => {
      return { 
        menu:null,
        isPC:false,
        account:null
      }
    },
    
    actions: {
     setMenu(playload){
         try{
             this.menu=playload
          }catch(err){

         }
     },
     setIsPC(value){
       this.isPC = value
     },
     setAccount(val){
       this.account =val
     }
    },
    getters:{
      getIsPC:(state)=>state.isPC
    }
  })