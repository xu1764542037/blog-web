<template>
  <div class="nav-bar-item-right">
    <div id="search-all">
      <slot name="search_all"></slot>
    </div>
    <div id="change-color">
      <slot name="change_color"></slot>
    </div>
    <div id="imgs">
      <span id="search-img"></span>
      <span id="change-img"></span>
      <span id="menu-img"></span>
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
    margin-top: 6.5rem;
    height: 4rem;
    width: 13rem;
    border-radius: .8rem;
    line-height: 4rem;
    font-size: 2.2rem;
    cursor: url("../../../../assets/img/cursor/click.svg"),pointer !important;
    transition: .4s;
    text-align: center;
    right: 18rem;
  }

  #search-all:hover {
    background: #A0CFFF;
  }

  #search-all:hover #search-all:before {
    margin-top: .2rem;
    margin-right: .7rem;
    content: url("../../../../assets/img/index/search-1.svg") ;
  }

  #search-all::before {
    margin-top: .2rem;
    margin-right: .7rem;
    content: url("../../../../assets/img/index/search-1.svg") ;
  }

  #change-color {
    margin-top: 6.5rem;
    position: absolute;
    height: 4rem;
    width: 13rem;
    border-radius: .8rem;
    line-height: 4rem;
    font-size: 2.2rem;
    right: 5rem;
    transition: .4s;
    text-align: center;
    cursor: url("../../../../assets/img/cursor/click.svg"),pointer !important;
  }

  #change-color:hover {
    background: #A0CFFF;
  }

  #change-color::before {
    margin-top: .2rem;
    margin-right: .7rem;
    content: url("../../../../assets/img/index/light-1.svg") ;
  }


  #imgs {
    display: none;
  }

  #search-img {
    position: absolute;
    height: 4rem;
    width: 4rem;
    right: 10rem;
    border-radius: 10px;
    margin-top: -.8rem;
    transition: .4s;
  }

  #search-img:hover {
    background: #A0CFFF;
  }


  #search-img::after {
    position: absolute;
    margin-top: 1rem;
    margin-left: 1rem;
    content: url("../../../../assets/img/index/search-1.svg") ;
  }

  #change-img {
    position: absolute;
    height: 4rem;
    width: 4rem;
    right: 5.5rem;
    border-radius: 10px;
    margin-top: -.8rem;
    transition: .4s;
  }

  #change-img:hover {
    background: #A0CFFF;
  }

  #change-img::after {
    position: absolute;
    margin-top: 1rem;
    margin-left: 1rem;
    content: url("../../../../assets/img/index/light-1.svg") ;
  }

  #menu-img {
    position: absolute;
    height: 4rem;
    width: 4rem;
    right: 1rem;
    border-radius: 10px;
    margin-top: -.8rem;
    transition: .4s;
  }

  #menu-img:hover {
    background: #A0CFFF;
  }

  #menu-img::after {
    position: absolute;
    margin-top: 1rem;
    margin-left: 1rem;
    content: url("../../../../assets/img/index/menu-1.svg") ;
  }

  @media screen and (max-width: 1366px) {
    #search-all {
      position: absolute;
      margin-top: 5.2rem;
      height: 4rem;
      width: 13rem;
      border-radius: .8rem;
      line-height: 4rem;
      font-size: 2.2rem;
      cursor: url("../../../../assets/img/cursor/click.svg"),pointer !important;
      transition: .4s;
      text-align: center;
      right: 18rem;
    }

    #change-color {
      margin-top: 5.2rem;
      position: absolute;
      height: 4rem;
      width: 13rem;
      border-radius: .8rem;
      line-height: 4rem;
      font-size: 2.2rem;
      right: 5rem;
      transition: .4s;
      text-align: center;
      cursor: url("../../../../assets/img/cursor/click.svg"),pointer !important;
    }
  }

  @media screen and (max-width: 1024px) {
    #search-all {
      position: absolute;
      margin-top: 4.7rem;
      height: 4rem;
      width: 13rem;
      border-radius: .8rem;
      line-height: 4rem;
      font-size: 2.2rem;
      cursor: url("../../../../assets/img/cursor/click.svg"),pointer !important;
      transition: .4s;
      text-align: center;
      right: 18rem;
    }

    #change-color {
      margin-top: 4.7rem;
      position: absolute;
      height: 4rem;
      width: 13rem;
      border-radius: .8rem;
      line-height: 4rem;
      font-size: 2.2rem;
      right: 5rem;
      transition: .4s;
      text-align: center;
      cursor: url("../../../../assets/img/cursor/click.svg"),pointer !important;
    }

    #imgs {
      display: block;
    }

    #search-img {
      display: none;
    }

    #change-img {
      display: none;
    }

  }

  @media screen and (max-width: 440px) {
    #search-all {
      display: none;
    }

    #change-color {
      display: none;
    }

    #imgs {
      display: block;
    }

    #search-img {
      display: block;
    }

    #change-img {
      display: block;
    }

    #menu-img {
      display: block;
      position: absolute;
      height: 4rem;
      width: 4rem;
      right: 1rem;
      border-radius: 10px;
      /*margin-top: -1.8rem;*/
      transition: .4s;
    }

  }
</style>