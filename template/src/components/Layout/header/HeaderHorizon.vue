<template>
  <div class="header-horizon">
    <el-row :gutter="4" class="header-horizon-row">
      <el-col :span="12">
        <span class="header-horizon-menu-expend" @click="changeLeftMenuStatus">
          <i :class="leftOrRight ? ['el-icon-s-fold']:['el-icon-s-unfold']"></i>
        </span>
      </el-col>
      <el-header style="text-align: center; font-size: 12px;float: right;padding: 0;">
        <el-dropdown @command="changeLanguageHandler" trigger="click">
          <i class="el-icon-discover internet-class"
             :style="$store.state.setting.theme === 'deep' && $store.state.setting.layout === 'top'?'color:#ffffff;':''"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="(val, key) in $languageList"
                              :icon="`iconfont icon-${key}`"
                              :command="key"
                              :key="key">{{val}}
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
    </el-row>
  </div>
</template>

<script>
  import {mapActions} from "vuex";
  import version from "../../../../package.json";

  export default {
    name: "Header",
    data() {
      return {
        avatar: "", // 用户是否有头像,
        leftOrRight: true,
        version: version.version,
      };
    },
    methods: {
      ...mapActions(["openLefeMenuCollapse", "setLanguageAction"]),
      changeLeftMenuStatus() {
        this.leftOrRight = !this.leftOrRight;
        this.openLefeMenuCollapse({});
      },
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
      // openFormDesign() {
      //   // window.open("/form");
      //   window.open("/formDesign/index.html#key=form29182e836a-USER-console&basic=true");
      // },
    },
  };
</script>
<style lang="scss">
  @import "header";
  @import "../../../styles/mixin";
</style>
