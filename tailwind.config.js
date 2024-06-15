/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        'lg': '0px 4px 18px 0px rgba(0, 0, 0, 0.08)'
      },
      colors: {
        'orange': '#FFA920'
      },
      animation: {
        'spin-slow': 'spin 15s linear infinite',
        'bounce-slow': 'bounce 5s infinite',
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite'
      },
    },
  },
  plugins: [],
}

