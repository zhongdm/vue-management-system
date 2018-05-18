<template>
  <!-- <div> -->
    <!-- <nav-bar></nav-bar> -->
    <div class="container">
      <side-bar class="interactive" v-bind:posts="posts"></side-bar>
      <div class="page-content">
        <router-view></router-view>
      </div>
    </div>
    
  <!-- </div> -->
</template>

<script>
import NavBar from '@/components/NavBar'
  export default {
    name: 'home-nav-bar',
    data: function(){
      return {
        posts: [
          {id: 1, value: '过渡与动画'},
          {id: 2, value: '渐变'},
          {id: 3, value: '视觉效果'},
          {id: 4, value: '形状'},
          {id: 5, value: '视频&音频'}
        ]
      }
    },
    components: {
      'nav-bar': () => import('@/components/NavBar'),
      'side-bar': () => import('@/components/SideBar')
    }
  }
</script>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/less/common.less';
  .container {
    .display-flex();
    margin: 0 20px;
    .interactive {
      .flexbox(1);
    }
    .page-content {
      .flexbox(3);
      background-color: yellow;
    }
  }
</style>