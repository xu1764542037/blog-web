<template>
    <ul class="first" ref="obtainTop">
      <li v-for="(FirstName,index) in this.NameData">
        <div class="firstLi">
          <img :src="FirstName.img">
          <a class="menus">{{FirstName.firstName}}</a>
        </div>
          <ul class="second">
            <li v-for="(SecondName,index) in FirstName.secondName">
              <img :src="SecondName.img">
              <a class="menus-items">{{SecondName.name}}</a>
            </li>
          </ul>
      </li>
    </ul>

<!--  <h1>{{this.NameData[0].img}}</h1>-->
</template>

<script>
export default {
  name: "Menu",
  data() {
    return{
      NameData: [
          {
            firstName: "本站",
            img: require('@/assets/img/index/menu/about-1.svg'),
            img2: require('@/assets/img/index/menu/about.svg'),
            secondName: [{
              name: "公告栏",
              url: "/title",
              img: require('@/assets/img/index/menu/title.svg'),
            },
            {
              name: "关于本站",
              url: "/collection",
              img: require('@/assets/img/index/menu/collection.svg'),
            },
            {
              name: "留言箱",
              url: '/mailbox',
              img: require('@/assets/img/index/menu/mailbox.svg'),
            },
            {
              name: "更新日志",
              url: '/update',
              img: require('@/assets/img/index/menu/update.svg'),
            }
          ]
        },
        {
          firstName: "朋友",
          img: require('@/assets/img/index/menu/body-1.svg'),
          img2: require('@/assets/img/index/menu/body.svg'),
          secondName: [
            {
              name: "狐朋狗友",
              url: "/link",
              img: require('@/assets/img/index/menu/link.svg'),
            },
            {
              name: "朋友圈",
              url: "/friends",
              img: require('@/assets/img/index/menu/friends.svg'),
            }
          ]
        },
        {
          firstName: "功能",
          img: require('@/assets/img/index/menu/puzzle-1.svg'),
          img2: require('@/assets/img/index/menu/puzzle.svg'),
          secondName: [
            {
              name: "画廊",
              url: "/gallery",
              img: require('@/assets/img/index/menu/gallery.svg'),
            },
            {
              name: "八音盒",
              url: "/musicbox",
              img: require('@/assets/img/index/menu/musicbox.svg'),
            },
            {
              name: "网址导航",
              url: '/plan',
              img: require('@/assets/img/index/menu/plan.svg'),
            },
            {
              name: "视频解析",
              url: '/video',
              img: require('@/assets/img/index/menu/video.svg'),
            }
          ]
        },
        {
          firstName: "生活",
          img: require('@/assets/img/index/menu/life-1.svg'),
          img2: require('@/assets/img/index/menu/life.svg'),
          secondName: [
            {
              name: "歌单",
              url: "/music",
              img: require('@/assets/img/index/menu/music.svg'),
            },
            {
              name: "影评",
              url: "/movie",
              img: require('@/assets/img/index/menu/movie.svg'),
            },
            {
              name: "相册",
              url: '/photoes',
              img: require('@/assets/img/index/menu/photoes.svg'),
            },
            {
              name: "琐事",
              url: '/bibi',
              img: require('@/assets/img/index/menu/bibi.svg'),
            },
            {
              name: "老徐日记",
              url: '/daily',
              img: require('@/assets/img/index/menu/daily.svg'),
            }
          ]
        },
        {
          firstName: "文库",
          img: require('@/assets/img/index/menu/book-1.svg'),
          img2: require('@/assets/img/index/menu/book.svg'),
          secondName: [
            {
              name: "时光机",
              url: "/time",
              img: require('@/assets/img/index/menu/time.svg'),

            },
            {
              name: "标签",
              url: '/label',
              img: require('@/assets/img/index/menu/label.svg'),
            },
            {
              name: "分类",
              url: "/style",
              img: require('@/assets/img/index/menu/style.svg'),
            },
            {
              name: "书评",
              url: "/say",
              img: require('@/assets/img/index/menu/say.svg'),
            },
            {
              name: "文档网站",
              url: "/file",
              img: require('@/assets/img/index/menu/file.svg'),
            },
          ]
        },
      ],
    }
  }
}
</script>

<style scoped>
  img {
    height: 2.2rem;
    width: 2.2rem;
    margin-right: 7px;
  }


  .first,.second {
    list-style:none;
    text-align: center;
  }

  .first {
    margin-top: .5rem;
  }

  .firstLi {
    height: 4rem;
    width: 9rem;
    transition: .4s;
  }

  .first:last-child {
    margin-right: 19.5%;
  }


  .first>li {
    float: right;
    margin-right: 1.5rem;
    position: relative;
    width: 9rem;
    line-height: 4rem;
    font-size: 2.4rem;
    transition: .4s;
    border-radius: 1rem;

  }

  .first>li:hover {
    color: #2c2c2c;
  }

  .first>li:hover .firstLi {
    background: lightcyan;
    border-radius: .8rem;
  }

  .second {
    position: relative;
    height: max-content;
    border-radius: .5rem;
    width: max-content;
    background: rgba(255,255,255,.6);
    margin-top: 2.2rem;
    transition: .4s;
    display: none;
    z-index: -1;
    right: 6rem;
    padding-top: .5rem;
    padding-bottom: .5rem;
  }

  .second>li {
    position: relative;
    height: 4.5rem;
    width: 20rem;
    border-radius: 1rem;
    transition: .3s;
    margin-left: .5rem;
    margin-right: .5rem;
    margin-top: 1rem;
  }

  .second>li:hover {
    background: lightcyan;
    color: #2c2c2c;
  }

  .first>li:hover .second{
    margin-top: 1.2rem;
    display: block;
    z-index: 10;
  }

</style>