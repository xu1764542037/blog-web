<template>
  <div id="nav-bar" ref="obtainTop">
    <div id="nav-bar-left"><slot name="left"></slot></div>
    <div id="nav-bar-center-1"><slot name="center_1"></slot></div>
    <div id="nav-bar-center-2"><slot name="center_2"></slot></div>
    <div id="nav-bar-right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
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
      const nav = document.getElementById("nav-bar")

      const center1 = document.getElementById("nav-bar-center-1")
      const center2 = document.getElementById("nav-bar-center-2")


      if (window.pageYOffset >60) {
        nav.style.background = "rgba(0,0,0,.4)"

        center1.style.marginTop = "-12rem";
        center2.style.opacity = 1

      } else {
        nav.style.background = ""

        center1.style.marginTop = "-6rem";
        center2.style.opacity = 0
      }
    }
  }
}
</script>

<style scoped>
#nav-bar {
  position: fixed;
  z-index: 1;
  height: 6rem;
  width: 100%;
  font-family: 'chinese',sans-serif;
  font-weight: 700;
  color: #EFEDEC;
  transition: .5s;

}

#nav-bar-left {
  position: relative;
  width: 20%;
  height: 100%;

}

#nav-bar-center-1 {
  position: absolute;
  margin-left: 20%;
  width:  55%;
  height: 100%;
  margin-top: -6rem;
  float: left;
  z-index: 2;
  transition: .4s;

}

#nav-bar-center-2 {
  z-index: 1;
  font-size: 2.4rem;
  text-align: center;
  cursor: pointer;
  opacity: 0;
}

#nav-bar-right {
  position: relative;
  width: 20%;
  height: 100%;
  margin-left: 80%;
  margin-top: -4rem;
  float: left;

}
</style>