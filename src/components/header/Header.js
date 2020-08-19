import styled from "@emotion/styled"
import React from "react"
import { animated, config, useSpring } from "react-spring"
import { color, layout, space, typography } from "styled-system"
import Content from "../../layout/content"
import useLoadProgress from "../../providers/load-progress/useLoadProgress"
import theme from "../../theme"

const Wrapper = animated(styled("header")`
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
`)

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
    path: "#projects",
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
    height: 2px;
    background: ${theme.colors.primary};
    bottom: -5px;
    left: 0;
  }
`

const Links = styled("div")`
  display: flex;
  width: 90%;
  max-width: 768px;
  justify-content: space-between;
  align-items: center;
`

const Header = ({ onClick }) => {
  const { loaderReady } = useLoadProgress()
  const props = useSpring({
    opacity: loaderReady ? 1 : 0,
    transform: loaderReady ? "translateY(0)" : "translateY(-8px)",
    delay: 1000,
    config: config.gentle,
    from: {
      opacity: 0,
      transform: "translateY(-8px)",
    },
  })

  return (
    <Wrapper bg="dark" display={["none", "none", "flex"]} style={props}>
      <Content width="100%" justifyContent="flex-end" display="flex">
        <Links>
          {items.map(({ label, path }) => (
            <Link
              key={path}
              onClick={() => {
                const el = document.querySelector(path)
                window.ls.scrollTo(el)

                onClick && onClick(path)
              }}
              fontSize="1.8rem"
              color="primary"
              fontFamily="Messapia-bold"
            >
              {label}
            </Link>
          ))}
        </Links>
      </Content>
    </Wrapper>
  )
}

export default Header
