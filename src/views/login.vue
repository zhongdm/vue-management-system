<template>
  <div class="login-box">
    <div class="login-area">
      <div>
        <div class="field"><input type="text" placeholder="用户名"></div>
        <div class="field"><input type="password" placeholder="密码"></div>
        <div class="field">
          <a href="javascript:void(0)" class="btn" @click="login()">登录</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    created(){
      console.log(this.$store.state.token)
    },
    methods: {
      login: function(){
        this.$router.push('/')
      }
    }
  }
</script>

<style rel="stylesheet/less" lang="less" >
  @import '~assets/less/login.less';
</style>
