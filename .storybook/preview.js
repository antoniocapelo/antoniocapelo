import React from "react"
import { ThemeProvider } from "emotion-theming"
import { addDecorator } from "@storybook/react"
import "../src/components/layout.css"
import theme from "../src/theme"
import UserAgentProvider from "../src/providers/user-agent/UserAgentProvider"

addDecorator(storyFn => (
  <UserAgentProvider>
    <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
  </UserAgentProvider>
))
