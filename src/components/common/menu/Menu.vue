<template>
    <ul class="first">
      <li v-for="(FirstName,index) in this.NameData">
        <img :src="FirstName.img">
        <a class="menus">{{FirstName.firstName}}</a>
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
          firstName: "本站",
          img: require('@/assets/img/index/menu/about-1.svg'),
          img2: require('@/assets/img/index/menu/about.svg'),
          secondName: [
            {
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
        }
      ],
    }
  }
}
</script>

<style scoped>
  img {
    height: 22px;
    width: 22px;
    margin-right: 7px;
  }

  .first,.second {
    list-style:none;
    text-align: center;
    cursor: pointer;
  }

  .first {
    margin-top: 3px;
  }

  .first:first-child {
    margin-left: 100px;
  }

  .second {
    position: relative;
    height: max-content;
    border-radius: 5px;
    width: max-content;
    background: rgba(255,255,255,.6);
    margin-top: 22px;
    transition: .4s;
    opacity: 0;
    z-index: -1;
    right: 60px;
    padding-top: 5px;
    padding-bottom: 5px;
  }

  .first>li {
    float: left;
    margin-right: 20px;
    position: relative;
    height: 40px;
    width: 90px;
    line-height: 40px;
    font-size: 24px;
    transition: .4s;
    border-radius: 10px;
  }

  .first>li::after {

  }

  .first>li:hover {
    background: lightcyan;
    color: #2c2c2c;

  }

  .second>li {
    position: relative;
    height: 45px;
    width: 200px;
    border-radius: 10px;
    cursor: pointer;
    transition: .3s;
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 10px;

  }


  .second>li:hover {
    background: lightcyan;
    color: #2c2c2c;
  }


  .first>li:hover .second{
    margin-top: 12px;
    opacity: 1;
    z-index: 10;
  }

</style>