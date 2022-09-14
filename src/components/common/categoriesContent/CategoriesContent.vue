<template>
  <div id="categories-content">
    <div class="content">
      <div id="categories-list">
        <div id="list-head">
          <div class="head-categorie" @click="goKnowledge">
            <p class="categorie-font">知识笔记</p>
          </div>
          <div class="head-categorie" @click="goCourse">
            <p class="categorie-font">实用教程</p>
          </div>
          <div class="head-categorie" @click="goShare">
            <p class="categorie-font">干货分享</p>
          </div>
          <div class="head-categorie" @click="goChat">
            <p class="categorie-font">茶余饭后</p>
          </div>
          <div class="head-categorie" @click="goGood">
            <p class="categorie-font">优质转载</p>
          </div>
        </div>
      </div>
      <div id="list-content">
        <page v-for="(item,index) in posts" :imgs="imgs" :index="index" :page="item"></page>
        <el-pagination
            class="index-pagination"
            background
            layout="prev, pager, next"
            @current-change="handleCurrentChange"
            :total="postNum">
        </el-pagination>
      </div>
    </div>
    <index-aside v-show="asideShow"></index-aside>
    <display-and-top @is-show="AsideIsShow"></display-and-top>
  </div>
</template>

<script>
import Page from "@/components/common/indexContent/page/Page";
import IndexAside from "@/components/content/indexAside/IndexAside";
import DisplayAndTop from "@/components/common/all/displayAndTop/DisplayAndTop";
import {selectAllArticle, selectByPage} from "@/network/article/article";



export default {
  name: "CategoriesContent",
  props: {
    typeNum: {
      type: Number
    }
  },
  data() {
    return{
      imgs: [
        {
          img: require('@/assets/img/index/content/page/2.jpg'),
        },
        {
          img: require('@/assets/img/index/content/page/3.jpg'),
        },
        {
          img: require('@/assets/img/index/content/page/7.jpg'),
        },
        {
          img: require('@/assets/img/index/content/page/16.jpg'),
        },
        {
          img: require('@/assets/img/index/content/page/32.jpg'),
        },
        {
          img: require('@/assets/img/index/content/page/33.jpg'),
        },
        {
          img: require('@/assets/img/index/content/page/36.jpg'),
        },
        {
          img: require('@/assets/img/index/content/page/42.jpg'),
        },
        {
          img: require('@/assets/img/index/content/page/59.jpg'),
        },
        {
          img: require('@/assets/img/index/content/page/85.jpg'),
        },
      ],
      posts: [],
      postNum: 0,
      currentPage: 1,
      rowAccount: 10,
      asideShow: true,
    }
  },
  components: {
    Page,
    IndexAside,
    DisplayAndTop
  },
  methods: {
    AsideIsShow(data) {
      this.asideShow = data
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      selectByPage(val,this.rowAccount).then(res => {
        // console.log(res);
        if (res.obj === null ) {
          this.posts = [];
        } else {
          this.posts = res.obj;
        }
      })
    },
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
  },
  created() {
    selectAllArticle(null,null,null,null,null,this.typeNum,null).then(res => {
      // console.log(res);
      if (res.obj === null ) {
        this.postNum = 0
      } else {
        this.postNum = res.obj.length
      }
    })


    selectByPage(null,null,null,null,null,this.typeNum,null,this.currentPage,this.rowAccount).then(res => {
      // console.log(res);
      if (res.obj === null ) {
        this.posts = [];
      } else {
        this.posts = res.obj;
      }
    })
  }
}
</script>

<style scoped>
#categories-content {
  display: flex;
  -webkit-box-flex: 1;
  flex: 1 1 auto;
  margin: 0 auto;
  padding: 5rem 1.5rem;
  max-width: 1400px;
  width: 100%;
  animation: 1s ease 0s 1 normal none running bottom-top;
}

.content {
  margin-top: 4rem;
  width: 100%;
  transition: all 0.4s ease 0s;
}

#categories-list {
  position: relative;
  border-radius: 1rem;
  max-width: 90%;
  height: auto;
  margin: 0 auto;
  transition: .4s;
}

#categories-list:hover {
  /*box-shadow: .2rem .2rem 2rem black;*/
}

#list-head {
  width: 100%;
  height: 13rem;
  border-radius: 1rem;
  overflow: hidden;
  transition: .5s;

}

#list-head:before {
  background: rgba(0,0,0,.5);
  z-index: 2;
}


.head-categorie {
  width: 20%;
  height: 100%;
  position: relative;
  float: left;
  cursor: pointer;

}


.categorie-font {
  width: 100%;
  height: 100%;
  font-family: chinese,sans-serif;
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 5.2rem;
  text-align: center;
  color: white;
  background: rgba(0,0,0,.2);
  transition: .3s;
}

.head-categorie:hover .categorie-font {
  background: rgba(0,0,0,0);

}


.head-categorie:nth-child(1) {
  background-image: url("../../../assets/img/type/categories/categories_note.png");
  background-size: cover;
  background-position: top;
}

.head-categorie:nth-child(1):before {
  position: absolute;
  content: url("../../../../src/assets/img/type/categories/book_s.svg");
  margin: 1.4rem 2.3rem;
}


.head-categorie:nth-child(2) {
  background-image: url("../../../assets/img/type/categories/categories_tutorial.png");
  background-size: cover;
  background-position: top;}

.head-categorie:nth-child(2):before {
  position: absolute;
  content: url("../../../../src/assets/img/type/categories/notebook_s.svg");
  margin: 1.2rem 2.2rem;
}

.head-categorie:nth-child(3) {
  background-image: url("../../../assets/img/type/categories/categories_share.png");
  background-size: cover;
  background-position: top;}

.head-categorie:nth-child(3):before {
  position: absolute;
  content: url("../../../../src/assets/img/type/categories/happy_s.svg");
  margin: 1.4rem 2.3rem;
}

.head-categorie:nth-child(4) {
  background-image: url("../../../assets/img/type/categories/categories_diary.png");
  background-size: cover;
  background-position: top;
}

.head-categorie:nth-child(4):before {
  position: absolute;
  content: url("../../../../src/assets/img/type/categories/message_s.svg");
  margin: 1.4rem 2.3rem;
}

.head-categorie:nth-child(5) {
  background-image: url("../../../assets/img/type/categories/categories_reprint.png");
  background-size: cover;
  background-position: top;
}

.head-categorie:nth-child(5):before {
  position: absolute;
  content: url("../../../../src/assets/img/type/categories/good_s.svg");
  margin: 1.2rem 2.3rem;
}

.index-pagination {
  /*margin: 0 auto;*/
  margin-left: 40%;
}
</style>