import styled from "@emotion/styled"
import React, { useCallback, useState } from "react"
import { color, layout, space } from "styled-system"
import Box from "../../components/box"
import useEventListener from "../../hooks/useEventListener"
import theme from "../../theme"
import GridDebugger from "../grid-debugger"

const ContentBase = styled("div")`
  ${layout}
  ${space}
  ${color}
`

const Content = props => {
  const [showDebugger, setShowDebugger] = useState(false)

  const handler = useCallback(
    event => {
      // Update coordinates
      if (event.ctrlKey && event.key === "l") {
        setShowDebugger(!showDebugger)
      }
    },
    [setShowDebugger, showDebugger]
  )

  useEventListener("keydown", handler)

  return (
    <>
      {showDebugger && (
        <GridDebugger
          show
          maxWidth={theme.maxContentWidth}
          theme={theme}
          numCols={{ 320: 6, 769: 12 }}
          gutter={{ 320: "24px" }}
          margin={{ 320: "32px", 769: "48px" }}
        />
      )}
      <ContentBase
        mx="auto"
        px={[5, 5, 7]}
        maxWidth={theme.maxContentWidth}
        minWidth={theme.minContentWidth}
        {...props}
      />
    </>
  )
}

export default Content
