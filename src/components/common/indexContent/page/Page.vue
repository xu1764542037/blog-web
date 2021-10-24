<template>
  <div class="page" ref="obtainTop" :style="getStyle()">
    <div class="page-img-box">
      <img class="page-img" :src="page.img">
    </div>
    <div class="page-content">
      <div class="content-name">
        {{page.name}}
      </div>
      <div class="content-title">
        {{page.title}}
      </div>
      <div class="content-info">
        <span class="info-time">{{page.time}}</span>
        <span class="label-tag"></span>
        <span class="info-label" v-for="label in page.label">{{label}}</span>
        <span class="info-commentNum">{{page.commentNum}}条评论</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Page",
  props: {
    page: {
      type: Object,
      default() {
        return {

        }
      }
    }
  },
  data() {
    return {
      transform: 'scale(.5)'
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
      if (this.$refs.obtainTop.getBoundingClientRect().top<900 && this.$refs.obtainTop.getBoundingClientRect().top>-100) {
        this.transform = "scale(1)"
      }
    },
    getStyle() {
      return {
        transform: this.transform
      }
    }
  }
}
</script>

<style scoped>
.page {
  position: relative;
  max-width: 90%;
  height: 25rem;
  background: rgba(255,255,255,.5);
  margin: 4rem auto;
  border-radius: 1rem;
  display: flex;
  transition: .8s;
}

.page:hover {
  box-shadow: .2rem .2rem 2rem black;
  background: rgba(255,255,255,.7);


}

.page-img-box {
  position: absolute;
  height: 100%;
  width: 45%;
  border-radius: 1rem 0 0 1rem;

  overflow: hidden;
}

.page-img {
  height: 100%;
  width: 100%;
  transition: .4s;
  object-fit: cover;
}

.page:hover .page-img {
  transform: scale(1.1);
}

.page-content {
  height: 100%;
  width: 55%;
  margin-left: 45%;
}

.content-name {
  height: 7rem;
  width: 80%;
  line-height: 3.5rem;
  margin-top: 3.5rem;
  margin-left: 10%;
  font-family: chinese,sans-serif;
  font-size: 2.8em;
  font-weight: 700;
  display: -webkit-box;  /*  display: -webkit-box; 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示  */
  -webkit-box-orient: vertical; /*  -webkit-box-orient 必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式  */
  -webkit-line-clamp: 2; /*  -webkit-line-clamp用来限制在一个块元素显示的文本的行数 */
  overflow: hidden;
  transition: .4s;
}

.page:hover .content-name{
  margin-top: 1rem;
}

.content-title {
  position: relative;
  height: 5rem;
  opacity: 0;
  width: 80%;
  line-height: 2.5rem;
  margin-left: 10%;
  display: -webkit-box;  /*  display: -webkit-box; 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示  */
  -webkit-box-orient: vertical; /*  -webkit-box-orient 必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式  */
  -webkit-line-clamp: 2; /*  -webkit-line-clamp用来限制在一个块元素显示的文本的行数 */
  overflow: hidden;
  font-size: 1.6rem;
  font-family: PingFangSC,sans-serif;
  color: #767676;
  transition: .4s;
}

.page:hover .content-title{
  opacity: 1;
  margin-top: 1rem;
}

.content-info {
  position: relative;
  height: 3rem;
  width: 80%;
  margin-left: 10%;
  transition: .4s;
  font-family: chinese,sans-serif;
  font-size: 2.0rem;
  line-height: 3rem;
  font-weight: 700;
}

.page:hover .content-info {
  margin-top: 5rem;
}

.info-time {
  line-height: 3rem;
  letter-spacing: .2rem;
}

.info-time:before {
  margin-right: 3%;
  content: url("../../../../assets/img/index/content/page/date.svg");
}

.label-tag::before {
  content: url("../../../../assets/img/index/content/page/label.svg");
  margin-left: 1rem;
}

.info-label {
  background: #959da5;
  color: #EFEDEC;
  margin-left: 3%;
  font-size: 2.0rem;
  border-radius: .5rem;
  transition: .4s;
  text-align: center;
  line-height: 3rem;
}

.info-label:hover {
  background: #A0CFFF;
}

.info-commentNum:before {
  content: url("../../../../assets/img/index/content/page/dialogue.svg");
  margin-left: 3%;
  margin-right: 3%;
}
</style>