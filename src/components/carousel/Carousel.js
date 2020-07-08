import styled from "@emotion/styled"
import React, { Children, useEffect, useRef, useState } from "react"
import { animated, useSpring } from "react-spring"
import { useDrag } from "react-use-gesture"
import { layout } from "styled-system"
import useWindowSizeContext from "../../providers/window-size-provider/useWindowSizeContext"
import theme from "../../theme"
import Box from "../box"

const initialWidth = 10000

const StyledProgressBar = styled(animated.div)`
  position: absolute;
  border-radius: 2px;
  height: 4px;
  bottom: 0;
  background: ${theme.colors.secondary};
`
const StyledUl = styled(animated.ul)`
  ${layout}
  --skew-amount: 0deg;
  --dragging: 0;
  display: flex;
  list-style-type: none;
  flex-direction: ${({ rtl }) => (rtl ? "row-reverse" : "row")};
  margin: 0;
  padding: 0;
`
const Ul = animated(StyledUl)

const Li = styled("li")`
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: ${props => props.spacing}px;
  transform: skewX(var(--skew-amount));
  &:first-of-type {
    margin-left: ${({ rtl, spacing }) => (rtl ? spacing : 0)}px;
  }
  &:last-of-type {
    margin-right: ${({ rtl, spacing }) => (rtl ? 0 : spacing)}px;
  }
  & > * {
    transition: transform 0.15s ease;
    transform: scale(calc(1 + 0.3 * var(--dragging)));
  }
`

const Carousel = ({ children, spacing = 24, rtl = false }) => {
  const [carouselWidth, setWidth] = useState(initialWidth)
  const containerWidth = useRef(initialWidth)
  const [style, set] = useSpring(() => ({
    transform: "translate3d(0px,0,0)",
    config: { mass: 1, tension: 90, friction: 14 },
  }))
  const [barStyle, setBarStyle] = useSpring(() => ({
    transform: "translate3d(0px,0,0)",
    config: { mass: 1, tension: 90, friction: 14 },
  }))
  const ref = useRef()
  const windowSize = useWindowSizeContext()

  const getWidthBoundary = () => {
    const w = typeof window !== "undefined" ? window.innerWidth : 1000
    return w > 1440 ? 1440 : w - 2 * 48
  }

  const bind = useDrag(
    ({ offset: [mx] }) => {
      const pb = (mx / carouselWidth) * containerWidth.current

      set({
        transform: `translate3d(${mx}px,0,0)`,
      })

      setBarStyle({
        transform: `translate3d(${-pb}px,0,0)`,
      })
    },
    {
      axis: "x",
      bounds: rtl
        ? {
            right: 1 * (carouselWidth - getWidthBoundary() + 2 * spacing),
            left: 0,
          }
        : {
            left: -1 * (carouselWidth - getWidthBoundary() - 1 * spacing),
            right: 0,
          },
    }
  )

  useEffect(() => {
    if (ref.current) {
      // increasing ul list so that elements don't shrink and we can
      // measure them properly

      ref.current.style.width = `${carouselWidth * 10}px`
      const item = ref.current.querySelector(":scope > *")
      const numberOfItems = Children.count(children)

      setWidth(item.offsetWidth * numberOfItems + spacing * numberOfItems - 1)
      // clearing width
      ref.current.style.width = ""

      containerWidth.current = ref.current.parentElement.getBoundingClientRect().width
    }
  }, [windowSize.width])

  return (
    <Box
      pb="4"
      display="flex"
      justifyContent={rtl ? "flex-end" : "flex-start"}
      maxWidth={theme.maxContentWidth}
      position="relative"
      my="0"
      mx="auto"
      style={{
        overflow: "hidden",
      }}
    >
      <Ul
        rtl={rtl ? true : undefined}
        data-draggable
        {...bind()}
        ref={ref}
        width={`${carouselWidth}px`}
        style={style}
      >
        {Children.map(children, (el, idx) => (
          <Li spacing={spacing} key={idx} rtl={rtl ? true : undefined}>
            {el}
          </Li>
        ))}
      </Ul>
      <StyledProgressBar
        {...bind()}
        style={{
          width: `${(containerWidth.current / carouselWidth) * 100}%`,
          ...barStyle,
        }}
      ></StyledProgressBar>
    </Box>
  )
}

export default Carousel
