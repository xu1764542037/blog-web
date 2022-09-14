<template>
  <div class="post">
    <div v-highlight class="article" v-html="text"></div>
  </div>
</template>

<script>
import {selectArticle} from "@/network/article/article";
import "highlight.js/styles/arduino-light.css";


export default {
  props: {
    text: {
      type:String
    }
  },
  name: "Post",
  data() {
    return {
      value: ''
    }
  }
}
</script>

<style scoped>


h1 {
  font-size: 3.6rem;
}

.post {
  position: relative;
  border-radius: 1rem;
  max-width: 90%;
  /*width: 100%;*/
  min-height: 300rem;
  background: rgba(255,255,255,.5);
  padding: 7rem 4%;
  margin: .5% auto;
  transition: .4s;
}

@media screen and (max-width: 440px) {
  .post {
    position: absolute;
    border-radius: 0;
    background: rgba(255,255,255,.5);
    padding: 7rem 4%;
    transition: .4s;
    margin: 0 auto;
    width: 100%;
    max-width: 100%;

  }
}

.post:hover {
  box-shadow: .2rem .2rem 2rem black;
}

.article>>>h1 {
  font-size: 3.6rem;
  font-family: chinese,sans-serif;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.article>>>h1::before {
  content: "H1";
  font-size: 3.6rem;
  font-family: PingFangSC,sans-serif;
  margin-top: 2rem;
  margin-bottom: 2rem;
  color: #A0CFFF;
  padding-right: 1rem;
}

.article>>>h2 {
  font-size: 3.4rem;
  font-family: chinese,sans-serif;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.article>>>h2::before {
  content: "H2";
  font-size: 3.6rem;
  font-family: PingFangSC,sans-serif;
  margin-top: 2rem;
  margin-bottom: 2rem;
  color: #A0CFFF;
  padding-right: 1rem;

}

.article>>>h3 {
  font-size: 3.2rem;
  font-family: chinese,sans-serif;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.article>>>h3::before {
  content: "H3";
  font-size: 3.6rem;
  font-family: PingFangSC,sans-serif;
  margin-top: 2rem;
  margin-bottom: 2rem;
  color: #A0CFFF;
  padding-right: 1rem;

}

.article>>> {
  font-size: 2rem;
  font-family: PingFangSC,sans-serif;
  line-height: 4rem;
  letter-spacing: .2rem;
}

.article>>>img {
  /*max-height: 40rem;*/
  max-width: 80%;
  margin: 0 auto;
}

.article>>>table {
  margin-top: 2rem;
  margin-bottom: 2rem;
  overflow: hidden;
  font-size: 1.8rem;
  border-radius: 1.2rem;
  border: 0 solid;
  border-collapse: collapse;
}



.article>>>table tbody tr:nth-child(odd){
  background: #F0F3FA;

}

.article>>>table tbody tr:nth-child(even){

  background: #DBE2F2;

}

.article>>>tr {
  background: #F0F3FA;
}

.article>>>table tbody tr td{
  border-right: .2rem solid #87CFE3;
  padding-left: 1rem;
}

.article>>>table tr td:last-child{
  border-right: 0;
}

.article>>>thead tr{
  background: #B3E7E2;
  font-weight: 700;
  font-size: 2rem;
}

.article>>>thead tr th{
  border-right: .2rem solid #87CFE3;
  text-align: left;
  padding-left: 1rem;
}

.article>>>table thead tr th:last-child{
  border-right: 0;
}

.article>>>s {
  color: gray;
}

.article>>>blockquote {
  border-radius: .5rem;
  border-left: .5rem solid #B1D6FF;
  padding-left: 2rem;
  background: #ECF5FF;
  color: grey;
}

@media screen and (max-width: 440px) {
  .article>>> {
    font-size: 1.7rem;
    font-family: PingFangSC,sans-serif;
    line-height: 4rem;
    letter-spacing: .15rem;
  }

  .article>>>h1 {
    font-size: 3.2rem;
    font-family: chinese,sans-serif;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .article>>>h2 {
    font-size: 3.0rem;
    font-family: chinese,sans-serif;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .article>>>h3 {
    font-size: 2.8rem;
    font-family: chinese,sans-serif;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
}

</style>