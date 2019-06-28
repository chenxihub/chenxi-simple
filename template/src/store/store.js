import Vue from "vue";
import Vuex from "vuex";
// import createLogger from "vuex/dist/logger";
import createPersistedState from "vuex-persistedstate/index";
import modules from "./modules";
import {$getSettingKey} from "para-lib";

Vue.use(Vuex);

const index = {
  state: global.state,
  mutations: global.mutations,
  actions: global.actions,
  getters: global.getters,
  modules,
  // strict: process.env.NODE_ENV !== "production",
  plugins: [createPersistedState({
    key: $getSettingKey(),
    storage: window.localStorage,
    reducer(val) {
      return {
        setting: val.setting,
      };
    },
  })],
};

export default new Vuex.Store(index);
