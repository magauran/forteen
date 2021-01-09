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
        prependData: `
           @import "@/styles/palette.scss";
        `
      }
    }
  }
}
