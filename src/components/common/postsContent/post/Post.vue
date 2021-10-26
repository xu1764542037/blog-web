<template>
  <div class="post">

  </div>
</template>

<script>
export default {
  name: "Post"
}
</script>

<style scoped>
.post {
  position: relative;
  border-radius: 1rem;
  max-width: 90%;
  height: 300rem;
  background: rgba(255,255,255,.5);
  padding: 4rem;
  margin: 0 auto;
  transition: .4s;
}

.post:hover {
  box-shadow: .2rem .2rem 2rem black;
}
</style>