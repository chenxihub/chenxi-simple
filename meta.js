module.exports = {
  prompts: {
    "name": {
      "type": "string",
      "required": true,
      "label": "Project name",
    },
    "description": {
      "type": "string",
      "required": true,
      "label": "Project description",
      "default": "A Vue.js project",
    },
    "author": {
      "type": "string",
      "label": "Author",
    },
    "license": {
      "type": "string",
      "label": "License",
      "default": "MIT",
    },
  },
  complete(data) {
    console.log([
      "      __                                    \n" +
      "     /\\ \\                             __    \n" +
      "  ___\\ \\ \\___      __    ___    __  _/\\_\\   \n" +
      " /'___\\ \\  _ `\\  /'__`\\/' _ `\\ /\\ \\/'\\/\\ \\  \n" +
      "/\\ \\__/\\ \\ \\ \\ \\/\\  __//\\ \\/\\ \\\\/>  </\\ \\ \\ \n" +
      "\\ \\____\\\\ \\_\\ \\_\\ \\____\\ \\_\\ \\_\\/\\_/\\_\\\\ \\_\\\n" +
      " \\/____/ \\/_/\\/_/\\/____/\\/_/\\/_/\\//\\/_/ \\/_/\n" +
      "                                            \n" +
      "                                            ",
      `Next Steps:\n${!data.inPlace ? "\n  \x1b[33m$\x1b[0m cd " + data.destDirName : ""}`,
      "  \x1b[33m$\x1b[0m yarn (or `npm install`)",
      "  \x1b[33m$\x1b[0m yarn run serve (or `npm run serve`)",
    ].join("\n"));
  },
};
