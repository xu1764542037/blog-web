<template>
  <div id="index">
    <index-first-page></index-first-page>
    <index-content></index-content>
  </div>

</template>

<script>
import IndexContent from "@/components/content/indexContent/IndexContent";
import IndexFirstPage from "@/components/content/indexFirstPage/IndexFirstPage";


export default {
  name: "Index",
  components: {
    IndexFirstPage,
    IndexContent
  }
}
</script>

<style scoped>
  #index {

  }
</style>