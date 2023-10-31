/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      maxWidth: {
        default: '800px'
      }
    },
    extend: {
      backgroundImage: {
        'custom-bg': "url('file:///C:/Users/yassi/OneDrive/Bureau/site%20web/my-app/src/components/back1.jpg')",
      },
      // Ajoutez un style pour étendre l'arrière-plan sur toute la page
      extend: {
        html: {
          height: '100%',
        },
        body: {
          height: '100%',
        },
      },
    },
  },
  plugins: [],
};
