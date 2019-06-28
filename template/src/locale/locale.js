import Vue from "vue";
import locale from "element-ui/lib/locale";
import VueI18n from "vue-i18n";
import messages from "./langs";
import Vuex from "../store/store";
import {$getLang} from "para-lib";

Vue.use(VueI18n);
const language = Vuex.state.setting.language;
let lang;
if (language) {
  lang = language;
} else {
  lang = $getLang();
}
const i18n = new VueI18n({
  locale: lang,
  messages,
});

locale.i18n((key, value) => i18n.t(key, value));

export default i18n;
