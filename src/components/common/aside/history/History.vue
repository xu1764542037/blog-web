<template>
  <div class="history" ref="obtainTop" :style="getStyle()">
    <div class="title">
      <p></p>
      <p>时光机</p>
    </div>
    <div class="content" v-for="item in record">
      <span class="month">
        {{item.month}}
      </span>
      <span class="num">
        {{item.num}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "History",
  data() {
    return {
      marginLeft: '70%',
      record: [
        {
          month: "十月 2021",
          num: 2
        },
        {
          month: "九月 2021",
          num: 5
        },
        {
          month: "八月 2021",
          num: 11
        },
        {
          month: "七月 2021",
          num: 4
        },
        {
          month: "六月 2021",
          num: 6
        },
        {
          month: "五月 2021",
          num: 8
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
.history {
  position: relative;
  width: 100%;
  min-height: 30rem;
  margin: 0 auto;
  border-radius: 1rem;
  background: rgba(255,255,255,.5);
  padding: 2rem 1rem;
  transition: .8s;
}

.history:hover {
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
  content: url("../../../../assets/img/index/aside/history/time.svg");
}

.title>p:last-child {
  margin: -3.4rem 3.5rem;
}

.title::after {
  content: "";
  display: block;
  border-top: .3rem solid #2c2c2c;
  border-right: .3rem solid #2c2c2c;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  width: .6rem;
  height: .6rem;
  position: absolute;
  margin-left: 82%;
  margin-top: 1.4rem;
  transition: .4s;
}

.title:hover::after {
  margin-left: 85%;
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

.content:hover {
  background: #A0CFFF;
}

.month {
  margin-left: 5%;
  transition: .4s;
}

.content:hover .month {
  margin-left: 8%;
}

.num {
  margin-left: 45%;
  transition: .4s;

}

.content:hover .num{
  margin-left: 40%;
}
</style>