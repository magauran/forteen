module.exports = {
  devServer: {
    disableHostCheck: true
  },
  transpileDependencies: [
    'vuetify'
  ],
  css: {
    loaderOptions: {
      sass: {
        data: `
           @import "@/styles/palette.scss";
        `
      }
    }
  }
}
