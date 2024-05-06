export default {
  content: [
      "./index.html",
      "./src/**/*.{jsx,ts,tsx,js}",
  ],
  theme: {
      extend: {
          screens: {
              'responsive': {'max': '760px'},
          },
          textColor: {
              primary: '#0088FF',
              grey: '#C9C9D3',
              textBody: '#6E7686',
              eyes: '#D5D5D5',
              notice: '#242426',
              noticeIcon: '#77808F'
          },
          backgroundColor: {
              primary: '#0088FF',
              grey: '#C9C9D3',
              notice: '#F0F2F4',
              'pale-cyan' : '#F4F9FF'
          },
          borderColor: {
              line: '#BCBFC1',
              primary: '#0088FF',
              grey: '#C9C9D3',
              'telephone': '#E3E5E6'
          },
          margin: {},
          maxWidth: {
              114: '28.5rem',
          },
          width: {
              114: '28.5rem',
              108: '27rem',
              content: '28.5rem',
              74: '18.5rem',
              26.5: '6.625rem',
          },
          lineHeight: {
              5.5: '1.375rem',
              4.5: '1.125rem',
          },
          fontSize:{
              8: '2rem',
          },
          top: {
              phone: 'calc(100% + 1rem)',
          }
      },
  },
  plugins: [
      require('tailwindcss-textshadow'),
  ],
}
