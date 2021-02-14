const withReactSvg = require("next-react-svg");
const path = require("path");
const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa");
const withFonts = require("next-fonts");

const isProd = process.env.NODE_ENV === "production";

const config = {
  env: {
    SERVER_URL: process.env.IS_PROD_SERVER
      ? "https://prod.com"
      : "http://localhost:3333",
  },
  pwa: {
    dest: "public",
  },
  include: path.resolve(__dirname, "src/assets/icons"),
  webpack(config) {
    return config;
  },
};

module.exports = withPlugins(
  [withFonts, withReactSvg, ...(isProd ? [withPWA] : [])],
  config
);
