module.exports = {
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            "style-loader",
            "css-loader",
            {
              loader: "sass-loader",
              options: {
                additionalData: `@import './global.scss';`,
              },
            },
          ],
        },
      ],
    },
  };
  