<template>
  <div id="nav-bar-item-center-change">
    <div id="to-top" @mouseover="show" @mouseleave="hidden" @click="goTop">
      老徐的博客 - 不想秃头
      <span class="goTop"></span>
    </div>
    <div id="my-blog"><slot></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBarItemCenterChange",
  methods: {
    show() {
      const MyBlog = document.getElementById("my-blog")
      MyBlog.style.display = "block"
    },
    hidden() {
      const MyBlog = document.getElementById("my-blog")
      MyBlog.style.display = "none"
    },
    goTop() {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 20;
        if (top <= 1) {
          clearInterval(timeTop);
        }
      }, .1);
    }
  }
}
</script>

<style scoped>
  #nav-bar-item-center-change {
    font-family: 'chinese',sans-serif;
  }

  #to-top {
    position: relative;
    width: 34rem;
    height: 4rem;
    margin: -6rem auto;
    border-radius: .8rem;
    transition: .4s;
    line-height: 4rem;
  }

  .goTop::after {
    content: url("../../../../assets/img/index/menu/head.svg");
    position: absolute;
    display: block;
    right: calc(50% - 1.5rem);
    top: .5rem;
    z-index: 10;
    height: 4.8rem;
    transform: scale(0);
    font-size: 2.4rem;
    transition: .2s;
    transition-timing-function: ease-in;
  }

  #to-top:hover .goTop:after{
    transform: scale(1);
  }

  #to-top:hover {
    background: #A0CFFF;
    color: #A0CFFF;
  }

  #my-blog {
    position: absolute;
    width: 40rem;
    height: 6rem;
    margin-top: 8rem;
    left: 50%;
    margin-left: -20rem;
    line-height: 6rem;
    background: #87CFE3;
    color: #2c2c2c;
    border-radius: .8rem;
    display: none;
  }

  @media screen and (max-width: 1366px) {
    #to-top {
      position: relative;
      width: 34rem;
      height: 4rem;
      margin: -4.7rem auto;
      border-radius: .8rem;
      transition: .4s;
      line-height: 4rem;
    }
  }

  @media screen and (max-width: 420px) {
    #nav-bar-item-center-change {
      display: none;
    }
  }
</style>