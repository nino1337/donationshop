module.exports = {
  baseUrl:
    process.env.NODE_ENV === 'production'
      ? '/typo3conf/ext/bra_projectfiles_stc/Resources/Public/donation-shop/dist/'
      : '/',
  chainWebpack: (config) => {
    if (config.plugins.has('extract-css')) {
      const extractCSSPlugin = config.plugin('extract-css');
      extractCSSPlugin &&
        extractCSSPlugin.tap(() => [
          {
            filename: '[name].css',
            chunkFilename: '[name].css',
          },
        ]);
    }
  },
  configureWebpack: {
    output: {
      filename: '[name].js',
      chunkFilename: '[name].js',
    },
  },
};
