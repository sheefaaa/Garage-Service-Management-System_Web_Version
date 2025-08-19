/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./**/*.html"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(var(--gradient-angle, 0deg), var(--gradient-from, #000), var(--gradient-to, #fff))',
        'gradient-custom-1': 'linear-gradient(to right, var(--tw-gradient-stops))',
        'gradient-custom-2': 'linear-gradient(45deg, var(--tw-gradient-stops))',
        'gradient-custom-3': 'linear-gradient(90deg, var(--tw-gradient-stops))',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
