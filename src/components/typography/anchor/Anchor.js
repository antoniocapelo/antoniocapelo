import styled from "@emotion/styled"
import React from "react"
import { color, space, typography } from "styled-system"
import theme from "../../../theme"

const css = `
  font-family: ${theme.fonts.copy};
  transform: translateY(${0.11}em);
  line-height: 1.3;
  position: relative;

  text-decoration: none;

  &:hover,
  &:focus,
  &:active {
    text-decoration: none;

    &:after {
      transform: scale3d(0.8, 1,1);
    }
  }

  &:after {
    will-change: transform;
    position: absolute;
    bottom: -5px;
    content: "";
    display: block;
    width: 100%;
    border-bottom: 2px solid ${theme.colors.primary};
    transition: transform ${theme.transitions.durations.fast}ms ${
  theme.transitions.easings.out
};
  }

  &:before {
    content: "";
    margin-top: -${0.09}em;
    display: block;
    height: 0;
  }
`

const AnchorBase = styled("a")`
  ${typography}
  ${space}
  ${color}
  ${css}
`

const Anchor = ({ secondary = false, light = false, ...props }) => (
  <AnchorBase
    fontSize={["xxs", "xs", "sm"]}
    color={secondary ? "secondary" : light ? "primary" : "dark"}
    {...props}
  />
)

export default Anchor
