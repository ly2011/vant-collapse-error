const theme = {
  'cell-vertical-padding': '8px',
  'dropdown-menu-title-font-size': '14px',
};

module.exports = {
  publicPath: './',
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
        // lessOptions: {
        modifyVars: theme,
        // }
      },
    },
  },

  chainWebpack: (config) => {
    config.plugins.delete('prefetch');
    config.plugins.delete('preload');
  },

  productionSourceMap: false,

  devServer: {
    useLocalIp: true,
    port: 5000,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000',
        changeOrigin: true,
        pathRewrite: {
          '/api': '',
        },
      },
    },
  },
};
