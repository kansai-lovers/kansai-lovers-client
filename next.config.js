/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

module.exports = {
  poweredByHeader: false,
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      src: path.join(__dirname, "src/"),
    };
    config.module.rules.push(
      {
        test: /\.svg$/,
        use: ["@svgr/webpack", "url-loader"],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 100000,
          },
        },
      }
    );
    return config;
  },
};
