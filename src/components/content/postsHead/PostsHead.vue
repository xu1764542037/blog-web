<template>
  <div class="posts-head">
<!--    <img :src="page.img" οndragstart="return false">-->
<!--    <img src="@/assets/img/posts/head/19.jpeg" οndragstart="return false">-->
    <img :src="page.img">
    <div class="page-info" >
      <div class="info-name">{{res.name}}</div>
      <div class="info-row" id="info-row1">
        <span class="startTime">发表于 {{res.StartTime}}</span>
        <span class="division">|</span>
        <span class="endTime">更新于 {{res.EndTime}}</span>
        <span class="division">|</span>
        <span class="type">{{res.typeName}}</span>
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

import {selectArticle} from "@/network/article/article";

export default {
  props: {
    res: {
      TYPE: Object,
      default() {
        return {

        }
      }
    }
  },
  name: "PostsHead",
  data() {
    return {
      page: {
        name: "",
        img: 'http://106.15.38.204:8188/blog/note/assets/2021102821403347eb4ff5bf494d6a85795f3554c4ce6f.jpeg',
        textNum: "700",
        seeTime: "3",
        seeNum: "230",
        comment: "350",
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
  overflow-x: hidden;
  /*background-image: url("../../../assets/img/posts/head/19.jpeg");*/
  /*background-size: cover;*/
  /*object-fit: cover;*/
  /*background-position: center center;*/
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


@media screen and (max-width: 440px) {
  .posts-head {
    position: relative;
    width: 100%;
    height: 35vh;
    background-repeat: no-repeat;
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    -o-transition: all .5s;
    -ms-transition: all .5s;
    transition: all .5s;
    color: #EFEDEC;
  }

  .posts-head>img {
    height: 35vh;
    width: 100%;
    object-fit: cover;
    position: absolute;
    pointer-events: none;
  }

  .page-info {
    position: absolute;
    height: 20rem;
    min-width: 100%;
    margin: 8rem 2rem;
    text-align: left;
  }

  .info-name {
    height: 5rem;
    width: 100%;
    font-size: 3.2rem;
    font-family: chinese,sans-serif;
    font-weight: 700;
    letter-spacing: .3rem;
    line-height: 5rem;
  }

  .startTime {
    display: none;
  }


  .seeTime {
    display: none;
  }


  .division {
    font-size: 3rem;
    position: relative;
    top: .4rem;
  }

  #info-row1 {
    margin-top: 5rem;
  }

  .info-row {
    height: 3rem;
    width: 100%;
    font-size: 1.4rem;
    margin-top: .5rem;
    font-family: chinese,sans-serif;
    font-weight: 700;
    line-height: 3rem;
  }

  .info-row>span {
    margin-left: .5rem;
    margin-right: .5rem;
  }
}
</style>