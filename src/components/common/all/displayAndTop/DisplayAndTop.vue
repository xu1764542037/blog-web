<template>
  <div class="display-and-top" ref="obtainTop" :style="getStyle()">
    <div class="go-top" @click="goTop">
      <span>UP</span>
    </div>
    <div class="display-aside" @click="getMessage()">
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DisplayAndChangeText",
  data() {
    return {
      isShow: false,
      right: '-3%',
    }
  },
  mounted() {
    // 滚动条的获取
    window.addEventListener('scroll', this.handleScrollx, true)
  },
  beforeRouteLeave (to, from, next) {
    window.removeEventListener('scroll', this.handleScrollx, true)
    next()
  },
  methods: {
    goTop() {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 40;
        if (top <= 1) {
          clearInterval(timeTop);
        }
      }, 10);
    },
    getMessage() {
      this.$emit("is-show",this.isShow)
      this.isShow = !this.isShow
    },
    handleScrollx() {
      if (window.pageYOffset>100) {
        this.right = ".2%"
      } else {
        this.right = "-3%"
      }
    },
    getStyle() {
      return {
        right: this.right
      }
    },
  }
}
</script>

<style scoped>
.display-and-top {
  position: fixed;
  right: .2%;
  top: 55%;
  height: 10rem;
  width: 6rem;
  z-index: 1000;
  transition: .8s;
}

.go-top {
  height: 4rem;
  width: 4rem;
  margin: .5rem 1rem;
  border-radius: 50%;
  transition: .4s;
  color: #EFEDEC;
  background: rgba(0,0,0,.5);
  line-height: 4rem;
  font-size: 1.9rem;
  text-align: center;
  cursor: pointer;
}

.go-top:hover {
  background: #A0CFFF;

}

.go-top>span {
  cursor: pointer;
  font-family: PingFangSC,sans-serif;
}


.display-aside {
  height: 4rem;
  width: 4rem;
  margin: 0 1rem;
  border-radius: 50%;
  background: rgba(0,0,0,.5);
  line-height: 4rem;
  transition: .4s;
  cursor: pointer;
}

.display-aside:hover {
  background: #A0CFFF;

}

.display-aside>span::before {
  position: absolute;
  content: url("../../../../assets/img/displayAndChangeText/leftAndRight.svg");
  margin-left: .8rem;
  margin-top: .6rem;
  cursor: pointer;

}
</style>