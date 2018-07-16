// 导入 Vue.js 和组件，进行测试
import Vue from 'vue'
import Login from '@/views/Login.vue'

describe('Login: ', function() {
   // 检查原始组件选项
  it('has a created hook', () => {
    expect(Login.name).toBe('login')
  })
})