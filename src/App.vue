<template>
  <div id="app">
    <router-view/>
    <main-nav-bar/>
    <web-bg></web-bg>
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
  mounted() {
    console.log(window.screenTop);
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

  #app {
    position: absolute;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("./assets/img/index/content/2.jpg");
    min-height: 100%;
    width: 100%;
    background-attachment: fixed;
    z-index: 1;
    opacity: 1;
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

</style>
