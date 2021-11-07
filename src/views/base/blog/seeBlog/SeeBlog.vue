<template>
  <div id="see-blog">
    <div class="page-head">
      <el-page-header @back="goBack" content="查看博客"></el-page-header>
    </div>
    <div class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/home' }">后台管理</el-breadcrumb-item>
        <el-breadcrumb-item>博客管理</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/base/WriterBlog">查看博客</a></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <page-see-panel></page-see-panel>
  </div>
</template>

<script>
import PageSeePanel from "@/components/content/blog/seeBlog/PageSeePanel";

export default {
  name: "SeeBlog",
  components: {
    PageSeePanel
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
  },
}
</script>

<style scoped>
#see-blog {
  position: fixed;
  width: 85%;
  height: 100%;
  top: 8rem;
  left: 15%;
  background: rgba(255,255,255,.3);
}

.page-head {
  font-size: 3.8rem;
  margin: 2rem 4.5%;
  height: 3rem;
  width: 11%;
}

.breadcrumb {
  height: 2rem;
  width: 17%;
  margin-left: 84%;
  margin-top: -4rem;
}
</style>