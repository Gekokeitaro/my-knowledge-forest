/** @type {import('stylelint').Config} */
export default {
  plugins: ['stylelint-prettier'],
  extends: ['stylelint-config-recommended', 'stylelint-config-tailwindcss'],
  rules: {
    'prettier/prettier': true,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'apply',
          'layer',
          'responsive',
          'screen',
          'tailwind',
          'variants',
          'theme',
        ],
      },
    ],
    'no-descending-specificity': null,
    'at-rule-no-deprecated': [
      true,
      {
        ignoreAtRules: ['apply'],
      },
    ],
  },
};
