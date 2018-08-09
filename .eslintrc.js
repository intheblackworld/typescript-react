module.exports = {
  extends: ['eslint-config-alloy/typescript-react'],
  plugins: [
      'typescript'
  ],
  rules: {
    // @fixable 必须使用 === 或 !==，禁止使用 == 或 !=，与 null 比较时除外
    eqeqeq: [
      'error',
      'always',
      {
        null: 'ignore'
      }
    ],
    // 类和接口的命名必须遵守帕斯卡命名法，比如 PersianCat
    'typescript/class-name-casing': 'error',
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        flatTernaryExpressions: true
      }
    ],
    "react/jsx-indent-props": [2, 2], // fix React Component indent bug
    "semi": ["error", "never"]
  }
};
