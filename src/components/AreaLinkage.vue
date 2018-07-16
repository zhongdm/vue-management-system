<template>
  <!-- 省市区三级联动 -->
  <div class="">
    <select name="province" id="province" @change="changeProvince">
      <option value="省/市">省/市</option>
      <template v-for="(v, key) in province">
        <option :value="key">{{v}}</option>
      </template>
    </select>
    <select name="city" id="city" @change="changeCity">
      <!-- <template v-if=" !city || !!city.length">
        <option value="市">市</option>
      </template>
      <template v-else v-for="(v, key) in city">
        <option :value="key">{{v}}</option>
      </template> -->
      <option value="市">市</option>
       <template v-for="(v, key) in city">
        <option :value="key">{{v}}</option>
      </template>
    </select>
    <select name="county" id="county" @change="changeCounty">
      <!-- <template v-if=" !county || !!county.length">
        <option value="区">区</option>
      </template>
      <template v-else v-for="(v, key) in county">
        <option :value="key">{{v}}</option>
      </template> -->
      <option value="区">区</option>
      <template v-for="(v, key) in county">
        <option :value="key">{{v}}</option>
      </template>
    </select>
    <input type="text" placeholder="请输入详细地址">
  </div>
</template>

<script>
  import data from '@/mock/area-data.js'

  export default {
    name: "AreaLinkage",
    data(){
      return {
        province: data['86'],
        city: [],
        county: []
      }
    },
    methods: {
      changeProvince(event){
        let city_default = document.getElementById('city').value

        this.city = data[event.target.value]
        this.$nextTick(() => {
          console.log(Object.keys(this.city)[0])
          this.county = data[Object.keys(this.city)[0]]
        })
        
      },
      changeCity(event) {
        this.county = data[event.target.value]
      },
      changeCounty(event) {

      }
    }
  }
</script>

<style scoped>
  input, textarea {
    max-width: 200px;
    border: 1px solid #ddd;
    width: 100%;
    border-radius: 4px;
  }
  select {
    max-width: 100px;
    width: 100%;
  }
</style>