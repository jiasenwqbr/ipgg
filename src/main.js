import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import icons from '@/assets/js/imgUrl/index.js'
import animated from "animate.css";
import 'atropos/css'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import '@/assets/scss/global.scss'
import { createPinia } from "pinia";
// import 'virtual:svg-icons-register' // 引入注册脚本
import SvgIcon from '@/components/SvgIcon/index.vue' // 引入组件
import VueSwiper from 'vue-awesome-swiper'
import Swiper, { Pagination, Autoplay } from "swiper";
import 'swiper/css'

Swiper.use([Pagination, Autoplay]);
const store = createPinia();
const app = createApp(App)

// app.component('svg-icon', SvgIcon)

app.config.globalProperties.$icons = icons;
app.use(router).use(store).use(animated).use(VueSwiper).use(Antd).mount('#app')