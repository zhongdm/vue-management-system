<template>
  <div class="side-bar">
    <ul>
      <li v-for="post in postNames"><a href="javascript:void(0);" @click="graphic(post.id)" >{{post.value}}</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "graphics",
    props: ['postNames'],
    methods: {
      graphic() {
        this.$router.push(arguments[0]);
      }
    }
  }
</script>
<style rel="stylesheet/less" lang="less" scoped>
  .side-bar {
    /* max-width: 150px; */
    padding: 20px;
    li {
      height: 28px;
      line-height: 28px;
    }
  }
</style>