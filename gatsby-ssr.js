/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import { ThemeProvider } from "emotion-theming"
import React from "react"
import UserAgentProvider from "./src/providers/user-agent/UserAgentProvider"
import theme from "./src/theme"
import MousePositionProvider from "./src/providers/mouse-position/MousePositionProvider"

export const wrapRootElement = ({ element }) => (
  <UserAgentProvider>
    <MousePositionProvider>
      <ThemeProvider theme={theme}>{element}</ThemeProvider>
    </MousePositionProvider>
  </UserAgentProvider>
)
