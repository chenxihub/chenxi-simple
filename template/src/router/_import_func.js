if (process.env.NODE_ENV === "development") {
  module.exports = (file) => {
    try {
      /*eslint-disable*/
      return require("@/views/" + file).default;
    } catch (e) {
      return null;
    }
  };
} else {
  module.exports = file => () => import("@/views/" + file);
}
