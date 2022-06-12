const path = require('path');

const moduleResolver = [
  'module-resolver',
  {
    alias: {
      src: './src',
      'src*': './src*',
    },
  },
];

const emotionPreset = [
  '@emotion/babel-preset-css-prop',
  {
    autoLabel: true,
    labelFormat: 'Uikit-[local]',
  },
];

// dundas west and landsdowne
// church
// both ann and sam got new apartments
// de risk
// branch off qa , put anne and ciaran changes off from qa
// above Bloor

module.exports = {
  stories: ['../src/**/*stories.@(js|mdx|ts|tsx)'],
  framework: '@storybook/react',
  staticDirs: ['../'],
  features: {
    emotionAlias: false,
  },
  /* addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-storysource',
    { name: '@storybook/addon-docs', options: { configureJSX: true } },
    '@storybook/addon-controls',
  ], */
  webpackFinal: async (config) => {
    // React preset + Emotion props
    config.module.rules[0].use[0].options.presets = [
      require.resolve('@babel/preset-react'),
      require.resolve('@babel/preset-env'),
      require.resolve('@emotion/babel-preset-css-prop'),
    ];

    return config;
  },

  /*  addons: [
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
  }, */
};
