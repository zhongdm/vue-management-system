<template>
  <div>
    <div class="graph" id="bar-graph">
      123
    </div>
    <keep-alive>
    <input type="text" placeholder="123">
    </keep-alive>
  </div>
</template>

<script>

var echarts = require('echarts')
  export default {
    name: 'barGraph',
    created() {
    },
    mounted(){
      this.lineChart();
    },
    methods: {
      lineChart() {
        var myLine = echarts.init(document.getElementById('bar-graph'));
         // 指定图表的配置项和数据
        var option = {
            series: {
            name: '访问来源',
            type: 'pie',
            radius: '65%',
            data:[
                {value:235, name:'视频广告'},
                {value:274, name:'联盟广告'},
                {value:310, name:'邮件营销'},
                {value:335, name:'直接访问'},
                {value:400, name:'搜索引擎'}
            ]
        }
        };

        // 使用刚指定的配置项和数据显示图表。
        myLine.setOption(option);
      }
    }
  }
</script>

<style rel="stylesheet/less" lang="less" scoped>
  .graph {
    width: 400px;
    height: 400px;
  }
</style>