module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'airbnb',
    'plugin:import/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended'
  ],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', 'react-hooks', 'import'],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': [2, { commonjs: true, amd: true }],
    'import/named': 2,
    'import/namespace': 2,
    'import/default': 2,
    'import/export': 2,
    'react/destructuring-assignment': 'off',
    'react/display-name': 'off',
    'react/jsx-boolean-value': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/forbid-prop-types': ['error', { forbid: ['any', 'array'], checkContextTypes: false, ',checkChildContextTypes': false }],
    'react/self-closing-comp': ['error', {
      component: true,
      html: true
    }],
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/anchor-has-content': 'off',
    'jsx-a11y/no-autofocus': [
      2,
      { ignoreNonDOM: true }
    ],
    'arrow-parens': [2, 'as-needed', { requireForBlockBody: true }],
    'comma-dangle': ['error', 'never'],
    'linebreak-style': 0,
    'max-len': 'off',
    'no-plusplus': 'off',
    'object-curly-newline': ['error', {
      ObjectExpression: { multiline: true, minProperties: 5 },
      ObjectPattern: { multiline: true },
      ImportDeclaration: { multiline: true }
    }],
    radix: 'off',
    semi: ['error', 'never']
  },
  settings: {
    react: { version: 'detect' },
    'import/extensions': [
      '.js',
      '.jsx'
    ]
  }
}
