<template xmlns="" xmlns="">
  <div id="write-blog">
    <div class="page-head">
      <el-page-header @back="goBack" content="发布博客"></el-page-header>
    </div>
    <div class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>博客管理</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/base/WriterBlog">活动列表</a></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <page-edit-panel></page-edit-panel>
  </div>
</template>

<script>
import PageEditPanel from "@/components/content/blog/writeBlog/PageEditPanel";

export default {
  name: "WriteBlog",
  data() {
    return {
      html: '',
      configs: {}
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
  },
  components: {
    PageEditPanel
  },
  mounted() {
  },
}
</script>

<style scoped>
#write-blog {
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
  /*position: relative;*/
  height: 2rem;
  width: 17%;
  margin-left: 84%;
  margin-top: -4rem;
}


</style>