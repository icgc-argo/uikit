module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../src/**/stories.@(js|jsx|ts|tsx)'], // relative to this file
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-knobs',
  ],
  framework: '@storybook/react',
  features: {
    storyStoreV7: false, // only CSF story format supported
  },
};
