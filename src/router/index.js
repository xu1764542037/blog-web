import Vue from "vue";
import VueRouter from 'vue-router'
import BlogData from "@/views/base/data/blogData/BlogData";


//前台页面
const Index =() => import("@/views/index/Index")

const Article = () => import("@/views/article/Article")

const Posts = () => import("@/views/posts/Posts")

const Type = () => import("@/views/type/Type")
const Categories = () => import("@/views/type/categories/Categories")
const Knowledge = () => import("@/components/content/categories/Knowledge")
const Course = () => import("@/components/content/categories/Course")
const Share = () => import("@/components/content/categories/Share")
const Chat = () => import("@/components/content/categories/Chat")
const Great = () => import("@/components/content/categories/Great")


//后台页面
const Base = () =>import("@/views/base/Base")
//验证页面
const Verification = () => import("@/views/base/Verification")

const Home = () =>import("@/views/base/home/Home")
const Info = () =>import("@/views/base/user/info/Info")
const Comment = () =>import("@/views/base/user/comment/Comment")
const WriteBlog = () =>import("@/views/base/blog/writeBlog/WriteBlog")
const SeeBlog = () =>import("@/views/base/blog/seeBlog/SeeBlog")
const baseLabel = () =>import("@/views/base/blog/label/Label")
const baseType = () =>import("@/views/base/blog/type/Type")
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
    component: Index,
    meta:{index:0},
  },
  {
    path: '/article',
    component: Article,
    meta:{index:1},
  },
  {
    path: '/categories',
    component: Type,
    meta:{index:1},
  },
  {
    path: '/categorie',
    component: Categories,
    meta:{index:0},
    redirect: '/categorie',
    children: [
      {
        path: '知识笔记',
        component: Knowledge,
        meta:{index:1},
      },
      {
        path: '实用教程',
        component: Course,
        meta:{index:1},
      },
      {
        path: '干货分享',
        component: Share,
        meta:{index:1},
      },
      {
        path: '茶余饭后',
        component: Chat,
        meta:{index:1},
      },
      {
        path: '优质转载',
        component: Great,
        meta:{index:1},
      },
    ]
  },
  {
    path: '/posts/:id',
    component: Posts,
    meta:{index:2},
  },
  {
    path: '/base',
    component: Base,
    meta:{index:0},
    redirect: '/base/verification',
    children: [
      {
        path: 'verification',
        component: Verification,
        meta:{index:1},
      },
      {
        path: 'home',
        component: Home,
        meta: {
          requireAuth: true,
          index:1,
        }
      },
      {
        path: 'UserInfo',
        component: Info,
        meta: {
          requireAuth: true,
          index:1
        }
      },
      {
        path: 'UserComment',
        component: Comment,
        meta: {
          requireAuth: true,
          index:1
        }
      },
      {
        path: "WriterBlog",
        component: WriteBlog,
        meta: {
          requireAuth: true,
          index:1
        }
      },
      {
        path: "SeeBlog",
        component: SeeBlog,
        meta: {
          requireAuth: true,
          index:1
        }
      },
      {
        path: "label",
        component: baseLabel,
        meta: {
          requireAuth: true,
          index:1
        }
      },
      {
        path: "type",
        component: baseType,
        meta: {
          requireAuth: true,
          index:1
        }
      },
      {
        path: "BlogData",
        component: data,
        meta: {
          requireAuth: true,
          index:1
        }
      },
      {
        path: "BlogsData",
        component: datas,
        meta: {
          requireAuth: true,
          index:1
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





