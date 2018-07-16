<template>
<div>
  <textarea v-bind="$attrs"
    v-bind:value="value"
    v-on:input="$emit('input', $event.target.value)"></textarea>
</div>
<!-- native原生输入框：
  <input
    v-bind="$attrs"
    v-bind:value="value"
    v-on:input="$emit('input', $event.target.value)"
  > -->

</template>

<script>
  export default {
    name: "BaseInputNative",
    props: ['value']
  }
</script>