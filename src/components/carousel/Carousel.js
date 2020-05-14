import styled from "@emotion/styled"
import { useSpring, animated } from "react-spring"
import React, { Children, useEffect, useRef, useState } from "react"
import { useDrag } from "react-use-gesture"
import { layout } from "styled-system"
import useWindowSizeContext from "../../providers/window-size-provider/useWindowSizeContext"

const initialWidth = 10000

const StyledUl = styled(animated.ul)`
  ${layout}
  --skew-amount: 0deg;
  --dragging: 0;
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const Ul = animated(StyledUl)

const Carousel = ({ children, spacing = 20 }) => {
  const [carouselWidth, setWidth] = useState(initialWidth)
  const [style, set] = useSpring(() => ({
    transform: "translate3d(0px,0,0)",
  }))
  const ref = useRef()
  const windowSize = useWindowSizeContext()

  const bind = useDrag(
    ({ offset: [mx, my] }) => {
      set({
        transform: `translate3d(${mx}px,0,0)`,
      })
    },
    {
      axis: "x",
      bounds: {
        left: -1 * (carouselWidth - window.innerWidth),
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
    }
  }, [windowSize.width])

  return (
    <div style={{ overflow: "hidden" }}>
      <Ul
        data-draggable
        {...bind()}
        ref={ref}
        width={`${carouselWidth}px`}
        style={style}
      >
        {children}
      </Ul>
    </div>
  )
}

export default Carousel
