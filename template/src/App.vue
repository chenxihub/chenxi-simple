<template>
  <div id="app">
    <!-- Top Layout -->
    <el-container v-if="layout === 'top'">
      <el-header style="padding: 0;">
        <SidebarTop/>
      </el-header>
      <el-main class="right-page">
        <Main/>
      </el-main>
      <el-footer>
        <Footer/>
      </el-footer>
    </el-container>
    <!-- Left Layout -->
    <el-container v-else>
      <el-aside width="auto" :class="changeTheme" :data-value="changeTheme">
        <SidebarLeft/>
      </el-aside>
      <el-container>
        <el-header style="padding-left: 0;">
          <HeaderLeft/>
        </el-header>
        <el-main class="right-page">
          <Main/>
        </el-main>
        <el-footer>
          <Footer/>
        </el-footer>
      </el-container>
    </el-container>
    <Setting/>
  </div>
</template>

<script>
  import Setting from "./components/Layout/setting/Setting"; // 设置
  import HeaderLeft from "./components/Layout/header/HeaderHorizon"; // 垂直头部
  import SidebarLeft from "./components/Layout/sidebar/SidebarLeft"; // 左边菜单
  import SidebarTop from "./components/Layout/sidebar/SidebarTop"; // 左边菜单
  import Main from "./components/Layout/main/Main"; // 内容区域
  import Footer from "./components/Layout/footer/Footer"; // 底部
  import {mapState} from "vuex";

  export default {
    name: "App",
    components: {
      Setting,
      HeaderLeft,
      SidebarLeft,
      SidebarTop,
      Main,
      Footer,
    },
    computed: {
      ...mapState({
        layout: state => state.setting.layout,
        theme: state => state.setting.theme,
        skin: state => state.setting.skin,
      }),
      changeTheme() {
        switch (this.theme) {
          case "deep":
            return "black-back";
          case "light":
            return "light-back";
          case "dark":
            return "dark-back";
          case "simple":
            return "simple-back";
          default:
            return "black-back";
        }
      },
    },
  };
</script>
<style lang="scss">
  .el-header, .el-footer {
    padding: 0px;
  }

  .el-aside {
    height: calc(100vh);
    box-shadow: 2px 0 6px rgba(181, 181, 181, .35)
  }

  .light-back {
    background-color: #ffffff;
    color: #303133;
  }

  .black-back {
    background-color: rgb(84, 92, 100);
    color: #ffffff;
  }

  .dark-back {
    background-color: #000;
    color: #ffffff;
  }

  .simple-back {
    background-color: #f3f5f9;
    color: #8996a0;
  }

  .el-main {
    background-color: #f0f2f5;
    min-height: calc(100vh - 120px);
    max-height: calc(100vh - 120px);
    overflow: auto;
  }
</style>
