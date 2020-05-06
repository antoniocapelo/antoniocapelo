import styled from "@emotion/styled"
import { navigate } from "@reach/router"
import React from "react"
import { color, space, typography, layout } from "styled-system"
import theme from "../../theme"

const Wrapper = styled("header")`
  ${layout}
  ${space}
  ${color}
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  min-height: ${theme.layout.headerHeight}px;
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

  &:focus:before,
  &:hover:before {
    transform: scaleX(0.24);
  }

  &:before {
    will-change: transform;
    transform: scaleX(0);
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
  width: 80%;
  max-width: 800px;
  justify-content: space-around;
  align-items: center;
`

const Header = ({ secondary = false, current, onClick, ...props }) => {
  return (
    <Wrapper bg="dark" display={["none", "none", "flex"]}>
      <Links>
        {items.map(({ label, path }) => (
          <Link
            key={path}
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
}

export default Header
