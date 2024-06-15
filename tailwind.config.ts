import type { Config } from "tailwindcss";

const mainSizes = {
  "main-1": "69px",
  "main-2": "168px",
  "main-3": "267px",
  "main-4": "367px",
  "main-5": "466px",
  "main-6": "565px",
  "main-7": "664px",
  "main-8": "763px",
  "main-9": "863px",
  "main-10": "962px",
  "main-11": "1061px",
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: mainSizes,
      minWidth: mainSizes,
      maxWidth: mainSizes,
      fontFamily: {
        inter: ["var(--font-inter)", "Inter", "sans-serif"],
        "ibm-plex-serif": [
          "var(--font-ibm_plex_serif)",
          "IBM Plex Serif",
          "serif",
        ],
        "source-code-pro": [
          "var(--font-source_code_pro)",
          "Source Code Pro",
          "monospace",
        ],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require("tailwindcss/plugin")(({ matchUtilities }: any) => {
      matchUtilities({
        x: (value: string) => ({
          [`@apply ${value.replaceAll(",", " ")}`]: {},
        }),
      });
    }),
  ],
};
export default config;
