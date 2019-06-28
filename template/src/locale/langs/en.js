import enLocale from "element-ui/lib/locale/lang/en";
import commonEn from "./common-en";

const en = {
  ...enLocale,
  "common": {
    ...commonEn,
  },
  "menu": {
    dash: "home page",
    dashboards: "Dash Simple",
    person: {
      "center": "menu1",
      "self_help": "menu2",
      "exit": "Sign Out",
    },
  },
  "setting": {
    style: {
      name: "Overall Style Setting",
      deep: "Dark Color",
      light: "Bright Color",
      dark: "dark",
      simple: "simple"
    },
    main_color: {
      name: "Theme Color",
    },
    navigator: {
      name: "Navigation Mode",
      left: "Side",
      top: "Top",
    },
    fixed_head: {
      name: "Fixed Head",
      yes: "Yes",
      no: "No",
    },
    skin: {
      name: "Chnage Skin",
      kind: [
        {name: 'dark_green', txt: 'DarkGreen'},
        {name: 'succinct', txt: 'Succinct'}
      ]
    }
  },
};

export default en;
