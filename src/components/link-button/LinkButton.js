import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { typography } from "styled-system"
import theme from "../../theme"

const buttonStyle = ({ theme, selected }) => css`
  display: block;
  border: none;
  padding: 0;
  background: transparent;
  margin-bottom: ${theme.space[4]}px;
  max-width: 460px;
  text-align: left;
  font-size: clamp(${theme.fontSizes.sm}, 4vw, ${theme.fontSizes.xl});

  &:last-of-type {
    margin-bottom: 0;
  }

  span {
    position: relative;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: ${theme.colors.primary};
    font-family: ${theme.fonts.heading};
    color: ${selected ? theme.colors.primary : "transparent"};
    transition: color ${theme.transitions.durations.normal}ms
      ${theme.transitions.easings.out};

    &:after {
      content: "";
      position: absolute;
      display: block;
      height: 4px;
      width: ${theme.space[4]}px;
      bottom: 0.45em;
      right: -${theme.space[5]}px;
      background: ${theme.colors.primary};
      transform-origin: left center;
      transform: scale3d(${selected ? "1" : "0"}, 1, 1);
      transition: transform ${theme.transitions.durations.fast}ms
        ${theme.transitions.easings.out};
    }
  }

  &:focus,
  &:hover {
    span {
      color: ${theme.colors.primary};
    }
  }

  &:focus,
  &:active {
    outline: none;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    margin-bottom: ${theme.space[2]}px;
    span:after {
      display: none;
    }
  }
`
export const Button = styled("button")`
  ${typography};
  ${buttonStyle};
  display: block;
  @media (max-width: ${theme.breakpoints.sm}) {
    display: none;
    text-align: ${props => props.align};
  }
`
export const Link = styled("a")`
  ${typography};
  ${buttonStyle};
  text-decoration: none;
  display: ${props => (props.allViewports ? "block" : "none")};
  @media (max-width: ${theme.breakpoints.sm}) {
    text-align: ${props => props.align};
    display: block;
  }
`
