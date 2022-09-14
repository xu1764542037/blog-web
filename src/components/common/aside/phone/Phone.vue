<template>
  <div class="phone" ref="obtainTop" :style="getStyle()">
    <div id="hair"></div>
    <p class="time">{{time}}</p>
    <img class="status" src="@/assets/img/index/aside/phone/status-bar-dark.svg" height="70">

    <div id="hello-photo">
      <div class="hello">
        <p>Good</p>
        <p>{{when}}</p>
        <p>这里是</p>
      </div>
      <div class="photo">
        <img src="@/assets/img/index/aside/phone/head.png">
      </div>
    </div>
    <div class="name">
      <p @mouseover="changeName" @mouseleave="changeNameAgain">{{name}}</p>
    </div>
    <div class="introduce">
      <p>一名吃货区博主，在这里我将会记录并分享学习过程中遇到的问题和解决的过程，也会分享生活中的琐碎，希望在这里能够帮到你。很高兴能在这里与你见面💛</p>
    </div>
    <div id="info-data">
      <div class="data">
        <p>时光机</p>
        <p>36</p>
      </div>
      <div class="data">
        <p>标签</p>
        <p>12</p>
      </div>
      <div class="data">
        <p>分类</p>
        <p>5</p>
      </div>
    </div>
    <div class="society">
      <a href="https://github.com/xu1764542037" target="_blank"><img class="imgs" src="@/assets/img/index/aside/phone/github.svg"></a>
      <a href="https://space.bilibili.com/28598237" target="_blank"><img class="imgs" src="@/assets/img/index/aside/phone/bilibili.svg"></a>
      <a href="https://music.163.com/#/user/home?id=369891883" target="_blank"><img class="imgs" src="@/assets/img/index/aside/phone/music.svg"></a>
      <a href="tencent://message/?uin=1764542037" target="_blank"><img class="imgs" src="@/assets/img/index/aside/phone/qq.svg"></a>
      <a href="https://y.qq.com/n/ryqq/playlist/2813410072" target="_blank"><img class="imgs" src="@/assets/img/index/aside/phone/QQmusic.svg"></a>
      <a href="https://www.zhihu.com/people/xiao-xu-86-2" target="_blank"><img class="imgs" src="@/assets/img/index/aside/phone/know.svg"></a>
      <a href="https://weibo.com/u/5980924315" target="_blank"><img class="imgs" src="@/assets/img/index/aside/phone/weibo.svg"></a>
      <a href="https://blog.csdn.net/Ricardo_Xiaoxu?spm=1000.2115.3001.5343" target="_blank"><img class="imgs" src="@/assets/img/index/aside/phone/csdn.svg"></a>
    </div>
    <div class="bottom"></div>
  </div>
</template>

<script>
export default {
  name: "Phone",
  data() {
    return {
      time: '',
      name: 'Lao Xu',
      when: '',
      marginLeft: '70%',
      marginBottom: '10rem',
      startHeight: "",
      lowest: "",
    }
  },
  methods: {
    handleScrollx() {
      if (this.$refs.obtainTop.getBoundingClientRect().top<940 && this.$refs.obtainTop.getBoundingClientRect().top>-500) {
        this.marginLeft = "0"
      }
    },
    getStyle() {
      return {
        marginLeft: this.marginLeft,
        marginBottom: this.marginBottom,
      }
    },
    changeName() {
      this.name = "老徐的博客"
    },
    changeNameAgain() {
      this.name = "Lao Xu"
    },
    getTime() {
      let day;
      let hour;
      let min
      setInterval( () => {
        let day = new Date();
        hour = day.getHours();//得到小时
        min = day.getMinutes();//得到分钟
        if (min === 0) {
          min = "00"
        } else if (min<10 &&min >0) {
          min = "0"+min+""
        }

        this.time = ""+hour+":"+min+""

        if (hour>18 || hour<=6) {
          this.when = "evening"
        } else if (hour>6 && hour<=10) {
          this.when = "morning"
        } else if (hour >10 && hour<= 18) {
          this.when = "noon"
        }
      },1000)
    },

  },
  beforeDestroy() {
    if(this.time) {
      clearInterval(this.time);
    }
  },
  mounted() {
    this.getTime()

    // 滚动条的获取
    window.addEventListener('scroll', this.handleScrollx, true)
    // console.log(this.$refs.obtainTop.getBoundingClientRect().top)
    if (this.$refs.obtainTop.getBoundingClientRect().top < 900 ) {
      this.marginLeft = "0"
    }
  },

  destroyed () {
    window.removeEventListener('scroll', this.handleScrollx, true)
  },
}
</script>

<style scoped>
  .phone {
    position: relative;
    width: 100%;
    height: 63rem;
    border: 1rem solid black;
    border-radius: 3rem;
    right: 0;
    top: 4rem;
    /*background: #87CFE3;*/
    background: rgba(255,255,255,.5);
    transition: .8s;
  }

  .phone:hover {
    box-shadow: .2rem .2rem 2rem black;
  }

  .phone:hover .photo>img{
    transform: scale(1.1);
  }

  .phone>div {
    border-radius: 1.5rem;
    background: rgba(255,255,255,.3);
  }

  #hair {
    max-width: 48%;
    height: 2.6rem;
    background: black;
    margin: 0 auto;
    border-radius: 0 0 2rem 2rem;
  }

  .time {
    font-size: 1.6rem;
    font-weight: 700;
    margin: -2rem 1.5rem;
  }

  .status {
    position: absolute;
    margin: -2.8rem 75%;
    width: 23%;
  }

  #hello-photo {
    width: 100%;
    display: flex;
    height: 13rem;
    justify-content: space-evenly;
    margin-top: 3rem;
    background: rgba(0,0,0,0);
  }

  .hello {
    width: 45%;
    border-radius: 1.5rem;
    background: rgba(255,255,255,.3);
    float: left;
    font-family: 'chinese',sans-serif;
    font-size: 2.2rem;
    padding: .5rem 1rem;
    font-weight: 700;
  }

  .hello>p {
    margin-top: .9rem;
  }

  .hello>p:last-child::after {
    margin-left: -.3rem;
    margin-top: .5rem;
    position: absolute;
    content: url("../../../../assets/img/index/aside/phone/turnBottom.svg");
  }

  .photo {
    width: 45%;
    border-radius: 1.5rem;
    background: rgba(255,255,255,.3);
    overflow: hidden;
    transition: .4s;
  }

  .photo>img {
    transition: .4s;
    transform: scale(1);
    width: 100%;
    height: 100%;
  }

  .name {
    width: 93%;
    height: 6rem;
    margin-left: 1rem;
    line-height: 6rem;
    font-family: chinese,sans-serif;
    font-size: 3.6rem;
    font-weight: 900;
    text-align: center;
    transition: .4s;
    margin-top: 2rem;
  }

  .name>p {
    margin: 0 auto;
  }


  .name:hover {
    background: #2c2c2c;
    /*color: #87CFE3;*/
    color:  rgba(255,255,255,.8);
  }

  .introduce {
    text-align: center;
    width: 93%;
    font-family: chinese,sans-serif;
    height: 13rem;
    margin: 1.5rem auto;
    font-size: 1.8rem;
    padding: .5rem .5rem;
  }

  #info-data {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    height: 10rem;
    background: rgba(0,0,0,0);
  }

  .data {
    width: 29%;
    height: 9rem;
    background: rgba(255,255,255,.3);
    border-radius: 1.5rem;
    font-family: english,sans-serif;
    font-weight: 700;
    font-size: 2.2rem;
    text-align: center;
    padding-top: 1rem;
    transition: .4s;
  }

  .data:hover {
    color: rgba(255,255,255,.8);
    /*background: rgba(255,255,255,.5);*/
    background: #2c2c2c;
  }

  .data>p:first-child {
    font-family: chinese,sans-serif;
  }

  .data>p:last-child {
    margin-top: -.5rem;
    font-size: 2.8rem;
  }

  .society {
    width: 93%;
    height: 5rem;
    margin: 1rem auto;
    display: flex;
    justify-content: space-evenly;
  }

  .imgs {
    position: relative;
    height: 2.5rem;
    width: 2.5rem;
    margin-top: 1.25rem;
    cursor: pointer;
    transition: .4s;
  }

  .imgs:hover {
    transform: scale(1.2);
  }

  .bottom {
    height: .8rem;
    width: 50%;
    margin: 3rem auto;
    border: .4rem solid #2c2c2c;
  }




</style>