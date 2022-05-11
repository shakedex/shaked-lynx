const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: {
    content: [
      "./layouts/**/*.html",
      "./content/**/*.{html,md}",
      "./themes/lynx/layouts/**/*.html",
      "./themes/lynx/content/**/*.{html,md}",
    ],
  },
  darkMode: "class",
  theme: {
    colors: {
      white: "#fff",
      neutral: colors.gray,
      primary: colors.purple,
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: [
            {
              color: theme("colors.neutral.700"),
              a: {
                color: theme("colors.primary.700"),
                textDecoration: "underline",
                textDecorationColor: theme("colors.primary.300"),
                fontWeight: "500",
                "&:hover": {
                  backgroundColor: theme("colors.primary.600"),
                  borderRadius: "0.09rem",
                  color: theme("colors.white"),
                  textDecoration: "none",
                },
              },
              strong: {
                color: theme("colors.neutral.900"),
              },
              "ol > li::before": {
                color: theme("colors.neutral.800"),
              },
              "ul > li::before": {
                backgroundColor: theme("colors.neutral.500"),
              },
              hr: {
                borderColor: theme("colors.neutral.200"),
              },
              blockquote: {
                color: theme("colors.neutral.800"),
                borderLeftColor: theme("colors.primary.200"),
              },
              h1: {
                color: theme("colors.neutral.800"),
                position: "relative",
              },
              h2: {
                color: theme("colors.neutral.800"),
                position: "relative",
              },
              h3: {
                color: theme("colors.neutral.800"),
                position: "relative",
              },
              h4: {
                color: theme("colors.neutral.800"),
                position: "relative",
              },
              code: {
                color: theme("colors.primary.800"),
              },
              "pre code": {
                color: theme("colors.neutral.700"),
              },
              pre: {
                color: theme("colors.neutral.700"),
                backgroundColor: theme("colors.neutral.50"),
              },
              "pre code": {
                color: theme("colors.neutral.700"),
              },
              thead: {
                color: theme("colors.neutral.800"),
                borderBottomColor: theme("colors.neutral.500"),
              },
              "tbody tr": {
                borderBottomColor: theme("colors.neutral.300"),
              },
              kbd: {
                backgroundColor: theme("colors.neutral.200"),
                padding: "0.1rem 0.4rem",
                borderRadius: "0.25rem",
                fontSize: "0.9rem",
                fontWeight: "600",
              },
              mark: {
                backgroundColor: theme("colors.primary.200"),
                padding: "0.1rem 0.2rem",
                borderRadius: "0.12rem",
              },
            },
          ],
        },
        light: {
          css: [
            {
              color: theme("colors.neutral.700"),
              a: {
                color: theme("colors.primary.700"),
                textDecoration: "underline",
                textDecorationColor: theme("colors.primary.300"),
                fontWeight: "500",
                "&:hover": {
                  backgroundColor: theme("colors.primary.600"),
                  borderRadius: "0.09rem",
                  color: theme("colors.white"),
                  textDecoration: "none",
                },
              },
              strong: {
                color: theme("colors.neutral.900"),
              },
              "ol > li::before": {
                color: theme("colors.neutral.800"),
              },
              "ul > li::before": {
                backgroundColor: theme("colors.neutral.500"),
              },
              hr: {
                borderColor: theme("colors.neutral.200"),
              },
              blockquote: {
                color: theme("colors.neutral.800"),
                borderLeftColor: theme("colors.primary.200"),
              },
              h1: {
                color: theme("colors.neutral.800"),
                position: "relative",
              },
              h2: {
                color: theme("colors.neutral.800"),
                position: "relative",
              },
              h3: {
                color: theme("colors.neutral.800"),
                position: "relative",
              },
              h4: {
                color: theme("colors.neutral.800"),
                position: "relative",
              },
              code: {
                color: theme("colors.primary.800"),
              },
              "pre code": {
                color: theme("colors.neutral.700"),
              },
              pre: {
                color: theme("colors.neutral.700"),
                backgroundColor: theme("colors.neutral.50"),
              },
              "pre code": {
                color: theme("colors.neutral.700"),
              },
              thead: {
                color: theme("colors.neutral.800"),
                borderBottomColor: theme("colors.neutral.500"),
              },
              "tbody tr": {
                borderBottomColor: theme("colors.neutral.300"),
              },
              kbd: {
                backgroundColor: theme("colors.neutral.200"),
                padding: "0.1rem 0.4rem",
                borderRadius: "0.25rem",
                fontSize: "0.9rem",
                fontWeight: "600",
              },
              mark: {
                backgroundColor: theme("colors.primary.200"),
                padding: "0.1rem 0.2rem",
                borderRadius: "0.12rem",
              },
            },
          ],
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ["dark"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};