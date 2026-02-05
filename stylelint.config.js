module.exports = {
  extends: ['stylelint-config-standard-scss'],
  plugins: ['stylelint-order'],
  rules: {
    'order/properties-alphabetical-order': true,
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
        ],
      },
    ],
    'selector-class-pattern': null,
    'scss/dollar-variable-pattern': null,
    'scss/at-mixin-pattern': null,
    'declaration-empty-line-before': null,
  },
}
