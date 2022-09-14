<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view/>
    </transition>
      <main-nav-bar v-show="navShow"></main-nav-bar>
      <web-bg v-show="bgShow"></web-bg>
      <wave-item></wave-item>
      <!--    <slide></slide>-->
  </div>
</template>

<script>
import MainNavBar from "components/content/mainNavbar/MainNavBar";
import WebBg from "@/views/webBg/WebBg";

import Slide from "@/components/common/special/slide/Slide";

import WaveItem from "@/components/common/special/Click/WaveItem";


export default {
  name: 'App',
  components: {
    MainNavBar,
    WebBg,
    Slide,
    WaveItem,
  },
  data() {
    return {
      navShow:true,
      bgShow: true,
      transitionName:''
    }
  },

  watch: {//使用watch 监听$router的变化
    $route(to, from) {
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if (to.meta.index > from.meta.index) {
        //设置动画名称
        this.transitionName = 'slide-left';
      } else {
        this.transitionName = 'slide-right';
      }
    }
  }
}
</script>

<style>

  * {
    padding: 0;
    margin: 0;
    border: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    cursor: url("assets/img/cursor/static.svg"),default;
    /*文字不能被选中*/
    /*-webkit-user-select:none;*/
    /*-moz-user-select:none;*/
    /*-ms-user-select:none;*/
    /*user-select:none;*/
  }


  html {
    font-size:62.5%;
  }

  body {
    text-decoration:none;
    outline: none;
    overflow-x: hidden;
  }

  html, body {
    scroll-behavior: smooth;
  }

  #app {
    position: absolute;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    /*background-image: url("./assets/img/index/content/2.jpg");*/
    min-height: 100%;
    width: 100%;
    background-attachment: fixed;
    z-index: 1;
    opacity: 1;

  }

  ::selection {
    background: #CCCCFF;
  }

    /*滚动条样式*/
  body::-webkit-scrollbar {
    width: 10px;
    /*height: 4px;*/
  }
  body::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: rgba(0,0,0,0.2);
  }
  body::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    border-radius: 0;
    background: rgba(0,0,0,0.1);
  }

  /*
    过渡动画
  */
  .slide-right-enter-active,
  .slide-right-leave-active,
  .slide-left-enter-active,
  .slide-left-leave-active {
    will-change: transform;
    transition: all 1000ms;
    position: absolute;
  }
  .slide-right-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  .slide-right-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .slide-left-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .slide-left-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  /*font-family: english,sans-serif;*/
  /*font-family: chinese,sans-serif;*/


</style>
