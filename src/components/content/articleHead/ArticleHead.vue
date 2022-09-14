<template>
  <div id="article-head">
    <div class="head-title">
      <span class="title-chinese">时光机 - </span>
      <span class="title-english">Time Machine</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleHead"
}
</script>

<style scoped>
#article-head {
  position: relative;
  width: 100%;
  height: 40vh;
  /*background-image: url("../../../assets/img/article/head/15.jpg");*/
  /*background-position: center center;*/
  /*background-repeat: no-repeat;*/

  background: rgba(0,0,0,.3);

  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -webkit-transition: all .5s;
  -moz-transition: all .5s;
  -o-transition: all .5s;
  -ms-transition: all .5s;
  transition: all .5s;
}

.head-title {
  height: 9rem;
  width: 60rem;
  position: relative;
  margin: 18rem auto;
  text-align: center;
  font-size: 4.8rem;
  color: #EFEDEC;
  line-height: 2rem;
}

.title-chinese {
  font-family: chinese,sans-serif;
}
.title-english {
  position: relative;
  font-family: english,sans-serif;
  top: -.8rem;
  font-size: 3.15rem;

}
</style>