<template>
    <div class="footer">
        <div class="f_i"  @click="link('https://twitter.com/IPPG_NFT')"></div>
        <div class="f_i"></div>
        <div class="f_i" @click="link('https://www.instagram.com/ippg_nft/tagged/')"></div>
    </div>
</template>
<script>
export default {
    data(){
       return{}
    },
    methods:{
        link(url){
            window.open(url)
        }
    }
    
}
</script>
<style scoped lang='scss'>
 @import './index.scss';
</style>