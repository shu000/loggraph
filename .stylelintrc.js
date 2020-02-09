module.exports = {
  plugins: [
    "stylelint-order"
  ],
  extends: [
    "stylelint-config-recommended-scss",
    "stylelint-config-standard",
    "stylelint-prettier/recommended"
  ],
  ignoreFiles: [
    "**/node_modules/**"
  ],
  rules: {
    indentation: 2,
    "string-quotes": "single",
    "order/properties-alphabetical-order": true,
    "at-rule-no-unknown": [true, { "ignoreAtRules": "at-root" }]
  }
};
