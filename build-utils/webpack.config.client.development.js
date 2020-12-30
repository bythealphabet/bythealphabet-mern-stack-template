const path = require("path");
const nodeExternals = require("webpack-node-externals");
const CURRENT_WORKING_DIR = process.cwd();

function webpackServer(name) {
  return {
    name,
    devtool: "eval-source-map",
    entry: [
      "webpack-hot-middleware/client?reload=true",
      path.join(CURRENT_WORKING_DIR, "client/main.js"),
    ],
    output: {
      path: path.join(CURRENT_WORKING_DIR, "/dist"),
      filename: "bundle.js",
      publicPath: "/dist/",
    },
  };
}

module.exports = webpackServer;
