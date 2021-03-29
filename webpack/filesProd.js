module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif|svg|svgz|webp)(\?.+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              outputPath: 'images/',
              name: '[name].[hash].[ext]',
              limit: 64,
            },
          },
        ],
      },
      {
        test: /\.(eot|ttf|woff|woff2|otf)(\?.+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              outputPath: 'fonts/',
              name: '[name].[hash].[ext]',
              limit: 64,
            },
          },
        ],
      },
    ],
  },
});
