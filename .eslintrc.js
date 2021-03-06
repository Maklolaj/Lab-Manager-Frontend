module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["google", "plugin:prettier/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "require-jsdoc": "off",
    "new-cap": "off",
    "prettier/prettier": "error",
  },
};
