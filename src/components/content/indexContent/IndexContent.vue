<template>
  <div id="index-content" ref="pageMove">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: "IndexContent",
  mounted() {
    // 滚动条的获取
    window.addEventListener('scroll', this.handleScrollx, true)
  },
  beforeRouteLeave (to, from, next) {
    window.removeEventListener('scroll', this.handleScrollx, true)
    next()
  },
  methods: {
    handleScrollx() {
      // console.log('滚动高度', window.pageYOffset)
      // console.log('距离顶部高度', this.$refs.obtainTop.getBoundingClientRect().top)

      const page = document.getElementById("index-content")
      if (window.pageYOffset > 0) {
        page.style.opacity = "1"
      } else {
        page.style.opacity = "0"

      }
    }
  }
}
</script>

<style scoped>
#index-content {
  position: absolute;
  margin-top: .8%;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("../../../assets/img/index/content/2.jpg");
  min-height: 100vh;
  width: 100%;
  background-attachment: fixed;
  z-index: 1;
  opacity: 0;
}
</style>