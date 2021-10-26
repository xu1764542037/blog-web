<template>
  <div id="archive">
    <div class="archive-title">文章总览 - {{pages.length}}</div>
    <div class="archive-content">
      <div class="page-year">
        <span>2021年</span>
      </div>
      <div class="page-box" v-for="page in pages">
        <div class="page-img-box">
          <img :src="page.img" >
        </div>
        <span class="page-date">
          {{page.time}}
        </span>
        <div class="page-name">
          {{page.name}}
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Archive",
  data() {
    return {
      pages: [
        {
          img: require('@/assets/img/article/content/101.png'),
          name: 'idea从零到精通07之idea数据库管理',
          time: '2021-10-20'
        },
        {
          img: require('@/assets/img/article/content/102.png'),
          name: '字节码增强技术之 Java Agent 入门',
          time: '2021-10-21'
        },
        {
          img: require('@/assets/img/article/content/103.png'),
          name: 'C++还在用printf/cout进行Debug？学习一下如何自己写日志库吧',
          time: '2021-10-22'
        },
        {
          img: require('@/assets/img/article/content/104.png'),
          name: 'seata源码解析：seata server如何存储事务执行状态的？',
          time: '2021-10-23'
        },
        {
          img: require('@/assets/img/article/content/105.png'),
          name: '阿里四面：Spring Exception的原理你精通了吗？',
          time: '2021-10-24'
        },
        {
          img: require('@/assets/img/article/content/111.jpg'),
          name: '基于SSM+SpringBoot+LayUI的医院挂号系统(附论文)',
          time: '2021-10-20'
        },
        {
          img: require('@/assets/img/article/content/112.jpg'),
          name: '公司CEO和我说：在系统优化的时候，不要轻易用多线程',
          time: '2021-10-21'
        },
        {
          img: require('@/assets/img/article/content/113.jpg'),
          name: 'Redis高并发防止秒杀超卖实战源码解决方案',
          time: '2021-10-22'
        },
        {
          img: require('@/assets/img/article/content/114.jpg'),
          name: 'idea 使用maven 打包jar 打的jar包在本地电脑可以正常运行，但在其他电脑会出错',
          time: '2021-10-23'
        },
        {
          img: require('@/assets/img/article/content/115.jpg'),
          name: '自学Java最起码要学到什么程度？',
          time: '2021-10-24'
        },
        {
          img: require('@/assets/img/article/content/101.png'),
          name: 'idea从零到精通07之idea数据库管理',
          time: '2021-10-20'
        },
        {
          img: require('@/assets/img/article/content/102.png'),
          name: '字节码增强技术之 Java Agent 入门',
          time: '2021-10-21'
        },
        {
          img: require('@/assets/img/article/content/103.png'),
          name: 'C++还在用printf/cout进行Debug？学习一下如何自己写日志库吧',
          time: '2021-10-22'
        },
        {
          img: require('@/assets/img/article/content/104.png'),
          name: 'seata源码解析：seata server如何存储事务执行状态的？',
          time: '2021-10-23'
        },
        {
          img: require('@/assets/img/article/content/105.png'),
          name: '阿里四面：Spring Exception的原理你精通了吗？',
          time: '2021-10-24'
        },
        {
          img: require('@/assets/img/article/content/111.jpg'),
          name: '基于SSM+SpringBoot+LayUI的医院挂号系统(附论文)',
          time: '2021-10-20'
        },
        {
          img: require('@/assets/img/article/content/112.jpg'),
          name: '公司CEO和我说：在系统优化的时候，不要轻易用多线程',
          time: '2021-10-21'
        },
        {
          img: require('@/assets/img/article/content/113.jpg'),
          name: 'Redis高并发防止秒杀超卖实战源码解决方案',
          time: '2021-10-22'
        },
        {
          img: require('@/assets/img/article/content/114.jpg'),
          name: 'idea 使用maven 打包jar 打的jar包在本地电脑可以正常运行，但在其他电脑会出错',
          time: '2021-10-23'
        },
        {
          img: require('@/assets/img/article/content/115.jpg'),
          name: '自学Java最起码要学到什么程度？',
          time: '2021-10-24'
        },
      ]
    }
  }
}
</script>

<style scoped>
  #archive {
    position: relative;
    border-radius: 1rem;
    max-width: 90%;
    height: 300rem;
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
</style>