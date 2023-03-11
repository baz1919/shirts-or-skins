module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
  ],
  rules: {
    "react/prop-types": 0,
    "react/function-component-definition": [2, {
      namedComponents: "arrow-function",
      unnamedComponents: "arrow-function",
    }],
    "no-restricted-exports": 0,
    "arrow-body-style": ["error", "as-needed"],
    quotes: ["error", "double"],
    "linebreak-style": 0,
  },
};
