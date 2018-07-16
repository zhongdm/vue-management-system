<template>
  <label>
  {{ label }}
  <input
  ref="input"
    v-bind="$attrs"
    v-bind:value="value"
    v-on="inputListeners"
  >
</label>
</template>

<script>
  export default {
    name: "BaseInput",
    inheritAttrs: false,
    props: ['label', 'value'],
    computed: {
      inputListeners(){
        var vm = this
        return Object.assign({},
          this.$listeners,
          {
            input(event){
              vm.$emit('input', event.target.value)
            },
            focus(event){
              this.$refs.input.focus()
            }
          })
      }
    }
  }
</script>