const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const dotenv = require('dotenv');
const webpack = require('webpack');

// call dotenv and it will return an Object with a parsed key 
const env = dotenv.config().parsed || {};

// reduce it to a nice object, the same as before
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
      "Access-Control-Allow-Private-Network": true,
    },
    port: 3001,
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
            options: {
              insert: (element) => {
                window["widget-style"] = element;
                var parent = options.target || document.head;

                parent.appendChild(element);
              },
            },
          },
          "css-loader",
        ],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "finWidget",
      library: { type: "var", name: "finWidget" },
      filename: "widgetRemote.js",
      exposes: {
        "./StockWidget": "./src/StockWidget.js",
        "./RiskWidget": "./src/RiskWidget.js",
        "./NewsWidget": "./src/NewsWidget.js",
        "./ReactRenderer": "./src/utils/ReactRenderer.js",
      },
      shared: { react: { singleton: true }, "react-dom": { singleton: true }},
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new webpack.DefinePlugin(envKeys),
  ],
};
