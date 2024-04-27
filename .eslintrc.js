module.exports = {
  extends: ["react-app"],
  parserOptions: {
    // 防止 babel 报错
    babelOptions: {
      presets: [
        ["babel-preset-react-app", false],
        "babel-preset-react-app/prod",
      ],
    },
  },
};
