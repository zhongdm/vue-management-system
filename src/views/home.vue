<template>
  <div>
    <nav-bar></nav-bar>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'home-nav-bar',
    components: {
      'nav-bar': () => import('@/components/NavBar')
    }
  }
</script>

<!-- <style rel="stylesheet/less" lang="less" scoped>
</style> -->