<template>
  <div id="posts-content">
    <div class="content">
      <post></post>
    </div>
    <index-aside v-show="asideShow"></index-aside>
    <display-and-top @is-show="AsideIsShow"></display-and-top>
  </div>
</template>

<script>
import IndexAside from "@/components/content/indexAside/IndexAside";
import Post from "@/components/common/postsContent/post/Post";
import DisplayAndTop from "@/components/common/all/displayAndTop/DisplayAndTop";

export default {
  name: "PostsContent",
  data() {
    return{
      asideShow: true
    }
  },
  components: {
    Post,
    IndexAside,
    DisplayAndTop
  },
  methods: {
    AsideIsShow(data) {
      this.asideShow = data
    }
  }
}
</script>

<style scoped>
#posts-content {
  display: flex;
  -webkit-box-flex: 1;
  flex: 1 1 auto;
  margin: 0 auto;
  padding: 2rem 15px;
  max-width: 1400px;
  width: 100%;
  animation: 1s ease 0s 1 normal none running bottom-top;

}

.content {
  margin-top: 4rem;
  width: 100%;
  transition: all 0.4s ease 0s;
}
</style>