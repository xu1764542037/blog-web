<template>
  <div id="app">
    <router-view/>
    <main-nav-bar/>
  </div>
</template>

<script>
import MainNavBar from "components/content/mainNavbar/MainNavBar";

export default {
  name: 'App',
  components: {
    MainNavBar,
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
