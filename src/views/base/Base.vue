<template>
  <div id="base">
    <div class="top-bar" v-show="baseShow">
      <span>博客后台系统</span>
      <p class="exit" @click="exit">退出</p>
    </div>
    <div class="left-bar" v-show="baseShow">
      <nav-menu></nav-menu>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import NavMenu from "@/components/common/base/navMenu/NavMenu";

export default {
  name: "Base",
  data() {
    return {
      baseShow: true
    }
  },
  components: {NavMenu},
  methods: {
    exit() {
      sessionStorage.setItem("token", 'false');
      this.$parent.navShow = true
      this.$router.push({path: "/index"})

    }
  },
  beforeCreate() {
    this.$parent.navShow = false
  },

}
</script>

<style scoped>
#base {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 10;
}

.top-bar {
  height: 8rem;
  width: 100%;
  /*background: #8CC5FF;*/
  background: rgba(0,0,0,.3);
  line-height: 4rem;
  color: #EFEDEC;
}

.top-bar>span {
  position: relative;
  /*font-family: PingFangSC,sans-serif;*/
  font-family: chinese,sans-serif;
  font-size: 4rem;
  left: 10rem;
  top: 2rem;
}

.left-bar {
  height: 100%;
  width: 15%;
  background: rgba(0,0,0,.3);
}
.exit {
  font-size: 1.8rem;
  font-family: PingFangSC,sans-serif;
  position: relative;
  margin-left: 94%;
  margin-top: -3rem;
  cursor: pointer;
}

</style>