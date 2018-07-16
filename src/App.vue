<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: "App", 
    data() {
      return {
        msg: "aaa"
      }
    },
     beforeRouteEnter(to, from, next) {
      console.log('beforeRouteEnter')
      next()
    },
    beforeRouteUpdate(to, from, next) {
      console.log('beforeRouteUpdate')
      next()
    },
    beforeRouteLeave(to, from, next) {
      console.log('beforeRouteLeave')
      next()
    }
  }
</script>
<!-- <style rel="stylesheet/less" lang="less" >
  @import '~assets/less/common.less';
</style> -->