
// 入口文件
import Vue from 'vue'


//导入mui 的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
// 按需导入mint-ui 中的组件
import { Header } from 'mint-ui'
Vue.component(Header.name,Header)

// 导入 APP 根组件
import app from './App.vue'
var vm = new Vue({
  el:'#app',
  render: c => c(app)
})


console.log('ok')