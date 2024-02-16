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
        navbar: "#25162c"
      },
    },
  },
  plugins: [],
};
