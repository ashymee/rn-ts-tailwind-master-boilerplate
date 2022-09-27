module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "@react-native-community",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:prettier/recommended",
  ],
  plugins: [
    "react",
    "prettier",
    "@typescript-eslint",
    "unused-imports",
    "simple-import-sort",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "react/no-unstable-nested-components": ["off", { allowAsProps: true }],
    "react/prop-types": [0],
    "prettier/prettier": "error",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "simple-import-sort/imports": "warn",
    "simple-import-sort/exports": "warn",
  },
};
