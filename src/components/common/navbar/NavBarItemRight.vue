<template>
  <div class="nav-bar-item-right">
    <div id="search-all">
      <slot name="search_all"></slot>
    </div>
    <div id="change-color">
      <slot name="change_color"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBarItemRight"
}
</script>

<style scoped>
  #search-all {
    position: relative;
    margin-left: 45%;
    height: 40px;
    width: 130px;
    border-radius: 8px;
    transition: .4s;
    text-align: center;
    line-height: 40px;
    font-size: 22px;
    float: left;
    cursor: pointer;
  }

  #search-all:hover {
    background: lightcyan;
  }

  #search-all:hover #search-all:before {
    margin-top: 2px;
    margin-right: 7px;
    content: url("../../../assets/img/index/search-1.svg") ;
  }

  #search-all::before {
    margin-top: 2px;
    margin-right: 7px;
    content: url("../../../assets/img/index/search-1.svg") ;
  }

  #change-color {
    position: relative;
    margin-left: 66%;
    height: 40px;
    width: 130px;
    border-radius: 8px;
    transition: .4s;
    text-align: center;
    line-height: 40px;
    font-size: 22px;
    cursor: pointer;

  }

  #change-color:hover {
    background: lightcyan;
  }

  #change-color::before {
    margin-top: 2px;
    margin-right: 7px;
    content: url("../../../assets/img/index/light-1.svg") ;
  }
</style>