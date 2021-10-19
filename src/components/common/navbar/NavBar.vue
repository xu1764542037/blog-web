<template>
  <div id="nav-bar">
    <div id="nav-bar-left"><slot name="left"></slot></div>
    <div id="nav-bar-center"><slot name="center"></slot></div>
    <div id="nav-bar-right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
#nav-bar {
  position: absolute;
  /*z-index: 100;*/
  height: 60px;
  width: 100%;
  /*background: rgba(255,255,255,.6);*/
  font-family: 'chinese',sans-serif;
  font-weight: 700;
  color: #EFEDEC;
}

#nav-bar-left {
  position: relative;
  width: 30%;
  height: 100%;
}

#nav-bar-center {
  position: relative;
  width: 40%;
  height: 100%;
  margin-left: 30%;
  margin-top: -60px;
}


#nav-bar-right {
  position: relative;
  width: 30%;
  height: 100%;
  margin-left: 70%;
  margin-top: -60px;

}
</style>