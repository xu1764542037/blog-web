<template>
  <div id="article-content">
    <div class="content">
      <archive></archive>
    </div>
    <index-aside v-show="asideShow"></index-aside>
    <display-and-top @is-show="AsideIsShow"></display-and-top>
  </div>
</template>

<script>
import Archive from "@/components/common/articleContent/archive/Archive";
import IndexAside from "@/components/content/indexAside/IndexAside";
import DisplayAndTop from "@/components/common/all/displayAndTop/DisplayAndTop";

export default {
  name: "ArticleContent",
  data() {
    return{
      asideShow: true
    }
  },
  components: {
    IndexAside,
    Archive,
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
#article-content {
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