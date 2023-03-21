// postcss.config.js
const dotenvCra = require("dotenv-cra");
process.env.NODE_ENV = process.env.NODE_ENV || "production";
dotenvCra.config();
//development dev server running at

const plugins = {
  tailwindcss: {},
  autoprefixer: {},
};

if (process.env.VITE_LRT_OR_RTL === "rtl") {
  plugins["postcss-cssjanus"] = {
    transformDirInUrl: false,
    transformEdgeInUrl: false,
  };
}

module.exports = () => {
  return {
    plugins,
  };
};
