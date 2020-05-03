
const colors = {
  primary: "#E4D5B6",
  secondary: "#555555",
  subtle: "#FAF3DD",
  dark: "#222222",
}

const space = [0, 4, 8, 16, 24, 32, 40, 48, 64, 80];

const breakpoints = ['544px', '768px', '1440px', '1920px']

// aliases
breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]


const theme = {
  colors,
  space,
  breakpoints
}

export default theme;
