<template>
    <nav-bar>
      <div slot="left">
        <nav-bar-item-left>
          LaoXu' Blog
        </nav-bar-item-left>
      </div>
      <div slot="center_1">
        <nav-bar-item-center>
          <Menu></Menu>
        </nav-bar-item-center>
      </div>
      <div slot="center_2">
        <nav-bar-item-center-change>
          <span class="center_2_welcome">欢迎光临老徐的博客</span>
        </nav-bar-item-center-change>
      </div>
      <div slot="right">
        <nav-bar-item-right>
          <span slot="search_all">站内搜索</span>
          <span slot="change_color">深浅切换</span>
        </nav-bar-item-right>
      </div>
    </nav-bar>
</template>

<script>
import NavBar from "@/components/common/nav/navbar/NavBar";
import NavBarItemLeft from "@/components/common/nav/navbar/NavBarItemLeft";
import NavBarItemCenter from "@/components/common/nav/navbar/NavBarItemCenter";
import NavBarItemCenterChange from "@/components/common/nav/navbar/NavBarItemCenterChange";
import Menu from "@/components/common/nav/menu/Menu";
import NavBarItemRight from "@/components/common/nav/navbar/NavBarItemRight";

export default {
  name: "MainNavBar",
  components: {
    NavBar,
    NavBarItemLeft,
    NavBarItemCenter,
    NavBarItemCenterChange,
    NavBarItemRight,
    Menu
  }
}
</script>

<style scoped>
.center_2_welcome::before {
  position: relative;
  content: url("../../../assets/img/index/menu/pao.svg");
  left: -.3rem;
  top: .3rem;
}

.center_2_welcome::after {
  position: relative;
  content: url("../../../assets/img/index/menu/ball.svg");
  left: .3rem;
  top: .3rem;
}

</style>