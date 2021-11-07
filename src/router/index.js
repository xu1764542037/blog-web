import Vue from "vue";
import VueRouter from 'vue-router'
import BlogData from "@/views/base/data/blogData/BlogData";

const Index =() => import("@/views/index/Index")
const Article = () => import("@/views/article/Article")
const Posts = () => import("@/views/posts/Posts")

//后台页面
const Base = () =>import("@/views/base/Base")
//验证页面
const Verification = () => import("@/views/base/Verification")

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
    redirect: '/index',
  },
  {
    path: '*',
    redirect: '/index',
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
    path: '/posts/:id',
    component: Posts
  },
  {
    path: '/base',
    component: Base,
    redirect: '/base/verification',
    children: [
      {
        path: 'verification',
        component: Verification,
      },
      {
        path: 'home',
        component: Home,
        meta: {
          requireAuth: true
        }
      },
      {
        path: 'UserInfo',
        component: Info,
        meta: {
          requireAuth: true
        }
      },
      {
        path: 'UserComment',
        component: Comment,
        meta: {
          requireAuth: true
        }
      },
      {
        path: "WriterBlog",
        component: WriteBlog,
        meta: {
          requireAuth: true
        }
      },
      {
        path: "SeeBlog",
        component: SeeBlog,
        meta: {
          requireAuth: true
        }
      },
      {
        path: "label",
        component: Label,
        meta: {
          requireAuth: true
        }
      },
      {
        path: "type",
        component: Type,
        meta: {
          requireAuth: true
        }
      },
      {
        path: "BlogData",
        component: data,
        meta: {
          requireAuth: true
        }
      },
      {
        path: "BlogsData",
        component: datas,
        meta: {
          requireAuth: true
        }
      },
    ]
  }
]

//创建router
const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if (sessionStorage.getItem("token") == 'true') { // 判断本地是否存在token
      next()
    } else {
      // 未登录,跳转到登陆页面
      next({
        path: '/base/verification'
      })
    }
  } else {
    if(sessionStorage.getItem("token") == 'true'){
      next('/index/table');
    }else{
      next();
    }
  }
});


export default router





