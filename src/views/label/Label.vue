<template>
  <div id="label"></div>
</template>

<script>
export default {
  name: "Label"
}
</script>

<style scoped>
#label {
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