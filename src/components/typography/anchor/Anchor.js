import styled from "@emotion/styled"
import React from "react"
import { color, space, typography } from "styled-system"
import theme from "../../../theme"

const css = `
  font-family: ${theme.fonts.copy};
  transform: translateY(${0.11}em);
  line-height: 1.3;

  text-decoration: none;

  &:hover,
  &:focus,
  &:active {
    text-decoration: none;

    > span:after {
      transform: scale3d(0.8, 1,1);
    }
  }

  > span {
    position: relative;
  }

  > span:after {
    will-change: transform;
    position: absolute;
    bottom: -3px;
    content: "";
    display: block;
    width: 100%;
    border-bottom: 2px solid currentColor;
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

  @media (max-width: ${theme.breakpoints.sm}) {
    > span:after {
      bottom: -2px;
      border-bottom: 1px solid currentColor;
    }
  }
`

const AnchorBase = styled("a")`
  ${typography}
  ${space}
  ${color}
  ${css}
`

const Anchor = ({ secondary = false, light = false, children, ...props }) => (
  <AnchorBase
    fontSize={["xxs", "xs", "sm"]}
    color={secondary ? "secondary" : light ? "primary" : "dark"}
    rel="noopener noreferrer"
    {...props}
  >
    <span>{children}</span>
  </AnchorBase>
)

export default Anchor
