<template>
  <div class="sidebar-top">
    <template>
      <!-- <div :class="theme === 'light' ? ['sidebar-top-navmenu-light']:['sidebar-top-navmenu-deep']"> -->
      <div :class="bgStyle">
        <el-row :gutter="20">
          <el-col :span="3">
            <div class="sidebar-logo">
              <img src="../../../assets/paraviewlogo1.png" alt="paraview logo">
              <span slot="title" style="margin-left: 15px;">menu.dashboards</span>
            </div>
          </el-col>
          <el-col :span="17">
            <el-menu :default-active="activeIndex"
                     mode="horizontal"
                     :backgroundColor="'bgColor' | themeConfig(theme)"
                     :textColor="'textColor' | themeConfig(theme)"
                     :activeTextColor="'activeTextColor' | themeConfig(theme)"
            >
              <!-- 菜单渲染DOM -->
              <template v-for="(parent) in routes">
                <!-- index:1 一级菜单 -->
                <el-menu-item
                  v-if="!parent.children || parent.children.length === 0"
                  :key="parent.path" :index="parent.path"
                  @click="goNextPageByOneRoute(parent.path)"
                >
                  <i :class="parent.meta.icon" v-if="parent.meta.icon"></i>
                  <i class="iconfont icon-caidan" v-else></i>
                  <span slot="title" class="child-name">{{parent.meta.name}}</span>
                </el-menu-item>
                <!-- 一级菜单 -->
                <el-submenu v-else :key="parent.path" :index="parent.path">
                  <template slot="title">
                    <i :class="parent.meta.icon" v-if="parent.meta.icon"></i>
                    <i class="iconfont icon-caidan" v-else></i>
                    <span slot="title" style="margin-left: 10px;">
                    {{parent.meta.name}}
              </span>
                  </template>
                  <!-- 二级菜单 -->
                  <el-submenu v-for="(child) in parent.children" :key="child.path"
                              :index="`${parent.path}/${child.path}`">
              <span slot="title">
              <i :class="child.meta.icon" v-if="child.meta.icon"></i>
              <i class="iconfont icon-list" v-else></i>
              <span class="child-name" style="margin-left: 10px;">{{child.meta.name}}</span>
              </span>
                    <el-menu-item :index="`${parent.path}/${child.path}`" v-if="!child.children ||
              child.children.length === 0" @click="goNextPageByTwoRoute(parent.path,child.path)">
                      {{child.meta.name}}
                    </el-menu-item>
                    <!-- 三级菜单 -->
                    <el-menu-item v-else v-for="(son) in child.children"
                                  :index="`${parent.path}/${child.path}/${son.path}`"
                                  :key="son.path"
                                  @click="goNextPageByThreeRoute(parent.path,child.path,son.path)"
                    >
                      {{son.meta.name}}
                    </el-menu-item>
                  </el-submenu>
                </el-submenu>
              </template>
            </el-menu>
          </el-col>
          <el-col :span="4">
            <HeaderTop/>
          </el-col>
        </el-row>
      </div>
    </template>
  </div>
</template>

<script>
  import {mapState, mapMutations} from "vuex";
  import HeaderTop from "@/components/Layout/header/HeaderVertical"; // 水平头部

  export default {
    components: {
      HeaderTop,
    },
    data() {
      return {
        activeIndex: "/",
      };
    },
    watch: {
      $route: "changePath",
    },
    computed: {
      ...mapState({
        theme: state => state.setting.theme,
        routes: state => state.menu.addRouters,
      }),
      bgStyle() {
        switch (this.theme) {
          case 'deep':
            return 'sidebar-top-navmenu-deep';
          case 'light':
            return 'sidebar-top-navmenu-light';
          case 'dark':
            return 'sidebar-top-navmenu-dark';
          case 'simple':
            return 'sidebar-top-navmenu-simple';
          default:
            return 'sidebar-top-navmenu-deep';
        }
      },
    },
    methods: {
      ...mapMutations(["GONEXTPAGEBYONEROUTE", "GONEXTPAGEBYTWOROUTE", "GONEXTPAGEBYTHREEROUTE"]),
      goNextPageByThreeRoute(r1, r2, r3) {
        // this.$router.push(`${r1}/${r2}/${r3}`);
        this.GONEXTPAGEBYTHREEROUTE(`${r1}/${r2}/${r3}`);
      },
      goNextPageByOneRoute(r1) {
        // this.$router.push(`${r1}`);
        this.GONEXTPAGEBYONEROUTE(`${r1}`);
      },
      goNextPageByTwoRoute(r1, r2) {
        // this.$router.push(`${r1}/${r2}`);
        this.GONEXTPAGEBYTWOROUTE(`${r1}/${r2}`);
      },
      changePath() {
        const curPath = this.$route.path;
        this.activeIndex = curPath.toString();
      },
    },
    mounted() {
      this.changePath();
    },
    filters: {
      themeConfig(type, theme) {
        const _type = {
          "bgColor": {
            "deep": "#545c64",
            "light": "#fff",
            "dark": "#000",
            "simple": "#f3f5f9"
          },
          "textColor": {
            "deep": "#fff",
            "light": "#303133",
            "dark": "#fff",
            "simple": "#8996a0"
          },
          "activeTextColor": {
            "deep": "#ffd04b",
            "light": "#303133",
            "dark": "#04BBA4",
            "simple": "#098dff"
          }
        };
        return _type[type][theme];
      }
    }
  };
</script>
<style lang="scss" >
  @import "sidebar";
</style>
