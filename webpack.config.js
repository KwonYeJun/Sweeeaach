// import path from 'path';
// CommonJs방식으로 작성을 해주어야 한다.
const path = require("path");

module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx$/],
        use: ["babel-loader"],
      },
      {
        test: [/\.m4a$/],
        use: ["file-loader"],
      },
      {
        test: [/\.css$/],
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".css", ".png"],
  },
};
