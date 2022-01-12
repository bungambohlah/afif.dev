/* eslint-disable no-undef */
module.exports = {
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser'
    })
  ]
}
