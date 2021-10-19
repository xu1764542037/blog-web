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

    /*文字不能被选中*/
    /*-webkit-user-select:none;*/
    /*-moz-user-select:none;*/
    /*-ms-user-select:none;*/
    /*user-select:none;*/
  }

  body {
    text-decoration:none;
    outline: none;
  }


</style>
