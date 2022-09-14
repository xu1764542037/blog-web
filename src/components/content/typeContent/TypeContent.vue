<template>
  <div id="type-content">
    <div class="content">
      <type-chart></type-chart>
      <type-list></type-list>
    </div>
    <display-and-top @is-show="AsideIsShow"></display-and-top>
  </div>
</template>

<script>
import TypeChart from "@/components/common/typeContent/typeChart/TypeChart";
import TypeList from "@/components/common/typeContent/TypeList/TypeList";
import DisplayAndTop from "@/components/common/all/displayAndTop/DisplayAndTop";


export default {
  name: "TypeContent",
  data() {
    return{
      asideShow: true
    }
  },
  components: {
    DisplayAndTop,
    TypeList,
    TypeChart
  },
  methods: {
    AsideIsShow(data) {
      this.asideShow = data
    }
  }
}
</script>

<style scoped>
#type-content {
  display: flex;
  -webkit-box-flex: 1;
  flex: 1 1 auto;
  margin: 0 auto;
  padding: 5rem 15px;
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