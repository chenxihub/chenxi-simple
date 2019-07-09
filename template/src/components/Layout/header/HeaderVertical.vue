<template>
  <div class="header-vertical">
    <el-header style="text-align: center; font-size: 12px;float: right;">
      <el-dropdown @command="changeLanguageHandler" trigger="click">
        <i class="el-icon-ship internet-class"
           :style="$store.state.setting.theme === 'deep' && $store.state.setting.layout === 'top'?'color:#ffffff;':''"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-for="(val, key) in $languageList"
                            :icon="`iconfont icon-${key}`"
                            :command="key"
                            :key="key">{{val}}
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <!-- changeTheme -->
      <el-dropdown>
        <i class="el-icon-menu"></i>
        <el-dropdown-menu>
          <el-dropdown-item v-for="item in themeConfig" :style="{color: item.color}">
            <span class="color-block" :style="{'background-color': item.color}"></span>
            {{item.text}}
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown @command="changeOptionsHandler" trigger="click">
              <span class="el-dropdown-link"
                    :style="$store.state.setting.theme === 'deep' && $store.state.setting.layout === 'top'?'color:#ffffff;':''">
                <i class="el-icon-more more-class"
                   :style="$store.state.setting.theme === 'deep' && $store.state.setting.layout === 'top'?'color:#ffffff;':''"></i></span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="iconfont icon-zizhufuwuting" command="self_help">
            菜单一
          </el-dropdown-item>
          <el-dropdown-item icon="iconfont icon-tuichudenglu" command="exit">
            退出
          </el-dropdown-item>
          <div style="margin: 0 auto;text-align: center;">
            <el-tag>{{version}}</el-tag>
          </div>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
  </div>
</template>

<script>
  import {mapActions} from "vuex";
  import version from "../../../../package.json";

  export default {
    name: "Header",
    data() {
      return {
        avatar: "", // 用户是否有头像
        version: version.version,
        themeConfig: [{
          text: "绿色",
          color: "#0aa679"
        },
          {
            text: "紫色",
            color: "#7546c9",
          },
          {
            text: "自定义",
            color: "",
          }],
      };
    },
    methods: {
      ...mapActions(["setLanguageAction"]),
      changeLanguageHandler(language) {
        this.$i18n.locale = language;
        this.setLanguageAction(language);
      },
      changeOptionsHandler(opt) {
        switch (opt) {
          case "self_help":
            window.location.href = window.$paraContext.selfcare;
            break;
          case "exit":
            this.$toLogout();
            break;
          default:
            break;
        }
      },
    },
  };
</script>
<style lang="scss">
  @import "header";
</style>
