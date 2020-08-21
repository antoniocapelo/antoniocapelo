import styled from "@emotion/styled"
import React, { useEffect, useState } from "react"
import useLoadProgress from "../../providers/load-progress/useLoadProgress"
import useMousePositionContext from "../../providers/mouse-position/useMousePositionContext"
import theme from "../../theme"

export function HandleMouseOver() {
  useEffect(() => {
    const body = document.body
    const handleMouseIn = e => {
      if (e.target.tagName === "A" || e.target.tagName === "BUTTON") {
        body.classList.add(cursorClassnames.hover)
      }

      if (e.target.dataset.draggable) {
        body.classList.add(cursorClassnames.drag)
      }
    }
    const handleMouseOut = e => {
      if (e.target.tagName === "A" || e.target.tagName === "BUTTON") {
        body.classList.remove(cursorClassnames.hover)
      }
      if (e.target.dataset.draggable) {
        body.classList.remove(cursorClassnames.drag)
      }
    }

    document.body.addEventListener("mouseenter", handleMouseIn, true)
    document.body.addEventListener("mouseleave", handleMouseOut, true)

    return () => {
      document.body.removeEventListener("mouseenter", handleMouseIn, true)
      document.body.removeEventListener("mouseleave", handleMouseOut, true)
    }
  }, [])
}

export const cursorClassnames = {
  mouseDown: "mousedown",
  mouseDownDone: "mousedown-done",
  hover: "hover",
  drag: "drag",
}

function HandleMouseClick() {
  const eventNames = [
    "transitionend",
    "webkitTransitionEnd",
    "oTransitionEnd",
    "otransitionend",
    "MSTransitionEnd",
  ]

  useEffect(() => {
    const mouseDownHandler = () => {
      if (body.classList.contains(cursorClassnames.mouseDown)) {
        body.classList.add(cursorClassnames.mouseDownDone)
      }
    }
    eventNames.forEach(eventName =>
      window.addEventListener(eventName, mouseDownHandler)
    )
    const body = document.body
    const handleMouseDown = () => {
      body.classList.add(cursorClassnames.mouseDown)
    }
    const handleMouseUp = () => {
      if (body.classList.contains(cursorClassnames.mouseDownDone)) {
        body.classList.remove(
          cursorClassnames.mouseDown,
          cursorClassnames.mouseDownDone
        )
      } else {
        requestAnimationFrame(handleMouseUp)
      }
    }
    body.addEventListener("mousedown", handleMouseDown)
    body.addEventListener("mouseup", handleMouseUp)
    return () => {
      body.removeEventListener("mousedown", handleMouseDown)
      body.removeEventListener("mouseup", handleMouseUp)
    }
  }, [])
}

const Svg = styled("svg")`
  --arrow-movement: 4px;
  position: fixed;
  mix-blend-mode: difference;
  transform: translate(-41%, -25%);
  z-index: 60;
  overflow: visible;
  pointer-events: none;
  transition: transform ${theme.transitions.durations.fast}ms path {
    stroke: ${theme.colors.primary};
    will-change: opacity, transform;
    transition: opacity ${theme.transitions.durations.normal}ms
        ${theme.transitions.easings.inOut},
      transform ${theme.transitions.durations.normal}ms
        ${theme.transitions.easings.inOut};
  }

  circle {
    transform-origin: center;
    will-change: stroke-dashoffset, transform;
    stroke: ${theme.colors.primary};
    transition: transform ${theme.transitions.durations.fast}ms
        ${theme.transitions.easings.out},
      stroke-dashoffset ${theme.transitions.durations.long * 2}ms
        ${theme.transitions.easings.out} ${theme.transitions.durations.normal}ms;
    stroke-dasharray: 100;
    stroke-dashoffset: ${props => (props.mounted ? 0 : 100)};
  }

  path {
    opacity: 0;
    will-change: opacity, transform;
    transform: translateX(var(--arrow-movement));
  }

  path:nth-of-type(2) {
    transform: translateX(calc(-1 * var(--arrow-movement)));
  }

  body.drag & {
    path {
      opacity: 1;
      transform: translateX(0px);
    }
  }

  body.hover & {
    circle {
      transform: scale3d(1.2, 1.2, 1);
    }
    path {
      opacity: 0;
      transform: translateX(var(--arrow-movement));
    }
    path:nth-of-type(2) {
      transform: translateX(calc(-1 * var(--arrow-movement)));
    }
  }

  body.hover.mousedown & {
    circle {
      transform: scale3d(0.9, 0.9, 1);
    }
  }

  body.mousedown & {
    circle {
      transform: scale3d(0.7, 0.7, 1);
    }
  }

  body.drag.mousedown & {
    circle {
      transform: scale(1);
    }
    path {
      transform: translateX(calc(-1 * var(--arrow-movement)));
    }
    path:nth-of-type(2) {
      transform: translateX(var(--arrow-movement));
    }
  }
`

const CursorSvg = ({ style, mounted }) => (
  <Svg
    mounted={mounted}
    id="cursor-container"
    style={style}
    width="64"
    height="40"
    viewBox="0 0 64 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="cursor">
      <circle
        id="main"
        cx="28"
        cy="15"
        r="14"
        stroke="#222222"
        strokeWidth="2"
      />
      <g id="arrows">
        <path
          id="arrow-left"
          d="M9.25 21.7544L0.800752 15L9.25 8.2456V21.7544Z"
          stroke="#222222"
        />
        <path
          id="arrow-right"
          d="M46.75 21.7544L55.1992 15L46.75 8.2456V21.7544Z"
          stroke="#222222"
        />
      </g>
    </g>
  </Svg>
)

const Cursor = () => {
  const { loaderReady } = useLoadProgress()
  const [x, y] = useMousePositionContext()
  const [hasTouch, setHasTouch] = useState(false)
  useEffect(() => {
    function browserSupportsTouchEvents() {
      return (
        "ontouchstart" in window || "onmsgesturechange" in window // works on most browsers
      ) // works on IE10 with some false positives
    }

    setHasTouch(browserSupportsTouchEvents())
  }, [])

  HandleMouseOver()
  HandleMouseClick()

  if (hasTouch) {
    return null
  }

  return (
    <CursorSvg
      mounted={loaderReady && x !== -60}
      style={{
        left: `${x}px`,
        top: `${y}px`,
      }}
    />
  )
}

export default Cursor
