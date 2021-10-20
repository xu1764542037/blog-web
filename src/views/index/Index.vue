<template>
  <div id="Index">
    <flowing-text :texts="texts">
      <div slot="blog_name">LaoXu' Blog</div>
    </flowing-text>
    <span id="turn-down-icon" @click="down"></span>
    <index-content>
      <contributions-table></contributions-table>
    </index-content>
  </div>
</template>

<script>
import FlowingText from "@/components/common/flowingText/FlowingText";
import IndexContent from "@/components/content/indexContent/IndexContent";
import ContributionsTable from "@/components/common/contributions/ContributionsTable";

export default {
  name: "Index",
  data() {
    return {
      texts: [
        "There is only one me in this world.",
        "When it has is lost, brave to give up.",
        "Say goodbye to the depravation of yesterday."
      ]
    }
  },
  components: {
    FlowingText,
    IndexContent,
    ContributionsTable
  },
  methods: {
    down() {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top += 20;
        if (top >= 938) {
          clearInterval(timeTop);
        }
      }, 10);
      window.scrollTo(0,940);
    }
  }
}
</script>

<style scoped>
  #Index {
    position: absolute;
    /*background-size:100% 100%;*/
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("../../assets/img/index/indexBG.jpg");
    height: 100vh;
    width: 100%;
    background-attachment: fixed;
  }

  #turn-down-icon::before {
    position: fixed;
    content: url("../../assets/img/index/content/down.svg");
    margin-left: 50%;
    bottom: 40px;
    cursor: pointer;
    animation:move 1.8s infinite;
    -moz-animation:move 1.8s infinite; /* Firefox */
    -webkit-animation:move 1.8s infinite; /* Safari and Chrome */
    -o-animation:move 1.8s infinite; /* Opera */

  }

  @keyframes move {
    0% {bottom: 40px;opacity: .8;}
    50% {bottom: 25px;opacity: .4;}
    100% {bottom: 40px;opacity: .8;}
  }



</style>