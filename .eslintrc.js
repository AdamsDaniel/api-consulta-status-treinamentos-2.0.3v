module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:security/recommended',
    'plugin:node/recommended',
  ],
  plugins: [
    'security',
    'node',
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  rules: {
    // Security-focused rules
    'security/detect-buffer-noassert': 'error',
    'security/detect-child-process': 'warn',
    'security/detect-disable-mustache-escape': 'error',
    'security/detect-eval-with-expression': 'error',
    'security/detect-new-buffer': 'error',
    'security/detect-no-csrf-before-method-override': 'error',
    'security/detect-non-literal-fs-filename': 'warn',
    'security/detect-non-literal-regexp': 'warn',
    'security/detect-non-literal-require': 'warn',
    'security/detect-object-injection': 'warn',
    'security/detect-possible-timing-attacks': 'warn',
    'security/detect-pseudoRandomBytes': 'error',
    'security/detect-unsafe-regex': 'error',
    
    // Node.js specific security rules
    'node/no-deprecated-api': 'error',
    'node/no-extraneous-import': 'error',
    'node/no-extraneous-require': 'error',
    'node/no-missing-import': 'error',
    'node/no-missing-require': 'error',
    'node/no-unpublished-bin': 'error',
    'node/no-unpublished-import': 'error',
    'node/no-unpublished-require': 'error',
    'node/no-unsupported-features/es-builtins': 'error',
    'node/no-unsupported-features/es-syntax': 'error',
    'node/no-unsupported-features/node-builtins': 'error',
    'node/process-exit-as-throw': 'error',
    'node/shebang': 'error',
    
    // General security-focused best practices
    'no-eval': 'error',
    'no-implied-eval': 'error',
    'no-new-func': 'error',
    'no-script-url': 'error',
    'no-alert': 'warn',
    'no-console': 'warn',
    'no-debugger': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'strict': ['error', 'global'],
    
    // Prevent common vulnerabilities
    'no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
    'no-undef': 'error',
    'no-redeclare': 'error',
    'no-shadow': 'warn',
    'eqeqeq': ['error', 'always'],
    'curly': ['error', 'all'],
    'brace-style': ['error', '1tbs'],
  },
  overrides: [
    {
      files: ['cypress/**/*.js'],
      rules: {
        'no-unused-expressions': 'off',
      },
    },
    {
      files: ['**/*.test.js', '**/*.spec.js'],
      rules: {
        'no-console': 'off',
      },
    },
  ],
};
