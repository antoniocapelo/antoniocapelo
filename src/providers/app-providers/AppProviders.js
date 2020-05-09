import React from "react"
import { ThemeProvider } from "emotion-theming"
import DraggableAreaProvider from "../draggable-area-provider/DraggableAreaProvider"
import MousePositionProvider from "../mouse-position/MousePositionProvider"
import UserAgentProvider from "../user-agent/UserAgentProvider"
import theme from "../../theme"
import WindowSizeProvider from "../window-size-provider/WindowSizeProvider"

export default ({ children }) => (
  <UserAgentProvider>
    <MousePositionProvider>
      <WindowSizeProvider>
        <DraggableAreaProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </DraggableAreaProvider>
      </WindowSizeProvider>
    </MousePositionProvider>
  </UserAgentProvider>
)
