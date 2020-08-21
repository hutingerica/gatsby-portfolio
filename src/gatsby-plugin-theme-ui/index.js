import novelaTheme from '@narative/gatsby-theme-novela/src/gatsby-plugin-theme-ui';

export default {
  ...novelaTheme,
  colors: {
    ...novelaTheme.colors,
    primary: '#1e96fc',
    secondary: '#1e96fc',
    accent: '#a2d6f9',
    grey: '#73737D',
    background: '#ffffff',
    hover: "rgba(254, 228, 64, .8)",
    gradient: "linear-gradient(180deg, rgba(217, 219, 224, 0) 0%, #ffffff 100%)",
    modes: {
        dark: {
            background: "#222639",
            primary: "#f0f5fa",
            secondary: "#f0f5fa",
            accent: "#ee99ff",
            gradient:
        "linear-gradient(180deg, #222639 0%, rgba(66, 81, 98, 0.36) 100%)",
            articleText: "#f0f5fa",
            progress: "#f0f5fa",
    },
    },
  },
};