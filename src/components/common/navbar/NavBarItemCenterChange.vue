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
      }, 10);
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
    width: 20%;
    height: 4rem;
    margin-left: 40%;
    margin-top: -6rem;
    border-radius: .8rem;
    transition: .4s;
    line-height: 4rem;
  }

  .goTop::after {
    content: url("../../../assets/img/index/menu/head.svg");
    opacity: 0;
    position: relative;
    right: calc(50% - 1.5rem);
    top: -3.5rem;
    left: 1%;
    z-index: 10;
    height: 4.8rem;
    transform: scale(0);
    font-size: 2.4rem;
    transition: .2s;
    transition-timing-function: ease-in;
  }

  #to-top:hover .goTop:after{
    opacity: 1;
  }

  #to-top:hover {
    background: lightcyan;
    color: lightcyan;
  }

  #my-blog {
    position: absolute;
    width: 24%;
    height: 6rem;
    margin-left: 38%;
    margin-top: 1rem;
    line-height: 6rem;
    background: lightcyan;
    color: #2c2c2c;
    border-radius: .8rem;
    display: none;
  }
</style>