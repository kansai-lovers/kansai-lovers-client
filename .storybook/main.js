/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-postcss",
  ],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      src: path.join(__dirname, "../src/"),
    };
    return config;
  },
};
