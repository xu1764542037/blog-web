<template>
  <div id="type-chart">
    <div id="chart">
      <div id="test">

      </div>
    </div>
  </div>
</template>

<script>
import {selectEverTypeNum} from "@/network/type/type";

export default {
  name: "TypeChart",
  data() {
    return {
      type_1: 0,
      type_2: 0,
      type_3: 0,
      type_4: 0,
      type_5: 0,
    }
  },
  mounted() {
  },
  methods: {
  },
  created() {
    selectEverTypeNum().then( res => {
      this.type_1 = res.obj.typeId_1
      this.type_2 = res.obj.typeId_2
      this.type_3 = res.obj.typeId_3
      this.type_4 = res.obj.typeId_4
      this.type_5 = res.obj.typeId_5
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("test"));
      // 指定图表的配置项和数据
      let option = {
        legend: {
          top: 'bottom'
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        series: [
          {
            name: 'Nightingale Chart',
            type: 'pie',
            radius: [40, 200],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 8
            },
            data: [
              { value: this.type_1, name: '优质转载' },
              { value: this.type_2, name: '茶余饭后' },
              { value: this.type_3, name: '实用教程' },
              { value: this.type_4, name: '知识笔记' },
              { value: this.type_5, name: '干货分享' },
            ]
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    })
  }
}
</script>

<style scoped>
#type-chart {
  position: relative;
  max-width: 100%;
  height: 50rem;
  padding: 0 4rem;
  margin: 0 auto;

}

#chart {
  height: 100%;
  width: 100%;
  background: rgba(255,255,255,.5);
  border-radius: 1rem 1rem 0 0;

}

#test {
  height: 50rem;
  width: 70rem;
  margin: 0 auto;
}
</style>