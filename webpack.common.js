const path = require("path");

function srcPath(subdir) {
  return path.join(__dirname, "src", subdir);
}

module.exports = {
  entry: {
    backgroundPage: path.join(__dirname, "src/backgroundPage.ts"),
    popup: path.join(__dirname, "src/popup/index.tsx"),
    content: path.join(__dirname, "src/content-script/main.ts"),
  },
  output: {
    path: path.join(__dirname, "dist/js"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: "ts-loader",
      },
      {
        exclude: /node_modules/,
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader", // Creates style nodes from JS strings
          },
          {
            loader: "css-loader", // Translates CSS into CommonJS
          },
          {
            loader: "sass-loader", // Compiles Sass to CSS
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      "@src": path.resolve(__dirname, "src/"),
    },
  },
};
