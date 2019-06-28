import anime from "animejs";

export default {
  state: {
    header: "float",
    color: "",
    column: "",
    theme: "deep",
    layout: "left",
    language: "zh-CN",
    skin: ""
  },
  mutations: {
    SETHEADER: (state, data) => state.header = data,
    SETCOLOR: (state, data) => state.color = data,
    SETCOLUMN: (state, data) => state.column = data,
    SETTHEME: (state, data) => state.theme = data,
    SETLAYOUT: (state, data) => state.layout = data,
    SETLANGUAGE: (state, data) => state.language = data,
    SETSKIN: (state, data) => state.skin = data
  },
  getters: {
    commonLanguage: (state) => state.language
  },
  actions: {
    setHeaderAction({commit}, payload) {
      commit("SETHEADER", payload);
    },
    setColorAction({commit}, payload) {
      commit("SETCOLOR", payload);
    },
    setColumnAction({commit}, payload) {
      commit("SETCOLUMN", payload);
    },
    settThemeAction({commit}, payload) {
      commit("SETTHEME", payload);
    },
    setLayoutAction({commit}, payload) {
      commit("SETLAYOUT", payload);
    },
    setLanguageAction({commit}, payload) {
      commit("SETLANGUAGE", payload);
    },
    setSkinAction({commit}, payload) {
      commit("SETSKIN", payload);
    },
    animeLayoutToTransform() {
      const elements = document.querySelectorAll(".el-anime .el-sub");
      anime({
        targets: elements,
        translateX: 324,
        duration: 1000,
      });
    }
  },
};
