<template>
  <div id="type">
    <type-head></type-head>
    <type-content></type-content>
    <page-bottom></page-bottom>
  </div>
</template>

<script>
import TypeHead from "@/components/content/typeHead/TypeHead";
import TypeContent from "@/components/content/typeContent/TypeContent";
import PageBottom from "@/components/common/all/pageBottom/PageBottom";

export default {
  name: "Type",
  components: {PageBottom, TypeContent, TypeHead}
}
</script>

<style scoped>
#type {
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