<template>
    <nav-bar>
      <div slot="left">
        <nav-bar-item-left>
          LaoXu' Blog
        </nav-bar-item-left>
      </div>
      <div slot="center">
        <nav-bar-item-center>
          <Menu></Menu>
        </nav-bar-item-center>
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
import NavBar from "@/components/common/navbar/NavBar";
import NavBarItemLeft from "@/components/common/navbar/NavBarItemLeft";
import NavBarItemCenter from "@/components/common/navbar/NavBarItemCenter";
import Menu from "@/components/common/menu/Menu";
import NavBarItemRight from "@/components/common/navbar/NavBarItemRight";

export default {
  name: "MainNavBar",
  components: {
    NavBar,
    NavBarItemLeft,
    NavBarItemCenter,
    NavBarItemRight,
    Menu
  }
}
</script>

<style scoped>

</style>