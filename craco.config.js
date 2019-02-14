const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer"); // Visualize size of webpack output files with an interactive zoomable treemap
const WebpackBar = require("webpackbar"); // ProgressBar while building
const CracoAntDesignPlugin = require("craco-antd");
const path = require("path");

// Don't open the browser during development
process.env.BROWSER = "none";

module.exports = {
  webpack: {
    plugins: [
      new WebpackBar({ profile: true }),
      ...(process.env.NODE_ENV === "development"
        ? [new BundleAnalyzerPlugin({ openAnalyzer: false })] // localhost:8888
        : [])
    ]
  },
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        // customizeThemeLessPath: path.join(__dirname, "src/style/AntDesign/customTheme.less"),
        customizeTheme: {
          // "@primary-color": "#1DA57A",
          // "@link-color": "#1DA57A"
        }
      }
    }
  ]
};