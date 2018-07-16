<template>
  <div>
    <div class="data-container">
      <div class="data-list multi-wrapper">
        <ul v-for="list in bookLists" :key="list.id">
          <li><label><input type="checkbox" :id="list.id">{{ list.name }}</label></li>
        </ul>
      </div>
      <div class="data-pass">
        <a href="" class="arrow arrow-right">>></a>
        <a href="" class="arrow arrow-left"><<</a>
      </div>
      <div class="data-select multi-wrapper">
        aaa
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "book",
    data(){
      return {
        bookLists: []
      }
    },
    mounted(){
      this.$http.get('/book.json').then((res) => {
        this.bookLists = res.data
        console.log(res.data)
      })
    }
  }
</script>
<style>
  .data-container {
    width: 600px;
    height: 200px;
    margin: 30px auto;
    text-align: center;
  }
  .data-list{
    display: inline-block;
  }

  .data-pass{
    display: inline-block;
    width: 40px;
    padding-top: calc(50% - 10px);
  }
  .data-pass a {
    text-decoration: none;
    display: block;
    border: 1px solid #ccc;
    padding: 2px;
    margin: 2px;
    border-radius: 5px;
    color: blue;
    box-shadow: 2px 1px 5px #ccc;
  }

  .data-select {
    display: inline-block;
  }
  .multi-wrapper {
    border: 1px solid blue;
    width: 200px;
    height: 100%;
    padding: 10px 15px;
    text-align: left;
    vertical-align: top;
  }
</style>