module.exports = function (api) {
  api.cache(true);
  const presets = [
    '@babel/preset-env',
    ['@babel/preset-react', { runtime: 'automatic', importSource: '@emotion/react' }],
    [
      '@emotion/babel-preset-css-prop',
      {
        autoLabel: true,
        labelFormat: 'Uikit-[local]',
      },
    ],
  ];

  const plugins = [
    '@emotion',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-object-rest-spread',
    [
      'module-resolver',
      {
        root: ['./dist'],
        alias: {
          src: './dist',
        },
      },
    ],
    'inline-svg',
  ];

  return {
    presets,
    plugins,
  };
};
