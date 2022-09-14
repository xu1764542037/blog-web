<template>
  <div id="type-list">
    <div id="lib-cards">
      <div class="lib-card" @click="goKnowledge">
        <div class="card-p-box">
          <p class=card-title>知识笔记</p>
          <p class="card-content">记录知识和学习过程，内容主要包括计算机专业的相关学科</p>
        </div>
      </div>
      <div class="lib-card" @click="goCourse">
        <div class="card-p-box" >
          <p class=card-title>实用教程</p>
          <p class="card-content">将自己实践出来的经验汇总成教程，知识面较广，也收集了非原创的实用教程</p>
        </div>
      </div>
      <div class="lib-card" @click="goShare">
        <div class="card-p-box">
          <p class=card-title>干货分享</p>
          <p class="card-content">收集并分享一些实用的知识资讯，在这里你能发现你想要的宝藏
          </p>
        </div>
      </div>
      <div class="lib-card" @click="goChat">
        <div class="card-p-box">
          <p class=card-title>茶余饭后</p>
          <p class="card-content">表达博主日常对人对事的思考，坐下来喝一杯卡布奇诺，一起唠唠嗑呗
          </p>
        </div>
      </div>
      <div class="lib-card" @click="goGood">
        <div class="card-p-box">
          <p class=card-title>优质转载</p>
          <p class="card-content">转载一些优质内容，文末写有观后感，同时也起到了防止原文被删的备份作用
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TypeList",
  methods: {
    goKnowledge() {
      this.$router.replace({path: "/categorie/知识笔记/"})
    },
    goCourse() {
      this.$router.replace({path: "/categorie/实用教程/"})
    },
    goShare() {
      this.$router.replace({path: "/categorie/干货分享/"})
    },
    goChat() {
      this.$router.replace({path: "/categorie/茶余饭后/"})
    },
    goGood() {
      this.$router.replace({path: "/categorie/优质转载/"})
    },

  }
}
</script>

<style scoped>
#type-list {
  position: relative;
  max-width: 100%;
  height: 90rem;
  padding: 0 4rem;
  margin: 0 auto;
  transition: .6s;
}

#lib-cards {
  height: 100%;
  width: 100%;
  background: rgba(255,255,255,.5);
  justify-content: space-evenly;
  border-radius: 0 0 1rem 1rem;

}


.lib-card {
  width: 30rem;
  height: 30rem;
  margin-left: 10rem;
  margin-top: 5rem;
  /*background: rgba(0,0,0,.5);*/
  float: left;
  overflow: hidden;
  cursor: pointer;
  transition: .6s;

}


.lib-card:nth-child(1) {
  margin-top: 10rem;
  background-image: url("../../../../../src/assets/img/type/content/knowledge.png");
}

.lib-card:nth-child(2) {
  margin-top: 10rem;
  background-image: url("../../../../../src/assets/img/type/content/course.png");

}

.lib-card:nth-child(3) {
  margin-top: 10rem;
  background-image: url("../../../../../src/assets/img/type/content/share.png");

}

.lib-card:nth-child(4) {
  margin-left: 30rem;
  background-image: url("../../../../../src/assets/img/type/content/chat.png");

}

.lib-card:nth-child(5) {
  background-image: url("../../../../../src/assets/img/type/content/great.png");
}


.card-p-box {
  height: 16.5rem;
  width: 100%;
  margin-top: 13rem;
  transform: translateY(40%);
  transition: .8s;
}

.card-p-box:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to bottom,transparent 0,rgba(0,0,0,.8) 100%);
  background-blend-mode: overlay;
  opacity: 0;
  transform: translateY(100%);
  transition: 5s;
}


.lib-card:hover .card-p-box {
  transform: translateY(5%);

}

.lib-card:hover .card-p-box:after{
  transition: 1s cubic-bezier(.23,1,.32,1);
  opacity: 1;
  transform: translateY(0);
}

.card-title {
  text-shadow: rgb(0 0 0 / 10%) 0 10px 10px;
  position: absolute;
  margin: 5rem 7rem;
  font-size: 3.6rem;
  cursor: pointer;
  color: #BDCEFC;
  font-family: chinese,sans-serif;}


.lib-card:nth-child(1)>.card-p-box>.card-title:before {
  position: absolute;
  content: url("../../../../../src/assets/img/type/content/book.svg");
  margin-left: -4.5rem;
  margin-top: .5rem;
}

.card-title:after {
  content: ;
}

.lib-card:nth-child(2)>.card-p-box>.card-title:before {
  position: absolute;
  content: url("../../../../../src/assets/img/type/content/notebook.svg");
  margin-left: -5rem;
  margin-top: -.2rem;
}

.lib-card:nth-child(3)>.card-p-box>.card-title:before {
  position: absolute;
  content: url("../../../../../src/assets/img/type/content/happy.svg");
  margin-left: -4.5rem;
  /*margin-top: .5rem;*/
}

.lib-card:nth-child(4)>.card-p-box>.card-title:before {
  position: absolute;
  content: url("../../../../../src/assets/img/type/content/message.svg");
  margin-left: -4.5rem;
  margin-top: .5rem;
}

.lib-card:nth-child(5)>.card-p-box>.card-title:before {
  position: absolute;
  content: url("../../../../../src/assets/img/type/content/good.svg");
  margin-left: -4.5rem;
  margin-top: -.1rem;
}

.card-content {
  padding: 0 1rem;
  position: fixed;
  top: 10.5rem;
  font-size: 1.5rem;
  color: white;
  font-family: sans-serif,chinese;
  font-weight: 700;
}

</style>