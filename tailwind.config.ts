import { type Config } from 'tailwindcss'

const config: Config = {
  theme: {
    extend: {
      colors: {
        kcire: {
          1: 'hsla(274, 81%, 6%, 1)',
          2: 'hsla(289, 77%, 39%, 1)',
          3: 'hsla(274, 80%, 20%, 1)',
          4: 'hsla(274, 80%, 10%, 1)',
          w: 'hsla(0, 0%, 90%, 1)',
        },
      },
    },
  },
  plugins: [],
}

export default config
