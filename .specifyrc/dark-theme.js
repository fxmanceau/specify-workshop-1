require('dotenv').config()

module.exports = {
  repository: process.env.SPECIFY_REPOSITORY_DARK,
  personalAccessToken: process.env.SPECIFY_TOKEN,
  rules: [
    {
      name: 'Colors / Dark Theme',
      path: 'assets/styles/variables/colors/_dark-theme.scss',
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
              selector: ":root[data-theme='dark']",
            },
          },
        },
      ],
    },
  ],
}
