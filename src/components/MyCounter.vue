<template>
  <div class="counter">
    <slot name="header"></slot><br/>
    <span>{{counter}}{{isTrue || 0}}</span>
    <button @click="addCounter" v-bind="$attrs">+</button>
    <button @click="minusCounter">-</button>
    <br/>
    <slot name="footer"></slot>
  </div>
</template>

<script>
  export default {
    name: "Counter",
    // props: ['isTrue'],
    inheritAttrs: false,
    props: {
      isTrue: {
        // props验证 isTrue为props属性传递的值
        // 验证父组件传过来的值是否符合条件
        type: [String,Boolean],
        require: true
      }
    },
    data() {
      return {
        counter: 0
      }
    },
    methods:{
      addCounter(){
        this.counter++
        this.$emit('click', 1)
      },
      minusCounter(){
        this.counter--
        this.$emit('click', -1)
      }
    }
  }
</script>
<style scoped>
  .counter {
    text-align: left;
  }
</style>