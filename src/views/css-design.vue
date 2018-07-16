<template>
    <!-- <div class="container">
      <side-bar class="interactive" v-bind:posts="posts"></side-bar>
      <div class="page-content">
        <router-view></router-view>
      </div>
    </div> -->
    
  <main-content v-bind:posts="posts"></main-content>
</template>

<script>
  export default {
    name: 'cssDesign',
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
    created(){
      console.info(this.posts);
    },
    components: {
      'main-content': () => import('@/views/main-content')
    }
  }
</script>
