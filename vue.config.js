module.exports = {
  devServer: {
    proxy: {
      "/path/to/api/*": {
        target: "http://localhost:3000",
        secure: false,
        changeOrigin: true
      }
    }
  }
}