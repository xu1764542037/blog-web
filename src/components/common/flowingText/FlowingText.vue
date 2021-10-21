<template>
  <div class="flowing-text">
    <span class="blog-name"><slot name="blog_name"></slot></span>
    <span class="blog-subtitle">
      {{content}}
      <p id="cursor">|</p>
    </span>
  </div>
</template>

<script>
export default {
  name: "FlowingText",
  props: {
    texts: {
      type: Array,
      default() {
        return {

        }
      }
    }
  },
  data() {
    return {
      text: "",
      content: "",
      textLength: 1,
      currentTextNum: 0
    }
  },
  methods: {
    increase() {
      this.text = this.texts[this.currentTextNum]
      this.currentTextNum = this.currentTextNum + 1
      if (this.currentTextNum === this.texts.length ) {
        this.currentTextNum = 0
      }

      new Promise((resolve, reject) => {
        let a = setInterval(() => {
          resolve();
          if (this.content.length < this.text.length) {
            this.textLength = this.textLength +1
            this.content = this.text.substr(0,this.textLength)
          } else if (this.content.length === this.text.length){
            clearInterval(a)
            setTimeout( () => {
              this.reduce();
            },2000)
          }
        },200)
      }).then(data => {
      })
    },
    reduce() {
      new Promise((resolve, reject) => {
        let b = setInterval(() => {
          resolve();
          if (this.content.length > 0) {
            this.textLength = this.textLength - 2
            this.content = this.text.substr(0,this.textLength)
          } else if (this.content.length === 0){
            clearInterval(b)
            setTimeout( () => {
              this.increase();
            },1000)
          }
        },200)
      }).then(data => {
      })
    }
  },
  created() {
    this.increase();
  }


}
</script>

<style scoped>


  .flowing-text {
    height: 120px;
    width: 600px;
    margin: 21% auto;
    text-align: center;
    position: relative;
    color: #EFEDEC;
    top: 43%;
  }

  .blog-name {
    font-family: 'crazy',sans-serif;
    font-size: 5.8rem;
  }

  .blog-subtitle {
    position: relative;
    font-family: 'english',sans-serif;
    font-size: 1.8rem;
    top: -15px;
  }

  #cursor {
    font-family: "微软雅黑",sans-serif;
    font-size: 2.4rem;
    animation: blink .8s linear infinite;
    /* 其它浏览器兼容性前缀 */
    -webkit-animation: blink .8s linear infinite;
    -moz-animation: blink .8s linear infinite;
    -ms-animation: blink .8s linear infinite;
    -o-animation: blink .8s linear infinite;
  }


  /* 定义keyframe动画，命名为blink */
  @keyframes blink{
    0%{opacity: 1;}

    100%{opacity: 0;}
  }
  /* 添加兼容性前缀 */
  @-webkit-keyframes blink {
    0% { opacity: 1; }
    100% { opacity: 0; }
  }
  @-moz-keyframes blink {
    0% { opacity: 1; }
    100% { opacity: 0; }
  }
  @-ms-keyframes blink {
    0% {opacity: 1; }
    100% { opacity: 0;}
  }
  @-o-keyframes blink {
    0% { opacity: 1; }
    100% { opacity: 0; }
  }

  @media screen and (max-width: 420px) {
    .flowing-text {
      height: 120px;
      width: 100%;
      margin: 21% auto;
      text-align: center;
      position: relative;
      color: #EFEDEC;
      top: 43%;
    }

    #cursor {
      display: initial;
    }
  }


</style>