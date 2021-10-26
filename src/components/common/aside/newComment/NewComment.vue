<template>
  <div class="new-comment" ref="obtainTop" :style="getStyle()">
    <div class="title">
      <p></p>
      <p>最新评论</p>
    </div>
    <div class="content" v-for="(content,index) in comments">
      <div class="content-img-box">
        <img class="content-img" :src="content.headImg">
      </div>
      <div class="content-content-box">
        <p class="content-content">
          {{content.content}}
        </p>
      </div>
      <div class="name-time-box">
        {{content.name}} / {{time[index+1]}}天前
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewComment",
  data() {
    return {
      marginLeft: '70%',
      time: [
          0
      ],
      comments: [
        {
          headImg: require('@/assets/img/index/aside/comment/106.png'),
          content: '我听说老徐很帅？特地过来看看',
          name: '老徐最棒了',
          time: '2021-10-17'
        },
        {
          headImg: require('@/assets/img/index/aside/comment/107.png'),
          content: '是真的啵',
          name: '老徐最好了',
          time: '2021-10-18'
        },
        {
          headImg: require('@/assets/img/index/aside/comment/108.png'),
          content: '那还有假？',
          name: '老徐还好吗',
          time: '2021-10-19'
        },
        {
          headImg: require('@/assets/img/index/aside/comment/109.png'),
          content: '我不太信',
          name: '老徐最好了',
          time: '2021-10-20'
        },
        {
          headImg: require('@/assets/img/index/aside/comment/110.png'),
          content: '不信就滚',
          name: '老徐太好了',
          time: '2021-10-21'
        }
      ]
    }
  },
  mounted() {
    for (let i = 0;i < 5; i++ ) {
      let year = this.comments[i].time.split("-")[0];
      let month = this.comments[i].time.split("-")[1];
      let day = this.comments[i].time.split("-")[2];
      const days = (year*365) + (month*30) + day*1;


      let today = new Date();
      let nowYear = today.getFullYear();
      let nowMonth = today.getMonth()+1;
      let nowDay = today.getDate();


      const nowDays = nowYear*365 + nowMonth*30 + nowDay;

      this.time.push(nowDays-days)

      window.addEventListener('scroll', this.handleScrollx, true)


    }
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
        marginLeft: this.marginLeft
      }
    },
  }
}
</script>

<style scoped>
.new-comment {
  position: relative;
  width: 100%;
  min-height: 40rem;
  margin: 3rem auto;
  border-radius: 1rem;
  background: rgba(255,255,255,.5);
  padding: 2rem 1rem;
  transition: .8s;
}

.new-comment:hover {
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
  content: url("../../../../assets/img/index/aside/comment/comment.svg");
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

.content-content-box {
  min-height: 2rem;
  width: 65%;
  font-family: PingFangSC,sans-serif;
  font-weight: 700;
  font-size: 1.6rem;
  margin-left: 33%;
  padding-top: 1rem;
  display: -webkit-box;  /*  display: -webkit-box; 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示  */
  -webkit-box-orient: vertical; /*  -webkit-box-orient 必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式  */
  -webkit-line-clamp: 2; /*  -webkit-line-clamp用来限制在一个块元素显示的文本的行数 */
  overflow: hidden;
}

.name-time-box {
  width: 65%;
  font-family: PingFangSC,sans-serif;
  margin-left: 33%;
  margin-top: .5rem;
  font-size: 1.4rem;
  color: #959da5;
  transition: .4s;
}

.content:hover .name-time-box{
  color: #2c2c2c;

}
</style>