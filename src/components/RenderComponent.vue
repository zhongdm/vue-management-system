<!-- <template>
<div>{{level}}
   <slot>default</slot>
</div>
 
</template> -->
<script>
  export default {
    name: "renderComponent",
    props: ['level'],
    render(createElement) {
      console.log(this.$slots)
      return createElement(
        'h' + this.level,
        [
        createElement('a', {
          attrs: {
            name: "link",
            href: "www.bai.com"
          }
        }, this.$slots.default)]

      )
    }
  }
</script>