<template>
  <div class="carousel" ref="obtainTop" :style="getStyle()" >
    <el-carousel :interval="3000" arrow="never" height="40rem">

      <el-carousel-item v-for="(post,index) in posts">
        <div class="carousel-box" @click="goPost(post.id)">
          <p class="carousel-box-title">{{post.name}}</p>
          <img :src="imgs[index].img">
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import {selectAllArticle, selectByPage} from "@/network/article/article";


export default {
  name: "Carousel",
  data() {
    return {
      transform: 'scale(.5)',
      posts: [],
      imgs: [
        {
          img: require ('@/assets/img/index/content/carousel/5.jpg')
        },
        {
          img: require ('@/assets/img/index/content/carousel/10.jpg')
        },
        {
          img: require ('@/assets/img/index/content/carousel/11.jpg')
        },
        {
          img: require ('@/assets/img/index/content/carousel/12.jpg')
        },
      ]
    }
  },
  mounted() {
    // 滚动条的获取
    window.addEventListener('scroll', this.handleScrollx, true)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScrollx, true)
  },
  methods: {
    handleScrollx() {
      if (this.$refs.obtainTop.getBoundingClientRect().top<900 && this.$refs.obtainTop.getBoundingClientRect().top>-200) {
        this.transform = "scale(1)"
      }
    },
    getStyle() {
      return {
        transform: this.transform
      }
    },
    goPost(path) {
      this.$router.replace({path: "/posts/"+path+"/"})
    }
  } ,
  created() {
    selectByPage(null,null,null,null,null,null,null,1,4).then( res => {
      // console.log(res)
      this.posts = res.obj
    })
  },
}
</script>

<style>
.carousel {
  height: 40rem;
  max-width: 90%;
  margin: 4rem auto;
  border-radius: 1rem;
  overflow: hidden;
  /*background: white;*/
  z-index: -1;
  transition: .8s;
}

@media screen and (max-width: 440px) {
  .carousel {
    height: 30rem;
    max-width: 100%;
    margin:  0;
    border-radius: 0;
    overflow: hidden;
    background: white;
    z-index: -1;
    transition: .8s;
  }

  .carousel-box {
    position: relative;
    height: 30rem;
    cursor: pointer;
    border-radius: 1rem;
  }

  .carousel-box>img {
    position: relative;
    height: 30rem;
    transition: .4s;
    object-fit: cover;
  }

  .el-carousel__container {
    height: 30rem !important;
  }

}


.carousel-box {
  /*height: 100%;*/
  height: 40rem;
  width: 100%;
  cursor: pointer;
  border-radius: 1rem;
}

.carousel-box-title {
  text-align: center;
  width: 100%;
  height: 6rem;
  line-height: 6rem;
  background: rgba(255,255,255,.1);
  font-family: chinese,sans-serif;
  font-size: 3.6rem;
  position: absolute;
  z-index: 1;
  transition: .4s;
}

.carousel-box>img {
  position: absolute;
  height: 40rem;
  width: 100%;
  transition: .4s;
  object-fit: cover;
}

.carousel:hover .carousel-box>img{
  transform: scale(1.2);
}

.carousel:hover .carousel-box-title{
  color: #A0CFFF;
  background: rgba(255,255,255,.5);

}
</style>
