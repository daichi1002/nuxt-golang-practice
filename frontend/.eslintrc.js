module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },

  extends: [
    "plugin:nuxt/recommended",
    "@nuxtjs/eslint-config-typescript",
    "prettier",
  ],

  ignorePatterns: ["vue.d.ts", "gql.d.ts", "client.ts"],

  plugins: ["vue"],
  rules: {
    "no-console": "off",
    "vue/max-attributes-per-line": "off",
    "no-unused-vars": "off", // 使っていない変数を許可
    "vue/html-self-closing": "off", // 空タグを許可する
    "spaced-comment": "off", // commentに適切なスペースが入っていなくても良しとする
    camelcase: "off", // camelCase以外の変数を許可する
    "no-irregular-whitespace": "off", // 全角スペースを許可する
    "@typescript-eslint/no-unused-vars": "off", // typescriptでも使っていない変数を許可
  },
};
