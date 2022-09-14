<template>
  <div id="index">
    <index-first-page></index-first-page>
    <div id="index-second-page">
      <index-content></index-content>
      <index-aside v-show="asideShow"></index-aside>
    </div>
    <page-bottom></page-bottom>
    <display-and-top @is-show="AsideIsShow"></display-and-top>
  </div>

</template>

<script>
import IndexContent from "@/components/content/indexContent/IndexContent";
import IndexFirstPage from "@/components/content/indexFirstPage/IndexFirstPage";
import IndexAside from "@/components/content/indexAside/IndexAside";
import DisplayAndTop from "@/components/common/all/displayAndTop/DisplayAndTop";
import PageBottom from "@/components/common/all/pageBottom/PageBottom";

export default {
  name: "Index",
  data() {
    return{
      asideShow: true
    }
  },
  components: {
    IndexFirstPage,
    IndexContent,
    IndexAside,
    DisplayAndTop,
    PageBottom
  },
  methods: {
    AsideIsShow(data) {
      this.asideShow = data
    }
  }
}
</script>

<style scoped>
  #index-second-page {
    display: flex;
    -webkit-box-flex: 1;
    flex: 1 1 auto;
    margin: 0 auto;
    padding: 2rem 27rem;
    /*max-width: 1400px;*/
    width: 100%;
    animation: 1s ease 0s 1 normal none running bottom-top;
  }

  @media screen and (min-width: 900px) {
    #index-second-page > div:first-child {
      width: 100%;
    }
  }

  @media screen and (max-width: 440px) {
    #index-second-page {
      display: flex;
      -webkit-box-flex: 1;
      flex: 1 1 auto;
      margin: 0;
      padding: 0;
      width: 100%;
      animation: 1s ease 0s 1 normal none running bottom-top;
    }
  }

</style>