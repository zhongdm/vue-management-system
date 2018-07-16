<template>
  <div class="login-box">
    <div class="login-area">
      <div>
        <div class="field"><input type="text" id="username" placeholder="用户名" @keyup.enter="login"></div>
        <div class="field"><input type="password" id="pwd" placeholder="密码" @keyup.enter="login"></div>
        <div class="field"  id="ap">
          <a href="javascript:void(0)" class="btn" @click="login()">
          <span v-if="isLogin">登录</span>
            <span v-else>正在登录...</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'login',
    data(){
      return {
        username: "admin",
        isLogin: true
      }
    },
    created(){
    },
    methods: {
      login: function(){
        let username = document.querySelector('#username').value
        let pwd = document.querySelector('#pwd').value
        let msg = document.querySelector('.message')
        if(username == '' && pwd == '') {
          msg.innerHTML = "请输入用户名和密码"
          this.$nextTick(function() {
            document.querySelector('#username').focus()
          })
        }
        else if(username == '' && pwd != '') {
          msg.innerHTML = '请填写用户名'
          this.$nextTick(function() {
            document.querySelector('#username').focus()
          })
        }
        else if(username != '' && pwd == '') {
          msg.innerHTML = '请输入密码'
          this.$nextTick(function() {
            document.querySelector('#pwd').focus()
          })
        }
        else {
          this.isLogin = false
        }
        if(!!this.$store.getters.getListByName(username)) {
          sessionStorage.username = username
          this.$store.dispatch('setLoginUserToken', username)
          this.$router.push('/')
        }
        else{
          console.log("当前用户："+username+"失效，请输入其他账号")
          this.isLogin = true
        }
      }
    }
    // beforeRouteEnter(to, from, next) {
    //   console.log('beforeRouteEnter')
    //   next()
    // },
    // beforeRouteUpdate(to, from, next) {
    //   console.log('beforeRouteUpdate')
    //   next()
    // },
    // beforeRouteLeave(to, from, next) {
    //   console.log('beforeRouteLeave')
    //   next()
    // }
  }

//   import Vue from 'vue'
// var MyComponent = Vue.extend({
//   template: '<div>Hello!</div>'
// })
// console.log(MyComponent);
// new MyComponent().$mount('app')
</script>

<style rel="stylesheet/less" lang="less" >
  @import '~assets/less/login.less';
</style>

