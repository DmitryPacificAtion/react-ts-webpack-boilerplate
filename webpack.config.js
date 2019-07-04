const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // Or try to use without destructuring

module.exports = {
  mode: "development",
  entry: {
    app: "./src/App/index.tsx",
    // styles: "./src/App/style.css",
  }
  ,
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: ["ts-loader"],

        exclude: "/node_modules/",
      },
      {
        test: /\.css$/,
        use: [
          {loader: "style-loader"},
          {loader: "css-loader",
            options: {
              use: [require("nib")()],
              "include css": true,
            }
          },
          {loader: "required-loader"}
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          "file-loader"
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          "file-loader"
        ]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".json", ".css"],
  },
  devtool: "inline-source-map",
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Pokemons",
      filename: "index.html"
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: "./dist",
    hot: true,
    host: "localhost",
    open: true
  },
};