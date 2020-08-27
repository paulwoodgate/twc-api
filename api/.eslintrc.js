module.exports = {
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  "env": {
    "node": true,
    "es6": true
  },
  "extends": ["eslint:recommended", "prettier"],
  "rules": {
    "no-multiple-empty-lines": "warn",
    "no-var": "error",
    "prefer-const": "warn"
  }
};
