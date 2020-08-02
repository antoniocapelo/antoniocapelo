import styled from "@emotion/styled"
import React from "react"
import { a } from "react-spring"
import { color, space, typography } from "styled-system"
import theme from "../../../theme"

const css = `
  font-family: ${theme.fonts.copy};
  transform: translateY(${0.11}em);

  > span {
      color: ${theme.colors.secondary}
  }

  &:before {
    content: "";
    margin-top: -${0.09}em;
    display: block;
    height: 0;
  }
`

const CopyBase = styled("p")`
  ${typography}
  ${space}
  ${color}
  ${css}
`

const Copy = ({ secondary = false, light = false, ...props }) => (
  <CopyBase
    lineHeight="1.3"
    fontSize={["xxs", "xs", "sm"]}
    color={secondary ? "secondary" : light ? "primary" : "dark"}
    {...props}
  />
)

const ACopyBase = styled(a.p)`
  ${typography}
  ${space}
  ${color}
  ${css}
`

export const ACopy = ({ secondary = false, light = false, ...props }) => (
  <ACopyBase
    fontSize={["xxs", "xs", "sm"]}
    color={secondary ? "secondary" : light ? "primary" : "dark"}
    {...props}
  />
)

export default Copy
