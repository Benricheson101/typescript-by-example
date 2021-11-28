/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        logo: {
          typescript: '#3178c6',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
