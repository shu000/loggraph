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
    "**/node_modules/**",
    "./client/reset.css"
  ],
  rules: {
    indentation: 2,
    "string-quotes": "double",
    "order/properties-alphabetical-order": true,
    "at-rule-no-unknown": [true, { "ignoreAtRules": "at-root" }]
  }
};
