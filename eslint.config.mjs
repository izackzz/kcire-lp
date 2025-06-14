import { FlatCompat } from '@eslint/eslintrc'
import prettier from 'eslint-config-prettier'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ),
  {
    plugins: {
      prettier: eslintPluginPrettier,
      '@typescript-eslint': true,
    },
    ignores: ['node_modules/**', '.next/**', 'dist/**', 'out/**', 'public/**'],
    settings: {
      tailwindcss: {
        callees: ['clsx', 'classnames', 'cn'], // se usa helpers para classes dinâmicas, declare aqui
      },
    },
    rules: {
      'prettier/prettier': 'warn',
      'no-console': 'warn',
      'import/order': [
        'warn',
        {
          groups: [['builtin', 'external'], 'internal', ['sibling', 'parent'], 'index'],
          'newlines-between': 'always',
        },
      ],
      'tailwindcss/classnames-order': 'warn',
    },
  },
  prettier,
]

export default eslintConfig
