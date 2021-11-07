<template>
  <div class="nav-bar-item-left">
    <div class="blog-name" @click="goIndex">
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
  },
  methods:{
    goIndex() {
      this.$router.push({path: "/index"})
      // window.location.reload()
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
    content: url("../../../../assets/img/index/index.svg");
    opacity: 1;
    position: absolute;
    right: calc(50% - 15px);
    top: .3rem;
    left: 37%;
    display: inline-block;
    z-index: 111;
    height: 4.8rem;
    width: 5rem;
    transform: scale(0);
    font-size: 2.4rem;
    transition: .4s;
    transition-timing-function: ease-in;
  }

   .nav-bar-item-left:hover .blog-name::after {
     content: url("../../../../assets/img/index/index.svg");
     opacity: 1;
     position: absolute;
     right: calc(50% - 15px);
     top: .3rem;
     left: 37%;
     display: inline-block;
     z-index: 111;
     height: 4.8rem;
     width: 5rem;
     transform: scale(1);
     font-size: 2.4rem;
     transition: .4s;
     transition-timing-function: ease-in;
   }

  .nav-bar-item-left:hover {
    color: #A0CFFF ;
    background: #A0CFFF;
  }

  @media screen and (max-width: 420px) {
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
      font-size: 2.2rem;
      margin-left: 10%;
      transition: .4s;
    }

    .blog-name::after {
      display: none;
    }

  }

  @media screen and (max-width: 1366px) {
    .nav-bar-item-left {
      font-family: 'english',sans-serif;
      position: absolute;
      height: 4rem;
      width: 19rem;
      margin-top: 1rem;
      text-align: center;
      border-radius: .5rem;
      z-index: 2;
      line-height: 4rem;
      font-size: 2.2rem;
      margin-left: 10%;
      transition: .4s;
    }

  }

</style>