import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
const { resolve } = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  configureWebpack: (config)=>{
    if(process.env.NODE_ENV === 'production'){
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
    }
  },
  define: {
    'process.env': process.env
  },
  lintOnSave: false,
  resolve: {
    alias: [//配置别名
     { find: '@', replacement: resolve(__dirname, 'src') }
    ],
    // 情景导出 package.json 配置中的exports字段
    conditions: [],
    extensions:['.mjs','.js','.ts','.jsx','.tsx','.json']  
   },
   server: {
    host:'192.168.101.60',
    port: 8089,
    proxy: {
      '/api': {
        target:'https://webapi.tradingking.vip/api',
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
    },
  },
})
