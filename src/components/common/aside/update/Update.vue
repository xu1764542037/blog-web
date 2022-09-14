<template>
  <div class="update" ref="obtainTop" :style="getStyle()">
    <div class="title">
      <p></p>
      <p>内容更新</p>
    </div>
    <div class="content" v-for="(page,index) in posts" @click="goPost(page.id)">
      <div class="content-img-box">
        <img class="content-img" :src="imgs[index].img">
      </div>
      <div class="content-name-box">
        <p class="content-name">{{page.name}}</p>
      </div>
      <div class="content-time-box">
        <p class="content-time">{{page.StartTime}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {selectAllArticle, selectByPage} from "@/network/article/article";

export default {
  name: "Update",
  data: function () {
    return {
      marginLeft: '70%',
      posts: [],
      imgs: [
        {
         img: require ('@/assets/img/index/aside/update/101.png')
        },
        {
          img: require ('@/assets/img/index/aside/update/102.png')
        },
        {
          img: require ('@/assets/img/index/aside/update/103.png')
        },
        {
          img: require ('@/assets/img/index/aside/update/104.png')
        },
        {
          img: require ('@/assets/img/index/aside/update/105.png')
        },
      ]
    }
  },
  mounted() {
    // console.log('滚动高度', window.pageYOffset)
    // console.log('距离顶部高度', this.$refs.obtainTop.getBoundingClientRect().top)

    this.startHeight = this.$refs.obtainTop.getBoundingClientRect().top

    // 滚动条的获取
    window.addEventListener('scroll', this.handleScrollx, true)

  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScrollx, true)
  },
  methods: {
    handleScrollx() {
      if (this.$refs.obtainTop.getBoundingClientRect().top<940 && this.$refs.obtainTop.getBoundingClientRect().top>-400) {
        this.marginLeft = "0"
      }
    },
    getStyle() {
      return {
        marginLeft: this.marginLeft,
        marginTop: this.marginTop,
      }
    },
    goPost(path) {
      this.$router.replace({path: "/posts/"+path+"/"})
    }
  } ,
  created() {
    selectByPage(null,null,null,null,null,null,null,1,5).then( res => {
      this.posts = res.obj
    })
  },

}
</script>

<style scoped>
.update {
  position: relative;
  width: 100%;
  min-height: 40rem;
  margin: 0 auto;
  border-radius: 1rem;
  background: rgba(255,255,255,.5);
  padding: 2rem 1rem;
  transition: .8s;
}

.update:hover {
  box-shadow: .2rem .2rem 2rem black;
  background: rgba(255,255,255,.7);
}

.title {
  font-family: chinese,sans-serif;
  font-size: 2.3rem;
  font-weight: 700;
  padding-bottom: 4rem;
}

.title>p:first-child:before {
  content: url("../../../../assets/img/index/aside/update/update.svg");
}

.title>p:last-child {
  margin: -3.4rem 3.5rem;
}

.content {
  height: 8rem;
  width: 100%;
  margin: 0 auto;
  border-radius: 1rem;
  transition: .4s;
}

.content:hover {
  background: #A0CFFF;

}

.content:hover .content-img{
  transform: scale(1.2);

}

.content:hover .content-time-box {
  color: black;
}

.content-img-box {
  position: absolute;
  overflow: hidden;
  height: 7rem;
  width: 24%;
  border-radius: 1rem;
  transition: .4s;
  margin: .5rem .5rem;
}

.content-img {
  width: 100%;
  height: 100%;
  transition: .4s;
}


.content-name-box {
  min-height: 2rem;
  width: 65%;
  font-family: PingFangSC,sans-serif;
  font-weight: 700;
  font-size: 1.6rem;
  margin-left: 33%;
  padding-top: 1.2rem;
}

.content-time-box {
  min-height: 1rem;
  width: 60%;
  font-family: PingFangSC,sans-serif;
  position: absolute;
  margin: .3rem 31%;
  font-size: 1.3rem;
  color: #959da5;
  transition: .4s;
}

</style>