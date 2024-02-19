/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      full: "1000px",
      laptop: "750px",
      tablet: "490px",
    },
    extend: {
      colors: {
        mainBg: "#100216",
        navbar: "#25162c",
        lightBlue: "#54c8fa",
        hoverBtn: "#c0e0f3",
        cardBorder: "#5b3ff8",
        subText: "#afafaf",
      },
      fontFamily: {
        github: ["Courier New", "Courier", "monospace"],
      },
      transitionProperty: {
        dimensions: "width, height, scale",
      },
      boxShadow: {
        pp: "0 0 100px rgba(89, 216, 255, 0.541)",
      },
      backgroundSize: {
        custom: "25em",
      },
    },
  },
  plugins: [],
};
