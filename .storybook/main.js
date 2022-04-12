module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',

  webpackFinal: async (config, { configType }) => {
    config.node = {
      __dirname: true,
      __filename: true,
    };

    return config;
  },
};
