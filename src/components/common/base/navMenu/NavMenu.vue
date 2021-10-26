<template xmlns="">
    <el-col :span="12" id="base-nav-menu">
      <el-menu
          :router="true"
          :default-active="this.$route.path"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color= rgba(0,0,0,0)
          text-color="#fff"
          active-text-color="#6861D8">
        <el-menu-item index="/base/home">
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title" >
            <i class="el-icon-s-custom"></i>
            <span>用户管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/base/UserInfo">
              <i class="el-icon-user"></i>
              个人信息
            </el-menu-item>
            <el-menu-item index="/base/UserComment">
              <i class="el-icon-chat-line-square"></i>
              评论管理
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title" >
            <i class="el-icon-edit-outline"></i>
            <span>博客管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/base/WriterBlog">
              <i class="el-icon-edit"></i>
              <span>发布博客</span>
            </el-menu-item>
            <el-menu-item index="/base/SeeBlog">
              <i class="el-icon-view"></i>
              <span>查看博客</span>
            </el-menu-item>
            <el-menu-item index="/base/label">
              <i class="el-icon-paperclip"></i>
              <span>标签管理</span>
            </el-menu-item>
            <el-menu-item index="/base/type">
              <i class="el-icon-receiving"></i>
              <span>分类管理</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title" >
            <i class="el-icon-data-line"></i>
            <span>数据管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/base/BlogData">
              <i class="el-icon-data-analysis"></i>
              <span>博文数据</span>
            </el-menu-item>
            <el-menu-item index="/base/BlogsData">
              <i class="el-icon-collection"></i>
              <span>单篇文章分析</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
</template>

<script>
export default {
  name: "NavMenu",
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
#base-nav-menu {
  position: absolute;
  width: 15%;
}
</style>