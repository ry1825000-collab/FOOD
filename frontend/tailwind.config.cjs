module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        rcb: {
          primary: '#EC1C24',
          bg: '#111111',
          accent: '#D4AF37',
          card: '#252525',
          text: '#FFFFFF'
        }
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0,0,0,0.6)'
      }
    }
  },
  plugins: []
}
