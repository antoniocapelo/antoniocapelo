const colors = {
  primary: "#E4D5B6",
  secondary: "#555555",
  subtle: "#FAF3DD",
  dark: "#222222",
}

const space = [0, 4, 8, 16, 24, 32, 40, 48, 64, 80, 136]
// index:      0 .1. 2. 3.  4.  5.  6.  7.  8.  9, 10
const breakpoints = ["544px", "769px", "1440px", "1920px"]

// aliases
breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]

const fonts = {
  heading: "Messapia-bold",
  copy: "Messapia-bold",
  // copy: "Porpora",
}

const fontSizes = [
  "1.6rem", // xxs
  "2rem", // xs
  "2.8rem", // sm
  "3.2rem", // md
  "3.9rem", // lg
  "5rem", // xl
  "6.4rem", // xxl
]
fontSizes.xxs = fontSizes[0]
fontSizes.xs = fontSizes[1]
fontSizes.sm = fontSizes[2]
fontSizes.md = fontSizes[3]
fontSizes.lg = fontSizes[4]
fontSizes.xl = fontSizes[5]
fontSizes.xxl = fontSizes[6]

const maxContentWidth = breakpoints.lg
const minContentWidth = "320px"

const transitions = {
  durations: {
    fast: 200,
    normal: 300,
    long: 450,
  },
  easings: {
    inOut: "cubic-bezier(0.65, 0, 0.35, 1)",
    out: "cubic-bezier(0.33, 1, 0.68, 1)",
  },
}

const layout = {
  headerHeight: space[8],
  iosBottomBarHeight: 75,
  grid: {
    margin: ["3.2rem", "4.8rem"],
    numCols: [6, 12],
    gutter: 24,
  },
}

const theme = {
  fonts,
  layout,
  colors,
  space,
  transitions,
  breakpoints,
  fontSizes,
  maxContentWidth,
  minContentWidth,
}

export default theme
