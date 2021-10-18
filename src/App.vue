<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
import Index from'@/views/index/Index'

export default {
  name: 'App',
  components: {
    Index
  }
}
</script>

<style>
  * {
    padding: 0;
    margin: 0;
    outline: none;
  }

  body {
    font-family: PingFang-SC;
  }
</style>
