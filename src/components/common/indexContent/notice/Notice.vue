<template>
  <div id="notice" ref="obtainTop">
    <span class="horn">
      <img class="horn-img" src="@/assets/img/index/content/notice/horn.svg">
    </span>
    <p class="notice-name">公告栏</p>

    <div class="swiper">
      <div class="content">
        <p v-for="page in pages">{{page.name}}</p>
      </div>
    </div>

    <img class="go-right-img" src="@/assets/img/index/content/notice/goRight.svg">

  </div>
</template>

<script>
export default {
  watch: {

  },
  name: "Notice",
  data() {
    return {
      pages: [
        {
          name: '梦想这东西和经典一样，永远不会因为时间而褪色，反而更显珍贵。',
          url: '1'
        },
        {
          name: '我们有时从错误中学到的东西，可能比从美德中学到的还要多。',
          url: '2'
        },
        {
          name: '莫找借口失败，只找理由成功。不为失败找理由，要为成功找方法。',
          url: '3'
        },
        {
          name: '既然一切都会过去，那我们一定要抓住现在的。',
          url: '4'
        },
        {
          name: '我试过销声匿迹，最终也无人问及；手机已经很久很久没有响过了。',
          url: '5'
        },
        {
          name: '哪里有天才，我是把别人喝咖啡的功夫，都用在工作上的。',
          url: '6'
        },
        {
          name: '涓滴之水终可以磨损大石，不是由于它力量强大，而是由于昼夜不舍的滴坠。',
          url: '7'
        },
        {
          name: '假如你从来未曾害怕受窘受伤害，好就是你从来没有冒过险。',
          url: '8'
        },
        {
          name: '相信朋友的忠诚。相信自己的勇气。相信敌人的愚蠢。',
          url: '9'
        },
        {
          name: '任凭风吹雨打，只要一直走下去，不放弃，远方的路终将清晰。',
          url: '10'
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
      // console.log('滚动高度', window.pageYOffset)
      // console.log('距离顶部高度', this.$refs.obtainTop.getBoundingClientRect().top)

      let top = document.getElementById("notice").offsetTop
      if (this.$refs.obtainTop.getBoundingClientRect().top<900 && this.$refs.obtainTop.getBoundingClientRect().top>0) {
            const notice = document.getElementById("notice");
            notice.style.transform = "scale(1)"
      }
    }
  }
}
</script>

<style scoped>
#notice {
  height: 5rem;
  transform: scale(.5);
  margin: -2rem auto;
  border-radius: 1rem;
  background: rgba(255,255,255,.5);
  width: 90%;
  line-height: 5rem;
  cursor: pointer;
  overflow: hidden;
  transition: 1s;
}

.horn>.horn-img {
  position: absolute;
  animation:move 1.2s infinite;
  -moz-animation:move 1.2s infinite; /* Firefox */
  -webkit-animation:move 1.2s infinite; /* Safari and Chrome */
  -o-animation:move 1.2s infinite; /* Opera */
  margin-left: 3rem;
  margin-top: 1.2rem;
}

@keyframes move {
  0% {height: 2rem;width: 2rem;}
  50% {height: 2.3rem;width: 2.3rem;}
  100% {height: 2rem;width: 2rem;}
}

.notice-name {
  font-family: chinese,sans-serif;
  margin: 0 6.5%;
  font-size: 2.4rem;
  font-weight: 700;
}

#notice>.go-right-img {
  position: relative;
  margin: 1.5rem  90%;
}

.swiper {
  position: relative;
  width: 75%;
  height: 3rem;
  margin: -4rem 15%;
  overflow: hidden;
  text-align: center;
  font-family: chinese,sans-serif;
  font-size: 1.8rem;
}

.content {
  position: relative;
  width: 100%;
  height: 30rem;
  animation:moves 30s infinite;
  -moz-animation:moves 30s infinite; /* Firefox */
  -webkit-animation:moves 30s infinite; /* Safari and Chrome */
  -o-animation:moves 30s infinite; /* Opera */
}

.content>p {
  line-height: 3rem;
  transition: .4s;
}

#notice:hover .content>p {
  cursor: pointer;
  color: #A0CFFF;
}

@keyframes moves {
  10% {margin-top: -0rem;}
  20% {margin-top: -3rem;}
  30% {margin-top: -6rem;}
  40% {margin-top: -9rem;}
  50% {margin-top: -12rem;}
  60% {margin-top: -15rem;}
  70% {margin-top: -18rem;}
  80% {margin-top: -21rem;}
  90% {margin-top: -24rem;}
  100% {margin-top: -27rem;}
}
</style>