<template>
  <div id="index-content" ref="pageMove">
    <contributions-table></contributions-table>
    <notice></notice>
    <carousel></carousel>
    <page v-for="(item,index) in posts" :imgs="imgs" :index="index" :page="item"></page>
    <el-pagination
        class="index-pagination"
        background
        layout="prev, pager, next"
        @current-change="handleCurrentChange"
        :total="postNum">
    </el-pagination>
  </div>
</template>

<script>
import ContributionsTable from "@/components/common/indexContent/contributions/ContributionsTable";
import Notice from "@/components/common/indexContent/notice/Notice";
import Carousel from "@/components/common/indexContent/carousel/Carousel";
import Page from "@/components/common/indexContent/page/Page";
import {selectAllArticle, selectByPage} from "@/network/article/article";

export default {
  name: "IndexContent",
  components: {
    ContributionsTable,
    Notice,
    Carousel,
    Page
  },
  data() {
    return {
      noticeIsShow: false,
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
      rowAccount: 10
    }
  },
  methods: {
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
    }
  },
  created() {
    selectAllArticle().then(res => {
      // console.log(res);
      if (res.obj === null ) {
        this.postNum = 0
      } else {
        this.postNum = res.obj.length
      }
    })

    selectByPage(this.currentPage,this.rowAccount).then(res => {
      // console.log(res);
      if (res.obj === null ) {
        this.posts = [];
      } else {
        this.posts = res.obj;
      }
    })

  },
}
</script>

<style scoped>
#index-content {
  transition: all 0.4s ease 0s;
}

.index-pagination {
  /*margin: 0 auto;*/
  margin-left: 40%;
}

@media screen and (max-width: 440px) {
  #index-content {
    width: 100%;
  }

  .index-pagination {
    /*margin: 0 auto;*/
    margin-left: 25%;
    margin-top: 2rem;
  }
}

</style>