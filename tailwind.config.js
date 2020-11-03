module.exports = {
  plugins: [
    require('tailwindcss-filters'),
  ],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    layers: ["utilities"],
    content: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
    options: {
      defaultExtractor: (content) => content.match(/[\w-/:%]+(?<!:)/g) || [],
      safelist: [/hooper/, /ais-$/],
    },
  },
  prefix: "",
  important: false,
  separator: ":",
  theme: {
    screens: {
      xxs: "360px",
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontSize: {
      sm: "0.625rem",
      xs: "0.703125rem",
      code: '0.9rem',
      base: "1rem",
      lg: "1.125rem",
      xl: "1.6rem",
      "2xl": "1.8rem",
    },
    opacity: {
      "0": "0",
      "10": "0.1",
      "20": "0.2",
      "30": "0.3",
      "40": "0.4",
      "50": "0.5",
      "60": "0.6",
      "70": "0.7",
      "80": "0.8",
      "90": "0.9",
      "100": "1",
    },
    fontFamily: {
      body: ['"Jost", sans-serif'],
      monospace: [
        "SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace",
      ],
    },
    filter: { 
      'none': 'none',
      'grayscale': 'grayscale(1)',
      'invert': 'invert(1)',
      'sepia': 'sepia(1)',
    },
    backdropFilter: {
      'none': 'none',
      'blur': 'blur(20px)',
    },
  },
  variants: {
    filter: ['responsive'], // defaults to ['responsive']
    backdropFilter: ['responsive'], // defaults to ['responsive']
  },
}
