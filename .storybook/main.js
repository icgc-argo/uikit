const path = require("path");

module.exports = {
  stories: [
    "../src/Affix/stories.@(js|mdx|ts|tsx)",
    //  "../src/AppBar/stories.@(js|mdx|ts|tsx)",
    "../src/ClipboardCopyField/stories.@(js|mdx|ts|tsx)",

    "../src/Button/stories.@(js|mdx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-knobs",
    "@storybook/addon-actions",
    "@storybook/addon-a11y",
    "@storybook/addon-viewport",
  ],
  babel: async (options) => ({
    ...options,
    presets: options.presets.concat([
      [
        "@emotion/babel-preset-css-prop",
        {
          autoLabel: true,
          labelFormat: "Uikit-[local]",
        },
      ],
    ]),
  }),
  webpackFinal: async (config, { configType }) => {
    config.node = {
      __dirname: true,
      __filename: true,
    };

    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, "../"),
    ];

    return config;
  },
};
