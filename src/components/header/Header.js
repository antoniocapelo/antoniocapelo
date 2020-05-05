import styled from "@emotion/styled"
import { navigate } from "@reach/router"
import React from "react"
import { color, space, typography } from "styled-system"
import theme from "../../theme"

const Wrapper = styled("header")`
  ${typography}
  ${space}
  ${color}
  min-height: 108px;
  display: flex;
  justify-content: flex-end;
`

const items = [
  {
    path: "#about",
    label: "About",
  },
  {
    path: "#experience",
    label: "Experience",
  },
  {
    path: "#other-projects",
    label: "Other Projects",
  },
  {
    path: "#contact",
    label: "Contact",
  },
]

const Link = styled("a")`
  ${typography}
  ${color}
  text-decoration: none;
  display: flex;
  position: relative;

  &:hover:before {
    transform: ${props => (props.active ? "scaleX(0.24)" : "scaleX(0.16)")};
  }

  &:before {
    will-change: transform;
    transform: ${props => (props.active ? "scaleX(0.24)" : "scaleX(0)")};
    transition: transform ${theme.transitions.durations.fast}ms
      ${theme.transitions.easings.inOut};
    transform-origin: left;
    display: block;
    content: "";
    position: absolute;
    width: 100px;
    height: 3px;
    background: ${theme.colors.primary};
    bottom: -7px;
    left: 0;
  }
`

const Links = styled("div")`
  display: flex;
  width: 100%;
  max-width: 800px;
  justify-content: space-around;
  align-items: center;
`

const Header = ({ secondary = false, current, onClick, ...props }) => (
  <Wrapper bg="dark">
    <Links>
      {items.map(({ label, path }) => (
        <Link
          active={path === current}
          onClick={() => {
            navigate(path)
            onClick && onClick(path)
          }}
          fontSize="2.4rem"
          color="primary"
          href={path}
        >
          {label}
        </Link>
      ))}
    </Links>
  </Wrapper>
)

export default Header
