import styled from "@emotion/styled"
import React from "react"
import { color, layout, space, flexbox } from "styled-system"
import theme from "../../theme"
import useUserAgent from "../../providers/user-agent/useUserAgent"

const ContentBase = styled("section")`
  ${layout}
  ${space}
  ${flexbox}
  ${color}
  display: flex;
  box-sizing: border-box;
    min-height: ${({ isIos, fullHeight }) =>
      fullHeight ? (isIos ? "calc(100vh - 75px)" : "100vh") : "0px"};
`

const Content = ({ fullHeight, ...props }) => {
  const { isIos } = useUserAgent()

  return (
    <ContentBase
      fullHeight={fullHeight}
      isIos={isIos}
      mx="auto"
      px={[5, 5, 7]}
      maxWidth={theme.maxContentWidth}
      minWidth={theme.minContentWidth}
      {...props}
    />
  )
}

export default Content
