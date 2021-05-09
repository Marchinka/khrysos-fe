const getWebpackConfig = require("./webpack.base");

module.exports = getWebpackConfig({
  mode: "production",
  devtool: "none",
});
