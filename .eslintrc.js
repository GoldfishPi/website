module.exports = {
    globals: {
        __PATH_PREFIX__: true,
    },
    extends: `react-app`,
    parser: '@typescript-eslint/parser',
    plugins:['prettier', '@typescript-eslint'],
    "parserOptions": {
      "ecmaVersion": 11,
      "sourceType": "module"
    },
    rules: {
        'prettier/prettier':'error',
        "no-use-before-define": "off",
        "@typescript-eslint/no-redeclare": ["off"],
        '@typescript-eslint/no-use-before-define':'off',
    }
}
