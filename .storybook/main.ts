module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  staticDirs: ['./'],
  features: {
    emotionAlias: false,
  },
  core: {
    builder: 'webpack5',
  },
  framework: '@storybook/react',
  webpackFinal: async (config, { presets, configType }) => {
    config.node = {
      __dirname: true,
      __filename: true,
    };

    //
    const version = await presets.apply('webpackVersion');
    const instance = (await presets.apply('webpackInstance'))?.default;
    console.log(`=> Running in webpack ${version}: ${instance}`);

    return config;
  },
};
