<template>
  <main-content v-bind:post-names="posts"></main-content>
</template>

<script>
  export default {
    name: 'Echarts',
    data: function(){
      return {
        posts: [
          { id: 'line-graph', value: '折线图'},
          { id: 'bar-graph', value: '柱状图'},
          { id: 'pie-graph', value: '饼图'},
          { id: 's-graph', value: '散点图'}
        ]
      }
    },
    components: {
      'main-content': () => import('@/views/main-content')
    }
  }
</script>
