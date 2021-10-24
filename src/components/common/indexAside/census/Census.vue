<template>
  <div class="census" ref="obtainTop" :style="getStyle()">
    <div class="title">
      <p></p>
      <p>数据统计</p>
    </div>
    <div class="content" v-for="item in census">
      <span class="name">
        {{item.name}}
      </span>
      <span class="data">
        {{item.data}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Census",
  data() {
    return {
      marginLeft: '70%',
      census: [
        {
          name: "文章数目",
          data: "23"
        },
        {
          name: "运行时间",
          data: "5天"
        },
        {
          name: "本站总字数",
          data: "103.1K"
        },
        {
          name: "本站访客数",
          data: "2134"
        },
        {
          name: "本站总访问量",
          data: "41246"
        },
        {
          name: "最后更新时间",
          data: "8天前"
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
      if (this.$refs.obtainTop.getBoundingClientRect().top<940 && this.$refs.obtainTop.getBoundingClientRect().top>-100) {
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
.census {
  position: relative;
  width: 100%;
  min-height: 30rem;
  margin: 3rem auto;
  border-radius: 1rem;
  background: rgba(255,255,255,.5);
  padding: 2rem 1rem;
  transition: .8s;
  left: 0;
}

.census:hover {
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
  content: url("../../../../assets/img/index/aside/census/census.svg");
}

.title>p:last-child {
  margin: -3.4rem 3.5rem;
}

.content {
  height: 4rem;
  width: 94%;
  margin: 0 auto;
  transition: .4s;
  line-height: 4rem;
  border-radius: 1rem;
  font-family: PingFangSC,sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
}

.name {
  margin-left: 5%;
}

.data {
  /*margin-right: 1%;*/
  float: right;
}
</style>