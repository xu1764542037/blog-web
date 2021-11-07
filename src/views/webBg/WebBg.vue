<template>
  <div id="web-bg">

  </div>
</template>

<script>
export default {
  name: "WebBg"
}
</script>

<style scoped>
#web-bg {
  z-index: 1;
  /*position: fixed;*/
  min-height: 100%;
  width: 100%;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  /*background-image: url("../../assets/img/index/content/2.jpg");*/
}

#web-bg:before {
  content: ' ';
  position: fixed;
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: url("../../assets/img/bg/45.jpg") center 0 no-repeat;
  background-size: cover;
  overflow-x: hidden;

}
</style>