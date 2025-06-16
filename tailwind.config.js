// https://tailwindcss.com/docs/configuration
/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: ['@ianvs/prettier-plugin-tailwindcss'],
  content: ['./src/**/*.{ts,tsx,js,jsx,mdx}'],
  theme: {
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      colors: {
        kcire: {
          1: 'hsla(274, 81%, 6%, 1)',
          2: 'hsla(289, 77%, 39%, 1)',
          3: 'rgba(243, 153, 255, 1)',
          4: 'hsla(274, 80%, 10%, 1)',
          w: 'hsla(0, 0%, 90%, 1)',
        },
      },
      fontSize: {
        14: ['0.875rem', { lineHeight: '0.875rem' }], // 14px
        18: ['1.125rem', { lineHeight: '1.125rem' }], // 18px
        20: ['1.25rem', { lineHeight: '1.25rem' }], // 20px
        22: ['1.375rem', { lineHeight: '1.375rem' }], // 22px
        24: ['1.5rem', { lineHeight: '1.5rem' }], // 24px
        28: ['1.75rem', { lineHeight: '1.75rem' }], // 28px
        36: ['2.25rem', { lineHeight: '2.25rem' }], // 36px
        40: ['2.5rem', { lineHeight: '2.5rem' }], // 40px
        48: ['3rem', { lineHeight: '3rem' }], // 48px
        52: ['3.25rem', { lineHeight: '3.25rem' }], // 52px
        68: ['4.25rem', { lineHeight: '4.25rem' }], // 68px
      },
    },
  },
  plugins: [],
}
