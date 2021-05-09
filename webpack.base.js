const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const STATIC_FOLDER = "public";
const SOURCE_FOLDER = "src";
// const BASE_DIR  = "//..//..//";
const BASE_DIR  = __dirname; 

var getWebpackConfig = (options) => {
  return {
    // mode: development|production
    mode: options.mode,
    // dev server: defines the port, compression and the "public" folder
    devServer: {
      contentBase: path.join(BASE_DIR, STATIC_FOLDER),
      compress: true,
      port: 5000,
      historyApiFallback: true, // <---- push history fallback
    },
    // entry file: all resources (e.g. css) must be included here
    entry: {
      app: path.join(BASE_DIR, SOURCE_FOLDER, "index.tsx"),
    },
    target: "web",
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
    },
    // modules and rules for import (tsx and scss)
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: "/node_modules/",
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // { //per hash64
            //   loader: 'css-loader',
            //   options: {
            //     importLoaders: 1,
            //     modules: {
            //       localIdentName: '[name]_[local]_[hash:base64:5]'
            //     }
            //   }
            // }
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },
        {
          test: /\.css$/,
          use: ["css-loader"],
        },
        {
          test: /\.(png|gif|woff|woff2|eot|otf|ttf|svg)$/,
          loader: "url-loader?limit=100000",
        },
        {
          test: /\.(png|jpe?g|gif)$/,
          loader: "url-loader?limit=8000&name=images/[name].[ext]",
          include: path.join(BASE_DIR, "public"),
        },
      ],
    },
    // final output file
    output: {
      publicPath: "/", // <---- push history fallback
      filename: "[name].js",
      path: path.resolve(BASE_DIR, STATIC_FOLDER),
    },
    // dev tools for source maps (none or source map)
    devtool: options.devtool,
    // this plugin injects the index.js bundle into the index.html body
    plugins: [
      // new CopyWebpackPlugin({
      //   patterns: [{ from: "./" + SOURCE_FOLDER + "/Images", to: "Images" }],
      // }),
      new HtmlWebpackPlugin({
        template: BASE_DIR + "/" + SOURCE_FOLDER + "/index.html",
        filename: "index.html",
        inject: "body",
        hash: true,
      }),
    ],
  };
};

module.exports = getWebpackConfig;
