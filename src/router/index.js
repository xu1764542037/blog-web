import Vue from "vue";
import VueRouter from 'vue-router'
import BlogData from "@/views/base/data/blogData/BlogData";

const Index =() => import("@/views/index/Index")
const Article = () => import("@/views/article/Article")
const Posts = () => import("@/views/posts/Posts")

//后台页面
const Base = () =>import("@/views/base/Base")

const Home = () =>import("@/views/base/home/Home")
const Info = () =>import("@/views/base/user/info/Info")
const Comment = () =>import("@/views/base/user/comment/Comment")
const WriteBlog = () =>import("@/views/base/blog/writeBlog/WriteBlog")
const SeeBlog = () =>import("@/views/base/blog/seeBlog/SeeBlog")
const Label = () =>import("@/views/base/blog/label/Label")
const Type = () =>import("@/views/base/blog/type/Type")
const datas = () =>import("@/views/base/data/blogsData/BlogsData")
const data = () =>import("@/views/base/data/blogData/BlogData")


//1.安装插件
Vue.use(VueRouter)


const routes = [
  {
    path: '',
    redirect: '/base',
  },
  {
    path: '*',
    redirect: '/base',
  },
  {
    path: '/index',
    component: Index
  },
  {
    path: '/article',
    component: Article
  },
  {
    path: '/posts',
    component: Posts
  },
  {
    path: '/base',
    component: Base,
    redirect: '/base/home',
    children: [
      {
        path: 'home',
        component: Home
      },
      {
        path: 'UserInfo',
        component: Info
      },
      {
        path: 'UserComment',
        component: Comment
      },
      {
        path: "WriterBlog",
        component: WriteBlog
      },
      {
        path: "SeeBlog",
        component: SeeBlog
      },
      {
        path: "label",
        component: Label
      },
      {
        path: "type",
        component: Type
      },
      {
        path: "BlogData",
        component: data
      },
      {
        path: "BlogsData",
        component: datas
      },
    ]
  }
]

//创建router
const router = new VueRouter({
  routes,
  mode: 'history'
})


export default router





