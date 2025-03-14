/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          // Add opacity variations with rgb values
          opaque: "rgb(var(--color-primary-rgb) / <alpha-value>)"
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
          // Add opacity variations with rgb values
          opaque: "rgb(var(--color-secondary-rgb) / <alpha-value>)"
        },
        tertiary: {
          DEFAULT: "var(--color-tertiary)",
          // Add opacity variations with rgb values
          opaque: "rgb(var(--color-tertiary-rgb) / <alpha-value>)"
        },
        light: {
          DEFAULT: "var(--color-light)",
          // Add opacity variations with rgb values
          opaque: "rgb(var(--color-light-rgb) / <alpha-value>)"
        },
      },
      borderColor: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",
        light: "var(--color-light)",
      },
      fontFamily: {
        sans: ["Calibre", "Inter", "San Francisco", "SF Pro Text", "system-ui", "sans-serif"],
        mono: ["SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", "monospace"],
      },
    },
  },
  plugins: [],
} 