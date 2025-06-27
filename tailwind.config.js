/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'scroll': 'scroll 30s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
  safelist: [
    // Extended color variations for dynamic classes
    {
      pattern: /(bg|text|border|ring|from|to|shadow)-(blue|purple|pink|green|red|orange|teal|indigo|yellow|emerald|cyan|rose|violet|amber|lime|sky)-(50|100|200|300|400|500|600|700|800|900)/,
    },
    {
      pattern: /peer-focus:text-(blue|purple|pink|green|red|orange|teal|indigo|yellow|emerald|cyan|rose|violet|amber|lime|sky)-(500|600)/,
    },
    {
      pattern: /peer-focus:ring-(blue|purple|pink|green|red|orange|teal|indigo|yellow|emerald|cyan|rose|violet|amber|lime|sky)-(300|500|800)/,
    },
    {
      pattern: /peer-checked:bg-(blue|purple|pink|green|red|orange|teal|indigo|yellow|emerald|cyan|rose|violet|amber|lime|sky)-(600)/,
    },
    {
      pattern: /focus:border-(blue|purple|pink|green|red|orange|teal|indigo|yellow|emerald|cyan|rose|violet|amber|lime|sky)-(500)/,
    },
    {
      pattern: /focus:ring-(blue|purple|pink|green|red|orange|teal|indigo|yellow|emerald|cyan|rose|violet|amber|lime|sky)-(300|500|800)/,
    },
    {
      pattern: /hover:bg-(blue|purple|pink|green|red|orange|teal|indigo|yellow|emerald|cyan|rose|violet|amber|lime|sky)-(50|200|600|700|800|900)/,
    },
    {
      pattern: /hover:text-(blue|purple|pink|green|red|orange|teal|indigo|yellow|emerald|cyan|rose|violet|amber|lime|sky)-(200|300|400|600|800|900)/,
    },
    {
      pattern: /dark:hover:text-(blue|purple|pink|green|red|orange|teal|indigo|yellow|emerald|cyan|rose|violet|amber|lime|sky)-(200|300|400)/,
    },
    {
      pattern: /dark:hover:bg-(blue|purple|pink|green|red|orange|teal|indigo|yellow|emerald|cyan|rose|violet|amber|lime|sky)-(600|700|800|900)/,
    },
    {
      pattern: /dark:bg-(blue|purple|pink|green|red|orange|teal|indigo|yellow|emerald|cyan|rose|violet|amber|lime|sky)-(800|900)/,
    },
    {
      pattern: /dark:text-(blue|purple|pink|green|red|orange|teal|indigo|yellow|emerald|cyan|rose|violet|amber|lime|sky)-(200|300|400)/,
    },
    {
      pattern: /dark:border-(blue|purple|pink|green|red|orange|teal|indigo|yellow|emerald|cyan|rose|violet|amber|lime|sky)-(800)/,
    },
    {
      pattern: /group-hover:bg-(blue|purple|pink|green|red|orange|teal|indigo|yellow|emerald|cyan|rose|violet|amber|lime|sky)-(200|800)/,
    },
    {
      pattern: /dark:group-hover:bg-(blue|purple|pink|green|red|orange|teal|indigo|yellow|emerald|cyan|rose|violet|amber|lime|sky)-(800)/,
    },
    {
      pattern: /hover:shadow-(blue|purple|pink|green|red|orange|teal|indigo|yellow|emerald|cyan|rose|violet|amber|lime|sky)-(500)/,
    },
  ],
};