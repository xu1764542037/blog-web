<template>
  <div id="index-aside">
    <phone></phone>
    <div class="layout">
      <update></update>
<!--      <new-comment></new-comment>-->
      <classify></classify>
      <Label></Label>
<!--      <history></history>-->
      <census></census>
    </div>
  </div>
</template>

<script>
import Phone from "@/components/common/aside/phone/Phone";
import Update from "@/components/common/aside/update/Update";
import NewComment from "@/components/common/aside/newComment/NewComment";
import Classify from "@/components/common/aside/classify/Classify";
import Label from "@/components/common/aside/label/Label";
import History from "@/components/common/aside/history/History";
import Census from "@/components/common/aside/census/Census";

export default {
  name: "IndexAside",
  components: {
    Phone,
    Update,
    NewComment,
    Classify,
    Label,
    History,
    Census
  }
}
</script>

<style scoped>
  #index-aside {
    position: relative;
    width: 30%;
  }

  .layout {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;
    -o-box-orient: vertical;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    position: sticky;
    position: -webkit-sticky;
    top: 7rem;
    -webkit-transition: top .3s;
    -moz-transition: top .3s;
    -o-transition: top .3s;
    -ms-transition: top .3s;
    transition: top .3s;
  }

  @media screen and (max-width: 1024px) {
    #index-aside {
      display: none;
    }
  }
</style>