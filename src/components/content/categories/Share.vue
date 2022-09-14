<template>
  <div id="share">
    <div id="share-head">
      <div id="head-title">
        <p>干货分享</p>
      </div>
    </div>
    <div id="share-content">
      <categories-content :typeNum="3"></categories-content>
    </div>
  </div>
</template>

<script>
import CategoriesContent from "@/components/common/categoriesContent/CategoriesContent";


export default {
  name: "Share",
  components: {
    CategoriesContent
  }
}
</script>

<style scoped>
#share {
  position: absolute;
  width: 100%;
  height: 100%;

}

#share-head {
  height: 40rem;
  width: 100%;
  background: rgba(0,0,0,.3);
  z-index: 2;
}



#head-title {
  position: absolute;
  height: 10rem;
  width: 100%;
  margin-top: 9%;
  margin-left: 45%;
}

#head-title p{
  position: absolute;
  line-height: 10rem;
  font-size: 5.6rem;
  margin: 0 auto;
  color: white;
  font-family: chinese,sans-serif;
}

#head-title p:before {
  position: absolute;
  content: url("../../../../src/assets/img/type/content/happy.svg");
  margin-left: -4.5rem;
  margin-top: -.5rem;
}
</style>