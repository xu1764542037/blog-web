<template>
  <div id="index-aside">
    <phone></phone>
    <div class="layout">
      <update></update>
      <new-comment></new-comment>
      <classify></classify>
      <Label></Label>
      <history></history>
      <census></census>
    </div>
  </div>
</template>

<script>
import Phone from "@/components/common/indexAside/phone/Phone";
import Update from "@/components/common/indexAside/update/Update";
import NewComment from "@/components/common/indexAside/newComment/NewComment";
import Classify from "@/components/common/indexAside/classify/Classify";
import Label from "@/components/common/indexAside/label/Label";
import History from "@/components/common/indexAside/history/History";
import Census from "@/components/common/indexAside/census/Census";

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
    top: 70px;
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