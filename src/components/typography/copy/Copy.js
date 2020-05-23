import styled from "@emotion/styled"
import React from "react"
import { color, space, typography } from "styled-system"
import theme from "../../../theme"

const CopyBase = styled("p")`
  ${typography}
  ${space}
  ${color}
  font-family: ${theme.fonts.copy};
  transform: translateY(${0.11}em);
  &:before {
    content: "";
    margin-top: -${0.09}em;
    display: block;
    height: 0;
  }
`

const Copy = ({ secondary = false, light = false, ...props }) => (
  <CopyBase
    fontSize="sm"
    color={secondary ? "secondary" : light ? "primary" : "dark"}
    {...props}
  />
)

export default Copy
