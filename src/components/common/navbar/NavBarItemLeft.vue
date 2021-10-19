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
    height: 40px;
    width: 190px;
    margin-top: 10px;
    text-align: center;
    border-radius: 5px;
    z-index: 2;
    line-height: 40px;
    font-size: 28px;
    margin-left: 10%;
    cursor: pointer;
    transition: .4s;
  }

    .blog-name::after {
    content: url("../../../assets/img/index/index.svg");
    opacity: 0;
    position: relative;
    right: calc(50% - 15px);
    top: -35px;
    left: 2%;
    z-index: 1;
    height: 48px;
    transform: scale(0);
    font-size: 24px;
    transition: .2s;
    transition-timing-function: ease-in;
  }

   .nav-bar-item-left:hover .blog-name::after {
     opacity: 1;
   }

  .nav-bar-item-left:hover {
    color: lightcyan;
    background: lightcyan;
  }


</style>