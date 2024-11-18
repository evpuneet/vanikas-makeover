const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        move: "move 5s linear infinite",
      },
      keyframes: {
        move: {
          "0%": { transform: "translateX(-200px)" },
          "100%": { transform: "translateX(200px)" },
        },
      },
      fontFamily: {
        Forum: ['Forum', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif']
      },
      backgroundImage: {
        'banner-2': "url('https://naturals.in/home_page_banner/ban2.jpg')",
        'banner-m-2': "url('https://naturals.in/home_page_banner/mobile/ban2.jpg')",
        'bridal-texture': "url('https://naturals.in/assets/bridal_img_bg.jpg')",
        'bridal-m-texture': "url('https://naturals.in/assets/mobile/bridal_img_bg.jpg')",
      },
      colors: {
        'primary': '#6d0000',
      },
      dropShadow: {
        'white-glow': '1px 1px 10px #fff',
      },
    },
  },
  plugins: [addVariablesForColors],
};


// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}