import styled from "@emotion/styled"
import anime from "animejs/lib/anime.es.js"
import React, { Children, useEffect, useRef, useState } from "react"
import { useDrag } from "react-use-gesture"
import { layout } from "styled-system"
import useWindowSizeContext from "../../providers/window-size-provider/useWindowSizeContext"

const initialWidth = 10000

const Ul = styled("ul")`
  ${layout}
  --skew-amount: 0deg;
  --dragging: 0;
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const Carousel = ({ children, spacing = 20 }) => {
  const [carouselWidth, setWidth] = useState(initialWidth)
  const ref = useRef()
  const animeInstance = useRef(null)
  const windowSize = useWindowSizeContext()

  const bind = useDrag(
    ({ offset: [x], down, vxvy: [vx] }) => {
      if (!down) {
        ref.current.style.setProperty("--dragging", 0)
      }

      animeInstance.current = anime({
        targets: ref.current,
        translateX: x,
        duration: 1000,
        easing: "easeOutQuad",
        begin: function (anim) {
          ref.current.style.setProperty("--dragging", 1)
        },
        complete: function (anim) {
          anime.running.length === 1 &&
            ref.current.style.setProperty("--dragging", 0)
        },
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
      <Ul data-draggable {...bind()} ref={ref} width={`${carouselWidth}px`}>
        {children}
      </Ul>
    </div>
  )
}

export default Carousel
