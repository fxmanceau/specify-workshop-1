// const INLINE_ELEMENTS = require('eslint-plugin-vue/lib/utils/inline-non-void-elements.json')

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'comma-dangle': ['error', 'only-multiline'],
    'nuxt/no-cjs-in-config': 'off',
    'vue/no-v-html': 'off',
    // 'vue/singleline-html-element-content-newline': [
    //   'error',
    //   {
    //     ignores: ['n-link', 'nuxt-link', 'prismic-link', 'dotted-heading', ...INLINE_ELEMENTS],
    //   },
    // ],
  },
}
