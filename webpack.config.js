const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        use: {
          loader: "babel-loader",
          options: {
            babelrc: false,
            presets: [
              require.resolve("@babel/preset-react"),
              require.resolve("@babel/preset-env"),
            ],
            cacheDirectory: true,
          },
        },
      },
    ],
  },
  devServer: {
    compress: true,
    host: "localhost",
    port: 9000,
    open: true,
  },
  mode: "development",
  plugins: [new HtmlWebpackPlugin({ template: "./index.html" })],
};
