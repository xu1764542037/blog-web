<template>
  <div id="categories">
    <router-view></router-view>
  </div>
</template>

<script>
import Knowledge from "@/components/content/categories/Knowledge";
import Course from "@/components/content/categories/Course";
import Share from "@/components/content/categories/Share";
import Chat from "@/components/content/categories/Chat";
import Great from "@/components/content/categories/Great";

export default {
  name: "Categories",
  components: {
    Knowledge,
    Course,
    Share,
    Chat,
    Great
  }
}
</script>

<style scoped>
#categories {
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