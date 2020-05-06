const colors = {
  primary: "#E4D5B6",
  secondary: "#555555",
  subtle: "#FAF3DD",
  dark: "#222222",
}

const space = [0, 4, 8, 16, 24, 32, 40, 48, 64, 80]

const breakpoints = ["544px", "769px", "1440px", "1920px"]

// aliases
breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]

const fonts = {
  heading: "Messapia-bold",
  copy: "Porpora",
}

const fontSizes = ["2rem", "3rem", "3.2rem", "3.9rem", "5rem", "6.4rem"]
fontSizes.xs = fontSizes[0]
fontSizes.sm = fontSizes[1]
fontSizes.md = fontSizes[2]
fontSizes.lg = fontSizes[3]
fontSizes.xl = fontSizes[4]
fontSizes.xxl = fontSizes[5]

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
  },
}

const layout = {
  headerHeight: space[8],
  iosBottomBarHeight: 75,
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
