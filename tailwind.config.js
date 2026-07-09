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
        "dots-pattern": "url('/assets/images/dots.png')",
        "ground-lines": "url('/assets/images/lines.svg')",
      },
      colors: {
        majica: {
          primary: "rgba(240, 134, 118, 1)", // Color oscuro del logo
          secondary: "#38B6B0", // Color turquesa/aqua del logo
          coral: "#E8927C", // Color coral/salmón de los elementos decorativos
          "coral-light": "rgba(240, 134, 118, 0.3)", // Fondo coral claro
          dark: "#28283D",
          text: {
            primary: "#28283D",
            secondary: "#2BB4AC", // Color texto secundario
            light: "#667085", // Color texto gris
            paragraph: "#757095", // Color texto párrafo
          },
        },
        // Tokens semánticos del rediseño 2.0
        brand: {
          coral: "#F08676", // primario: CTAs, énfasis display
          "coral-ink": "#C9503C", // coral accesible para texto sobre claro (AA)
          "coral-soft": "#FCEAE5", // superficie coral tenue
          teal: "#2BB4AC", // secundario: categorías, links, datos
          "teal-ink": "#177E78", // turquesa accesible para texto sobre claro (AA)
          "teal-soft": "#E2F4F3", // superficie turquesa tenue
          ink: "#28283D", // texto principal, hero, footer
          "ink-soft": "#585874", // texto secundario sobre claro
          paper: "#FBF6F2", // fondo general cálido
          line: "#EBE1DA", // bordes y divisores
          "on-ink": "#F5EFEA", // texto sobre fondos tinta
          "on-ink-soft": "#B9B4CE", // texto secundario sobre tinta
          whatsapp: "#25D366",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "glow-pulse": {
          "0%, 100%": { transform: "scale(1)", opacity: "0.85" },
          "50%": { transform: "scale(1.15)", opacity: "1" },
        },
      },
      animation: {
        marquee: "marquee 36s linear infinite",
        "marquee-slow": "marquee 60s linear infinite",
        "fade-up": "fade-up .5s ease-out both",
        float: "float 7s ease-in-out infinite",
        "float-delayed": "float 8.5s ease-in-out 1.2s infinite",
        "glow-pulse": "glow-pulse 9s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
