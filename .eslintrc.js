module.exports = {
    env: {
      browser: true,
      es2022: true,
      node: true
    },
    extends: [
      'eslint:recommended',
      '@typescript-eslint/recommended',
      'plugin:astro/recommended',
      'plugin:jsx-a11y/recommended',
      'prettier'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true
      }
    },
    plugins: [
      '@typescript-eslint',
      'jsx-a11y',
      'prettier'
    ],
    rules: {
      'prettier/prettier': 'error',
      // Reglas de accesibilidad más estrictas
      'jsx-a11y/alt-text': 'error',
      'jsx-a11y/anchor-has-content': 'error',
      'jsx-a11y/anchor-is-valid': 'error',
      'jsx-a11y/aria-props': 'error',
      'jsx-a11y/aria-proptypes': 'error',
      'jsx-a11y/aria-unsupported-elements': 'error',
      'jsx-a11y/heading-has-content': 'error',
      'jsx-a11y/img-redundant-alt': 'error',
      'jsx-a11y/no-access-key': 'error',
      'jsx-a11y/role-has-required-aria-props': 'error',
      'jsx-a11y/role-supports-aria-props': 'error',
      // Reglas específicas para TypeScript
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off'
    },
    overrides: [
      {
        files: ['*.astro'],
        parser: 'astro-eslint-parser',
        parserOptions: {
          parser: '@typescript-eslint/parser',
          extraFileExtensions: ['.astro']
        },
        rules: {
          // Reglas específicas para archivos .astro
          'astro/no-conflict-set-directives': 'error',
          'astro/no-unused-define-vars-in-style': 'error'
        }
      },
      {
        files: ['*.ts', '*.tsx'],
        parser: '@typescript-eslint/parser'
      }
    ],
    settings: {
      'jsx-a11y': {
        components: {
          // Mapeo de componentes personalizados para a11y
          Button: 'button',
          Link: 'a',
          Image: 'img'
        }
      }
    }
  };