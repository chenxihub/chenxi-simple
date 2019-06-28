<template>
  <div>
    <div class="para-setting">
      <div class="para-left-btn" @click="setSettingHandler">
        <i class="el-icon-setting"></i>
      </div>
      <div class="para-right-content">
        <h4>setting.style.name</h4>
        <el-row :gutter="10">
          <el-radio-group
            v-model="resource.radio"
            size="small"
            style="margin: 0 auto;display: block;text-align: center"
            @change="changeThemeHandler"
          >
            <el-col :span="12">
              <el-row>
                <img src="https://gw.alipayobjects.com/zos/rmsportal/LCkqqYNmvBEbokSDscrm.svg" alt="">
              </el-row>
              <el-row>
                <el-radio border label="deep">setting.style.deep</el-radio>
              </el-row>
            </el-col>
            <el-col :span="12">
              <el-row>
                <img src="https://gw.alipayobjects.com/zos/rmsportal/jpRkZQMyYRryryPNtyIC.svg" alt="">
              </el-row>
              <el-row>
                <el-radio border label="light">setting.style.light</el-radio>
              </el-row>
            </el-col>
            <el-col :span="12">
              <el-row>
                <img src="https://gw.alipayobjects.com/zos/rmsportal/LCkqqYNmvBEbokSDscrm.svg" alt="">
              </el-row>
              <el-row>
                <el-radio border label="dark">setting.style.dark</el-radio>
              </el-row>
            </el-col>
            <el-col :span="12">
              <el-row>
                <img src="https://gw.alipayobjects.com/zos/rmsportal/jpRkZQMyYRryryPNtyIC.svg" alt="">
              </el-row>
              <el-row>
                <el-radio border label="simple">setting.style.simple</el-radio>
              </el-row>
            </el-col>
          </el-radio-group>
        </el-row>
        <el-row class="hidden">
          <div style="margin-left: 15px;">
            <el-row :gutter="8">
              <el-col :span="3" v-for="(theme,key) in resource.theme" :key="key">
                <div :style="`background:${theme};width:20px;height:20px;border-radius:2px;`"
                     @click="changeColorHandler(theme)"></div>
              </el-col>
            </el-row>
          </div>
        </el-row>
        <el-divider></el-divider>
        <h4>setting.navigator.name</h4>
        <el-row :gutter="10">
          <el-radio-group
            v-model="resource.layouts"
            size="small"
            style="margin: 0 auto;display: block;text-align: center"
            @change="changeLayoutHandler"
          >
            <el-col :span="12">
              <el-row>
                <img src="https://gw.alipayobjects.com/zos/rmsportal/JopDzEhOqwOjeNTXkoje.svg" alt="侧边">
              </el-row>
              <el-row>
                <el-radio border label="left">setting.navigator.left</el-radio>
              </el-row>
            </el-col>
            <el-col :span="12">
              <el-row>
                <img src="https://gw.alipayobjects.com/zos/rmsportal/KDNDBbriJhLwuqMoxcAr.svg" alt="顶部">
              </el-row>
              <el-row>
                <el-radio border label="top">setting.navigator.top</el-radio>
              </el-row>
            </el-col>
          </el-radio-group>
        </el-row>
        <el-form ref="form" :model="resource" style="margin-left: 15px;" class="hidden">
          <el-form-item label="setting.fixed_head.name">
            <el-radio-group v-model="resource.header" @change="changeHeaderHandler">
              <el-radio label="fixed">setting.fixed_head.yes</el-radio>
              <el-radio label="float">setting.fixed_head.no</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
        <el-row class="hidden">
          <div class="theme1-box" style="margin:0 auto;text-align: center;">
            <p class="theme-font" style="line-height: 100px;">换肤测试</p>
          </div>
        </el-row>
        <el-divider></el-divider>
        <!-- change-skin -->
        <el-row :gutter="10" class="hidden">
          <el-radio-group
            v-model="resource.skin"
            size="small"
            style="margin: 0 auto;display: block;text-align: center"
            @change="changeSkinHandler"
          >
            <el-col :span="12">
              <el-row>
                <el-radio border label="dark_green">setting.skin.kind[0].txt</el-radio>
              </el-row>
            </el-col>
            <el-col :span="12">
              <el-row>
                <el-radio border label="succinct">setting.skin.kind[1].txt</el-radio>
              </el-row>
            </el-col>
          </el-radio-group>
        </el-row>
      </div>
    </div>
    <!-- div click -->
    <div class="para-div-click" v-show="settingShow"></div>
  </div>
</template>

<script>
  import {mapActions, mapState} from "vuex";

  export default {
    name: "Setting",
    computed: {
      ...mapState({
        layout: state => state.setting.layout,
        header: state => state.setting.header,
        theme: state => state.setting.theme,
        skin: state => state.setting.skin,
      }),
      skins() {
        const skins = [];
        this.$t("setting.skin.kind").map(v => skins.push(v));
        return skins;
      },
    },
    data() {
      return {
        settingShow: false,
        resource: {
          radio: "",
          color: "#f60",
          layouts: "",
          header: "",
          theme: ["#409EFF", "#ed4014", "deepskyblue"],
          skin: "",
        },
      };
    },
    methods: {
      ...mapActions(["setColorAction", "setLayoutAction", "setHeaderAction", "settThemeAction", "setSkinAction"]),
      init() {
        if (this.layout) {
          this.resource.layouts = this.layout;
          this.resource.header = this.header;
          this.resource.radio = this.theme;
          this.resource.skin = this.skin;
        }
      },
      setSettingHandler() {
        this.settingShow = !this.settingShow;
        if (this.settingShow) {
          this.$store.dispatch("animation/layoutTransformByX", {
            el: ".para-setting",
            x: -301,
          });
          this.$nextTick(() => {
            $(".para-div-click").on("click", () => {
              this.$store.dispatch("animation/layoutTransformByX", {
                el: ".para-setting",
                x: 0,
              });
              this.settingShow = false;
              setTimeout(() => {
                $(".para-setting").css({"z-index": "201"});
              }, 600);
            });
            $(".para-setting").css({"z-index": "203"});
          });
        } else {
          this.$store.dispatch("animation/layoutTransformByX", {
            el: ".para-setting",
            x: 0,
          });
          setTimeout(() => {
            $(".para-setting").css({"z-index": "201"});
          }, 600);
        }
      },
      changeThemeHandler(theme) {
        let _theme = "";
        if (theme === "deep") {
          _theme = "theme1";
        } else if (theme === "light") {
          _theme = "theme2";
        } else if (theme === "dark") {
          _theme = "themedark";
        } else if (theme === "simple") {
          _theme = "themesimple";
        } else {
          _theme = "theme";
        }
        window.document.documentElement.setAttribute("data-theme", _theme);
        this.settThemeAction(theme);
      },
      changeColorHandler(theme) {
        const color = this.resource.theme.findIndex(th => th === theme) === 0 ? "theme1" : this.resource.theme.findIndex(th => th === theme) === 1 ? "theme2" : "theme3";
        this.setColorAction(color);
        this.$message({
          message: `颜色更换为:${color}成功`,
          type: "success",
        });
      },
      changeLayoutHandler(layout) {
        this.setLayoutAction(layout);
        this.$router.go(0);
      },
      changeHeaderHandler(header) {
        this.setHeaderAction(header);
      },
      changeSkinHandler(skin) {
        this.setSkinAction(skin);
      },
    },
    mounted() {
      this.init();
    },
  };
</script>

<style  lang="scss">
  @import "setting";
  @import "../../../styles/mixin";

  .theme1-box {
    width: 100px;
    height: 100px;
    @include bg_color($success-color);

    .theme-font {
      @include font_color($error-color)
    }
  }
</style>
