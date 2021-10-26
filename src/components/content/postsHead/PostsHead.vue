<template>
  <div class="posts-head">
    <img :src="page.img" οndragstart="return false">
    <div class="page-info">
      <div class="info-name">{{page.name}}</div>
      <div class="info-row">
        <span class="startTime">发表于 {{page.startTime}}</span>
        <span class="division">|</span>
        <span class="endTime">更新于 {{page.endTime}}</span>
        <span class="division">|</span>
        <span class="type">{{page.type}}</span>
      </div>
      <div class="info-row">
        <span class="textNum">字数总计: {{page.textNum}}</span>
        <span class="division">|</span>
        <span class="seeTime">阅读时长: {{page.seeTime}}</span>
        <span class="division">|</span>
        <span class="seeNum">阅读量: {{page.seeNum}}</span>
        <span class="division">|</span>
        <span class="comment">评论数: {{page.comment}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostsHead",
  data() {
    return {
      page: {
        name: "idea从零到精通07之idea数据库管理",
        img: require('@/assets/img/posts/head/19.jpeg'),
        startTime: "2021-10-21",
        endTime: "2021-11-25",
        type: "干货分享",
        textNum: "700",
        seeTime: "3",
        seeNum: "230",
        comment: "3"
      }
    }
  }
}
</script>

<style scoped>
.posts-head {
  position: relative;
  width: 100%;
  height: 43vh;
  background-repeat: no-repeat;
  -webkit-transition: all .5s;
  -moz-transition: all .5s;
  -o-transition: all .5s;
  -ms-transition: all .5s;
  transition: all .5s;
  color: #EFEDEC;
}

.posts-head>img {
  height: 43vh;
  width: 100%;
  object-fit: cover;
  position: absolute;
  pointer-events: none;
}

.page-info {
  position: absolute;
  height: 20rem;
  min-width: 50%;
  margin: 16rem 20%;
  text-align: left;
}

.info-name {
  height: 5rem;
  width: 100%;
  font-size: 4.6rem;
  font-family: chinese,sans-serif;
  font-weight: 700;
  letter-spacing: .3rem;
  line-height: 5rem;

}

.division {
  font-size: 3rem;
  position: relative;
  top: .4rem;
}

.info-row {
  height: 3rem;
  width: 100%;
  font-size: 2rem;
  margin-top: 2rem;
  font-family: chinese,sans-serif;
  font-weight: 700;
  line-height: 3rem;
}

.info-row>span {
  margin-left: .5rem;
  margin-right: .5rem;
}

.startTime::before {
  content: url("../../../assets/img/posts/head/date.svg");
}

.endTime::before {
  content: url("../../../assets/img/posts/head/endTime.svg");
}

.type::before {
  content: url("../../../assets/img/posts/head/type.svg");
}
.textNum::before {
  content: url("../../../assets/img/posts/head/textNum.svg");
}
.seeTime::before {
  content: url("../../../assets/img/posts/head/seeTime.svg");
}
.seeNum::before {
  content: url("../../../assets/img/posts/head/seeNum.svg");
}
.comment::before {
  content: url("../../../assets/img/posts/head/comment.svg");
}
</style>