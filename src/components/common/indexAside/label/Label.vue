<template>
  <div class="label" ref="obtainTop" :style="getStyle()">
    <div class="title">
      <p></p>
      <p>标签</p>
    </div>
    <div class="labels-box">
      <div class="labels" v-for="label in labels">
        <img class="label-img" :src="label.img">
        <span class="label-name">{{label.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Label",
  data() {
    return {
      marginLeft: '70%',
      labels: [
        {
          img: require('@/assets/img/index/aside/label/study.svg'),
          name: "学习"
        },
        {
          img: require('@/assets/img/index/aside/label/food.svg'),
          name: "美食"
        },
        {
          img: require('@/assets/img/index/aside/label/java.svg'),
          name: "Java"
        },
        {
          img: require('@/assets/img/index/aside/label/money.svg'),
          name: "经济"
        },
        {
          img: require('@/assets/img/index/aside/label/music.svg'),
          name: "音乐"
        },
        {
          img: require('@/assets/img/index/aside/label/mysql.svg'),
          name: "MySql"
        },
        {
          img: require('@/assets/img/index/aside/label/vue.svg'),
          name: "Vue"
        },
        {
          img: require('@/assets/img/index/aside/label/workTable.svg'),
          name: "工作台"
        },
        {
          img: require('@/assets/img/index/aside/label/youth.svg'),
          name: "青春"
        },
      ]
    }
  },
  mounted() {
    // 滚动条的获取
    window.addEventListener('scroll', this.handleScrollx, true)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScrollx, true)
  },
  methods: {
    handleScrollx() {
      if (this.$refs.obtainTop.getBoundingClientRect().top<940 && this.$refs.obtainTop.getBoundingClientRect().top>-150) {
        this.marginLeft = "0"
      }
    },
    getStyle() {
      return {
        marginLeft: this.marginLeft
      }
    },
  }
}
</script>

<style scoped>
.label {
  position: relative;
  width: 100%;
  min-height: 20rem;
  margin: 3rem auto;
  border-radius: 1rem;
  background: rgba(255,255,255,.5);
  padding: 2rem 1rem;
  transition: .8s;

}

.label:hover {
  box-shadow: .2rem .2rem 2rem black;
  background: rgba(255,255,255,.7);
}

.title {
  font-family: chinese,sans-serif;
  font-size: 2.3rem;
  font-weight: 700;
  padding-bottom: 4rem;
}

.title>p:first-child:before {
  content: url("../../../../assets/img/index/aside/label/label.svg");
}

.title>p:last-child {
  margin: -3.4rem 3.5rem;
}

.labels-box {
  min-height: 4rem;
  width: 94%;
  margin: 0 auto;
  font-family: PingFangSC,sans-serif;
  font-size: 1.8rem;
}

.labels-box>img {

}

.labels {
  line-height: 3rem;
  height: 3rem;
  max-width: 10rem;
  display: inline-block;
  border-radius: 1rem;
  font-weight: 700;
  margin-left: 1rem;
  transition: .3s;
  padding-left: .7rem;
  padding-right: .7rem;

}

.labels:hover {
  background: #A0CFFF;
}

.label-img {
  position: absolute;
  margin-right: 1rem;
  height: 2.5rem;
  width: 2.5rem;
  margin-top: .25rem;
}

.label-name {
  margin-left: 3rem;
}


</style>