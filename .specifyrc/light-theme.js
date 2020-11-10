require('dotenv').config()

module.exports = {
  repository: process.env.SPECIFY_REPOSITORY_LIGHT,
  personalAccessToken: process.env.SPECIFY_TOKEN,
  rules: [
    {
      name: 'Colors / Light Theme',
      path: 'assets/styles/variables/colors/_light-theme.scss',
      filter: {
        types: ['color'],
      },
      parsers: [
        {
          name: 'kebabcasify',
          options: {
            keys: ['name'],
          },
        },
        {
          name: 'to-css-custom-properties',
          options: {
            formatConfig: {
              selector: ":root[data-theme='light']",
            },
          },
        },
      ],
    },
  ],
}
