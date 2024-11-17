/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        abha: {
          500: '#00BCD4',
          900: '#070F21',
        },
      },
      boxShadow: {
        'white-glow': '0 0 5px 2px rgba(255, 255, 255, 0.8), 0 0 20px 5px rgba(255, 255, 255, 0.3)',
      },
      fontFamily: {
        'red-hat': ['"Red Hat Display"', 'sans-serif'],
      },
      textShadow: {
        'white-glow': '0 0 10px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.5)',
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ['hover'],
      textShadow: ['hover'],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-white-glow': {
          textShadow: '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.5)',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}
