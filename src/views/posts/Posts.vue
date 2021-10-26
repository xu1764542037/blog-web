<template>
  <div class="posts">
    <posts-head></posts-head>
    <posts-content></posts-content>
  </div>
</template>

<script>
import PostsHead from "@/components/content/postsHead/PostsHead";
import PostsContent from "@/components/content/postsContent/PostsContent";

export default {
  name: "Posts",
  components: {
    PostsHead,
    PostsContent
  }
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