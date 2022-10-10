module.exports = {
  "stories": [
    "../src/components/**/*.stories.js"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/vue3",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  "webpackFinal": config => {
    config.module.rules.push(
      {
        test: /\.(css|scss|sass)$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
        exclude: /node_modules/,
      }
    )
    return config
  }
}