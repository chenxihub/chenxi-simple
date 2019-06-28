import zhLocale from "element-ui/lib/locale/lang/zh-CN";
import commonCn from "./common-cn";

const zhCN = {
  ...zhLocale,
  "common": {
    ...commonCn,
  },
  "menu": {
    dash: "首页",
    dashboards: "后台管理模型示例",
    person: {
      "center": "菜单一",
      "self_help": "菜单二",
      "exit": "退出登录",
    },
  },
  "setting": {
    style: {
      name: "整体风格设置",
      deep: "暗色",
      light: "亮色",
      dark: "绿黑",
      simple: "简洁",
    },
    main_color: {
      name: "主题色",
    },
    navigator: {
      name: "导航模式",
      left: "侧边",
      top: "顶部",
    },
    fixed_head: {
      name: "固定头部",
      yes: "是",
      no: "否",
    },
    skin: {
      name: "换肤",
      kind: [{
        name: "dark_green",
        txt: "黑绿",
      },
        {
          name: "succinct",
          txt: "简洁",
        },
      ],
    },
  },
};
export default zhCN;
