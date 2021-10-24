<template>
  <div class="page-bottom">
    <div class="content">
      <div class="content-box">
        <p class="time">© 2021</p>
        <p class="name">@LaoXu</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageBottom"
}
</script>

<style scoped>
.page-bottom {
  margin-top: 20rem;
  background-image: url("../../../../assets/img/all/pageBottom/pageBottom.jpg");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 20vh;
  width: 100%;
  color: #EFEDEC;
}

.content {
  height: 100%;
  width: 100%;
  background: rgba(0,0,0,.3);
  text-align: center;
}

.content-box {
  width: 30rem;
  height: 10rem;
  position: relative;
  margin: 0 auto;
  top: 6rem;
}

.time {
  position: relative;
  font-family: PingFangSC,sans-serif;
  font-size: 2rem;
}

.name {
  position: relative;
  font-family: PingFangSC,sans-serif;
  font-size: 2rem;
}



</style>