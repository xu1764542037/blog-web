<template>
  <div class="classify" ref="obtainTop" :style="getStyle()">
    <div class="title">
      <p></p>
      <p>分类</p>
    </div>
    <div class="content" v-for="classify in classifies">
        <img :src="classify.img">
        <span class="content-name">
        {{classify.name}}
        </span>
        <span class="content-num">
        {{classify.num}}
        </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Classify",
  data() {
    return {
      marginLeft: '70%',
      classifies: [
        {
          img: require('@/assets/img/index/aside/classify/recommend.svg'),
          name: '优质转载',
          num: '17'
        },
        {
          img: require('@/assets/img/index/aside/classify/chat.svg'),
          name: '茶余饭后',
          num: '13'
        },
        {
          img: require('@/assets/img/index/aside/classify/notebook.svg'),
          name: '实用教程',
          num: '25'
        },
        {
          img: require('@/assets/img/index/aside/classify/book.svg'),
          name: '知识笔记',
          num: '11'
        },
        {
          img: require('@/assets/img/index/aside/classify/share.svg'),
          name: '干货分享',
          num: '8'
        }
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
      if (this.$refs.obtainTop.getBoundingClientRect().top<940 && this.$refs.obtainTop.getBoundingClientRect().top>-200) {
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
.classify {
  position: relative;
  width: 100%;
  min-height: 28rem;
  margin: 4rem auto;
  border-radius: 1rem;
  background: rgba(255,255,255,.5);
  padding: 2rem 1rem 0 1rem;
  transition: .8s;
}

.classify:hover {
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
  content: url("../../../../assets/img/index/aside/classify/classify.svg");
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
  font-family: chinese,sans-serif;
  font-size: 2rem;
  font-weight: 700;
}

.content>img {
  height: 2rem;
  width: 2rem;
  margin-top: .5rem;
  margin-left: 4%;
  transition: .4s;
}

.content:hover {
  background: #A0CFFF;
}

.content:hover .content>img{
  margin-left: 8%;
}

.content-name {

}

.content-num {
  position: relative;
  transition: .4s;
  margin-left: 37%;
}

.content:hover .content-num{
  margin-left: 30%;
}

</style>