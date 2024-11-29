/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/assets/images/foto-banner.png')",
        "dots-pattern": "url('/assets/images/dots.png')",
        lines: "url('/assets/images/bg-lines.svg')",
        "hero-banner": "url('/assets/images/hero-banner.png')",
      },
      colors: {
        majica: {
          primary: "rgba(240, 134, 118, 1)", // Color oscuro del logo
          secondary: "#38B6B0", // Color turquesa/aqua del logo
          coral: "#E8927C", // Color coral/salmón de los elementos decorativos
          "coral-light": "rgba(240, 134, 118, 0.3)", // Fondo coral claro
          text: {
            primary: "#28283D",
            secondary: "#2BB4AC", // Color texto secundario
            light: "#667085", // Color texto gris
          },
          landing: {
            hero: "url('/images/hero.jpg')",
          },
        },
      },
    },
  },
  plugins: [],
};
