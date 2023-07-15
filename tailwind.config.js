module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        gris_oscuro: '#1f2124',    // Color principal
        gris_medio: '#caced3',     // Color de acento
        teal_oscuro: '#104147',      //color de 
        teal_medio: '#6dd3de',       //color de 
        primary: '#302b95',         //para titulos-violeta
        secondary:'#322b95',
        terciario:'#ffffff',
        accent:'#FFC107',
        color_purpura:'#7b40fe',    /*Texto*/
        color_celeste: '#26a6f5', 
        color_purpura_2: '#0080f7', 	/* Main Secondary color (1) */
        color_rosado: '#ab37ff', 
        color_blancoide: '#c5dcf9', 
        color_purpura_3:'#2f2a95',
      },
      backgroundImage: {
        'dark': '#060a3d',
      },
      backgroundColor: {
        'dark': '#060a3d', // Set the background color for dark mode
      },
      textColor: {
        'white': '#FFFFFF', // Set the text color for dark mode
        'oscuro': '#000B31'
      },
    },
  },
  variants: {
    extends:{
      backgroundColor:["active","hover","focus","disabled"],
      textColor:["disabled"],
    },
  },
  plugins: [],
}
