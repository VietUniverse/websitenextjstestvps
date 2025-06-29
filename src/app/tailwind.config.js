module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Thêm font tùy chỉnh để có thể dùng class như 'font-sans' hoặc 'font-serif'
        sans: ['var(--font-sans)'],
        serif: ['var(--font-serif)'],
      },
      // Thêm các màu tùy chỉnh vào đây để có thể dùng class như bg-brand-primary
      colors: {
        brand: {
          primary: 'var(--color-primary)',
          secondary: 'var(--color-secondary)',
          accent: 'var(--color-accent)',
        }
      }
    },
  },
  plugins: [],
};