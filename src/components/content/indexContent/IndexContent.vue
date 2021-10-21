<template>
  <div id="index-content" ref="pageMove">
    <contributions-table></contributions-table>
    <contributions-table></contributions-table>
    <contributions-table></contributions-table>
    <contributions-table></contributions-table>


  </div>
</template>

<script>
import ContributionsTable from "@/components/common/contributions/ContributionsTable";


export default {
  name: "IndexContent",
  components: {
  ContributionsTable
  },
  mounted() {
    // 滚动条的获取
    window.addEventListener('scroll', this.handleScrollx, true)
  },
  beforeRouteLeave (to, from, next) {
    window.removeEventListener('scroll', this.handleScrollx, true)
    next()
  },
  methods: {
    handleScrollx() {

    }
  }
}
</script>

<style scoped>
#index-content {
  z-index: 1;
  display: flex;
  -webkit-box-flex: 1;
  flex: 1 1 auto;
  margin: 0 auto;
  padding: 2rem 15px;
  max-width: 1200px;
  width: 100%;
  flex-direction: column;
}



</style>