const getWebpackConfig = require("./webpack.base");

module.exports = getWebpackConfig({
  mode: "development",
  devtool: "eval-source-map",
});
