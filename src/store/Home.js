import { defineStore } from 'pinia'

export const useHomeStore = defineStore('Home', {
    state: () => {
      return { 
          width:null,
          height:null
       }
    },
    actions: {
      setWidth(playload) {
         try{
          this.width=playload
         }catch(err){}
      },
      setHeight(playload){
          this.height=playload
      }
    },
  })