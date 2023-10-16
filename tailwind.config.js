/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    backgroundColor: {
      cinza:'#F3F4F6',
      cinzaEscuro: '#E8EAEE',
      branco:'#FFF',
      vermelho:'#F94144',
      verde:'#90BE6D',
      amarelo:'#F9C74F',
      azul:'#498DE1',
    },
  
    extend: {
      textColor:{
        primary:"text-gray-600"
      },
      boxShadow: {
        '3xl': '32px 3px 31px -6px rgba(0,0,0,0.75)',
      }

    },
  },

  plugins: [],
}

