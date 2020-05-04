import React from "react"
import styled from "@emotion/styled"
import { typography, space, color } from "styled-system"

const CopyBase = styled('p')`
  ${typography}
  ${space}
  ${color}
  transform: translateY(${0.11}em);
  &:before {
    content: "";
    margin-top: -${0.28}em;
    display: block;
    height: 0;
  }
`

const Copy = ({ secondary = false, ...props }) => (
  <CopyBase color={secondary ? "secondary" : "dark"} {...props} />
)

export default Copy
