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
  .nav-bar-item-right {
    position: absolute;
    height: 100%;
    width: 100%;
  }

  #search-all {
    position: absolute;
    margin-top: .5rem;
    height: 4rem;
    width: 13rem;
    border-radius: .8rem;
    line-height: 4rem;
    font-size: 2.2rem;
    cursor: pointer;
    transition: .4s;
    text-align: center;
    right: 18rem;
  }

  #search-all:hover {
    background: lightcyan;
  }

  #search-all:hover #search-all:before {
    margin-top: .2rem;
    margin-right: .7rem;
    content: url("../../../assets/img/index/search-1.svg") ;
  }

  #search-all::before {
    margin-top: .2rem;
    margin-right: .7rem;
    content: url("../../../assets/img/index/search-1.svg") ;
  }

  #change-color {
    margin-top: .5rem;
    position: absolute;
    height: 4rem;
    width: 13rem;
    border-radius: .8rem;
    line-height: 4rem;
    font-size: 2.2rem;
    right: 5rem;
    transition: .4s;
    text-align: center;
    cursor: pointer;

  }

  #change-color:hover {
    background: lightcyan;
  }

  #change-color::before {
    margin-top: .2rem;
    margin-right: .7rem;
    content: url("../../../assets/img/index/light-1.svg") ;
  }
</style>