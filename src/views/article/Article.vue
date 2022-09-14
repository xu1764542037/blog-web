<template>
  <div id="article">
    <article-head></article-head>
    <article-content></article-content>
    <page-bottom></page-bottom>
  </div>
</template>

<script>
import ArticleHead from "@/components/content/articleHead/ArticleHead";
import ArticleContent from "@/components/content/articleContent/ArticleContent";
import PageBottom from "@/components/common/all/pageBottom/PageBottom";


export default {
  name: "Article",
  components: {
    ArticleHead,
    ArticleContent,
    PageBottom
  },
  provide(){
    return{
      reload:this.reload
    }
  },
  data() {
    return{
      isRouterAlive: true
    }
  }

}
</script>

<style scoped>
#article {
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
  width: 100%;
}
</style>