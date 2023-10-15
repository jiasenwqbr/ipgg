
import {createRouter, createWebHistory,createWebHashHistory} from 'vue-router'
import Base from '@/layouts/base.vue'
const router = createRouter({
    history: createWebHistory(), 
    routes:[
        {
          path: '/',
          name: 'Base',
          component: Base,
          redirect: '/Home',
          children: [
            {
              path: '/Home',
              name: 'Home',
              component: () =>
              import('@/views/Home/index.vue'),
            },
            {
              path: '/Mint',
              name: 'Mint',
              component: () =>
              import('@/views/Mint/index.vue'),
            }
              
          ],
        },
      ]
})

router.afterEach((to, from) => {
  window.scrollTo(0,0)
})
export default router