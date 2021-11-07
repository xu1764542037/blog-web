<template>
  <div id="archive">
    <div class="archive-title">文章总览 - {{posts.length}}</div>
    <div class="archive-content">
      <div class="page-year">
        <span>2021年</span>
      </div>
      <div class="page-box" v-for="(page,index) in posts" @click="goPost(page.id)">
        <div class="page-img-box">
          <img :src="imgs[index].img" >
        </div>
        <span class="page-date">
          {{page.StartTime}}
        </span>
        <div class="page-name">
          {{page.name}}
        </div>
      </div>
    </div>
    <el-pagination
        class="archive-pagination"
        background
        layout="prev, pager, next"
        @current-change="handleCurrentChange"
        :page-size="15"
        :total="postNum">
    </el-pagination>
  </div>
</template>

<script>
import {selectAllArticle, selectByPage} from "@/network/article/article";

export default {
  name: "Archive",
  data() {
    return {
      posts: [],
      postNum: 0,
      currentPage: 1,
      rowAccount: 15,
      imgs: [
        {
          img: require('@/assets/img/article/content/101.png')
        },
        {
          img: require('@/assets/img/article/content/102.png')
        },
        {
          img: require('@/assets/img/article/content/103.png')
        },
        {
          img: require('@/assets/img/article/content/104.png')
        },
        {
          img: require('@/assets/img/article/content/105.png')
        },
        {
          img: require('@/assets/img/article/content/106.png')
        },
        {
          img: require('@/assets/img/article/content/107.png')
        },
        {
          img: require('@/assets/img/article/content/108.png')
        },
        {
          img: require('@/assets/img/article/content/109.png')
        },
        {
          img: require('@/assets/img/article/content/110.png')
        },
        {
          img: require('@/assets/img/article/content/111.jpg')
        },
        {
          img: require('@/assets/img/article/content/112.jpg')
        },
        {
          img: require('@/assets/img/article/content/113.jpg')
        },
        {
          img: require('@/assets/img/article/content/114.jpg')
        },
        {
          img: require('@/assets/img/article/content/115.jpg')
        }
      ]
    }
  },
  methods:{
    goPost(path) {
      this.$router.push({path: "/posts/"+path})
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
  }
}
</script>

<style scoped>
  #archive {
    position: relative;
    border-radius: 1rem;
    max-width: 90%;
    /*height: 300rem;*/
    height: auto;
    background: rgba(255,255,255,.5);
    padding: 4rem;
    margin: 0 auto;
    transition: .4s;
  }

  #archive:hover {
    box-shadow: .2rem .2rem 2rem black;
  }

  .archive-title {
    font-size: 3.6rem;
    font-family: chinese,sans-serif;
    position: relative;
    margin-left: 0.5rem;
    padding-bottom: 1rem;
    padding-left: 1rem;
  }

  .archive-title::before {
    position: absolute;
    top: calc(((100% - 3rem)/ 2));
    left: -.9rem;
    z-index: 1;
    width: 1.2rem;
    height: 1.2rem;
    border: .4rem solid #81d8cf;
    border-radius: 50%;
    content: '';
    line-height: .5rem;
    -webkit-transition: all .2s ease-in-out;
    -moz-transition: all .2s ease-in-out;
    -o-transition: all .2s ease-in-out;
    -ms-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
  }

  .archive-title::after {
    position: absolute;
    top: 3rem;
    bottom: 0;
    left: 0;
    z-index: 0;
    width: .2rem;
    height: 1.5em;
    background: #cff0ed;
    content: '';
  }

  .archive-content {
    margin-left: .5rem;
    padding-left: 1.2rem;
    border-left: 2px solid #cff0ed;
  }

  .page-year {
    position: relative;
    font-size: 2.8rem;
    visibility: visible;
    font-family: chinese,sans-serif;
    font-weight: 700;
    letter-spacing: .4rem;
  }

  .page-box {
    width: 100%;
    height: 10rem;
    margin: 3rem auto;
    border-radius: 1rem;
    background: #ECF5FF;
  }

  .page-img-box {
    position: absolute;
    height: 10rem;
    width: 10rem;
    border-radius: 1rem 0 0 1rem;
    overflow: hidden;
  }

  .page-img-box>img {
    object-fit: cover;
    position: absolute;
    height: 100%;
    width: 100%;
    transition: .4s;
  }

  .page-box:hover .page-img-box>img {
    transform: scale(1.2);
  }

  .page-date {
    position: relative;
    font-size: 2.4rem;
    margin-left: 15rem;
    top: 1.8rem;
    font-family: crazy,sans-serif;
    font-weight: 700;
    color: #2c2c2c;
  }

  .page-date:before {
    content: url("../../../../assets/img/article/content/date.svg");
    position: absolute;
    margin-left: -2.5rem;
    top: .3rem;
  }

  .page-name {
    position: relative;
    height: 3rem;
    width: 82%;
    top: 3rem;
    left: 12.5rem;
    font-size: 1.8rem;
    font-family: PingFangSC,sans-serif;
    transition: .4s;
    -webkit-line-clamp: 1; /*  -webkit-line-clamp用来限制在一个块元素显示的文本的行数 */
    display: -webkit-box;  /*  display: -webkit-box; 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示  */
    -webkit-box-orient: vertical; /*  -webkit-box-orient 必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式  */
  }

  .page-box:hover .page-name {
    color: #8CC5FF;
    left: 15rem;
  }

  .archive-pagination {
    margin-left: 40%;
  }
</style>