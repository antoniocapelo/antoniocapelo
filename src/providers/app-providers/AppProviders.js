import React from "react"
import { ThemeProvider } from "emotion-theming"
import DraggableAreaProvider from "../draggable-area-provider/DraggableAreaProvider"
import MousePositionProvider from "../mouse-position/MousePositionProvider"
import UserAgentProvider from "../user-agent/UserAgentProvider"
import theme from "../../theme"

export default ({ children }) => (
  <UserAgentProvider>
    <MousePositionProvider>
      <DraggableAreaProvider>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </DraggableAreaProvider>
    </MousePositionProvider>
  </UserAgentProvider>
)
