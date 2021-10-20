<template>
  <div class="nav-bar-item-left">
    <div class="blog-name">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBarItemLeft",
  data() {
    return {
    }
  }
}
</script>

<style scoped>
  .nav-bar-item-left {
    font-family: 'english',sans-serif;
    position: relative;
    height: 4rem;
    width: 19rem;
    margin-top: 1rem;
    text-align: center;
    border-radius: .5rem;
    z-index: 2;
    line-height: 4rem;
    font-size: 2.8rem;
    margin-left: 10%;
    transition: .4s;
  }

    .blog-name::after {
    content: url("../../../assets/img/index/index.svg");
    opacity: 0;
    position: relative;
    right: calc(50% - 15px);
    top: -3.5rem;
    left: 2%;
    z-index: 111;
    height: 4.8rem;
    transform: scale(0);
    font-size: 2.4rem;
    transition: .2s;
    transition-timing-function: ease-in;
  }

   .nav-bar-item-left:hover .blog-name::after {
     opacity: 1 ;
   }

  .nav-bar-item-left:hover {
    color: lightcyan ;
    background: lightcyan;
  }


</style>