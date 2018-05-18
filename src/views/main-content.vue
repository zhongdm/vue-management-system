<template>
    <div class="container">
      <side-bar class="interactive" 
        v-bind:posts="posts" ></side-bar>
      <div class="page-content">
      <keep-alive>
        <router-view></router-view>
        </keep-alive>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'main-content',
    data() {
      return {
        // posts: { 
        //   id: 'line-graph',
        //   value: '折线图'
        // },
        posts: [
        { id: 'line-graph', value: '折线图'},
        { id: 'bar-graph', value: '柱状图'},
        { id: 'pie-graph', value: '饼图'},
        { id: 's-graph', value: '散点图'}
        ]
      }
    },
    components: {
      'nav-bar': () => import('@/components/NavBar'),
      'side-bar': () => import('@/components/SideBar')
    }
  }
</script>

<style rel="stylesheet/less" lang="less">
 @import '~assets/less/common.less';
  .container {
      .display-flex();
      max-width: 1024px;
      margin: 0 auto;
      .interactive {
        .flexbox(1);
      }
      @media(max-width: 768px) {
        .interactive {
          display: none;
        }
      }
      .page-content {
        .flexbox(4);
      }
   
  }
</style>