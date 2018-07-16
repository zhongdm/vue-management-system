<template>
  <div>
    <div class="graph" id="line-graph">
      123
    </div>
  </div>
</template>

<script>

var echarts = require('echarts')
  export default {
    name: 'lineGraph',
    data: function(){
      return {
        posts: [
          {id: 1, value: '过渡与动画111'},
          {id: 2, value: '渐变'},
          {id: 3, value: '视觉效果'},
          {id: 4, value: '形状'},
          {id: 5, value: '视频&音频'}
        ]
      }
    },
    created() {
    },
    mounted(){
      this.lineChart()
    },
    components: {
      'main-content': () => import('@/views/main-content')
    },
    methods: {
      lineChart() {
        var myLine = echarts.init(document.getElementById('line-graph'));
         // 指定图表的配置项和数据
        var option = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
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