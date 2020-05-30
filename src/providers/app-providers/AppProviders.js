import { ThemeProvider } from "emotion-theming"
import React from "react"
import theme from "../../theme"
import DraggableAreaProvider from "../draggable-area-provider/DraggableAreaProvider"
import MousePositionProvider from "../mouse-position/MousePositionProvider"
import ScrollProvider from "../scroll-provider/ScrollProvider"
import UserAgentProvider from "../user-agent/UserAgentProvider"
import WindowSizeProvider from "../window-size-provider/WindowSizeProvider"

const AppProviders = ({ children }) => (
  <UserAgentProvider>
    <ScrollProvider>
      <MousePositionProvider>
        <WindowSizeProvider>
          <DraggableAreaProvider>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
          </DraggableAreaProvider>
        </WindowSizeProvider>
      </MousePositionProvider>
    </ScrollProvider>
  </UserAgentProvider>
)
export default AppProviders
