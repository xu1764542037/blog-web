<template>
  <div class="posts">
    <posts-head :res="res"></posts-head>
    <posts-content>
      <post :text="text"></post>
    </posts-content>
  </div>
</template>

<script>
import PostsHead from "@/components/content/postsHead/PostsHead";
import PostsContent from "@/components/content/postsContent/PostsContent";
import Post from "@/components/common/postsContent/post/Post";
import {selectArticle} from "@/network/article/article";

export default {
  name: "Posts",
  data() {
    return {
      text: "",
      res: []
    }
  },
  components: {
    Post,
    PostsHead,
    PostsContent
  },
  created() {
    const md = require("markdown-it")();

    selectArticle(this.$route.params.id).then(res => {
      // console.log(res);
      this.res = res.obj
      this.text = md.render(this.res.text)
    })
  },

}
</script>

<style scoped>
.posts {
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -moz-box-orient: vertical;
  -o-box-orient: vertical;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  min-height: 100vh;
}
</style>