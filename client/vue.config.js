module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:3335',
          changeOrigin: true,
          secure: false,
        },
      },
    },
  };