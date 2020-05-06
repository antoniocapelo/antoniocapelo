import styled from "@emotion/styled"
import React, { useEffect } from "react"
import theme from "../../theme"
import useMousePositionContext from "../../providers/mouse-position/useMousePositionContext"

const Svg = styled("svg")`
  position: fixed;
  mix-blend-mode: difference;
  transform: translate(-50%, -50%) scale(0.8);
  z-index: 60;
  pointer-events: none;
  transition: transform ${theme.transitions.durations.fast}ms
    ${theme.transitions.easings.inOut};

  circle,
  path {
    stroke: ${theme.colors.primary};
  }

  path {
    opacity: 0;
  }

  body.hover & {
    transform: translate(-50%, -50%) scale(1.1);
  }
  body.hover.mousedown & {
    transform: translate(-50%, -50%) scale(0.8);
  }
  body.mousedown & {
    transform: translate(-50%, -50%) scale(0.6);
  }
`

const CursorSvg = ({ style }) => (
  <Svg
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
        cx="32"
        cy="20"
        r="19"
        stroke="#222222"
        strokeWidth="2"
      />
      <g id="arrows">
        <path
          id="arrow-left"
          d="M9.25 26.7544L0.800752 20L9.25 13.2456V26.7544Z"
          stroke="#222222"
        />
        <path
          id="arrow-right"
          d="M54.75 26.7544L63.1992 20L54.75 13.2456V26.7544Z"
          stroke="#222222"
        />
      </g>
    </g>
  </Svg>
)

const Cursor = () => {
  const [x, y] = useMousePositionContext()

  useEffect(() => {
    const body = document.body
    const handleClick = () => {
      body.classList.add("mousedown")
    }
    const handleMouseOut = () => {
      body.classList.remove("mousedown")
    }

    body.addEventListener("mousedown", handleClick)
    body.addEventListener("mouseup", handleMouseOut)

    return () => {
      body.removeEventListener("mousedown", handleClick)
      body.removeEventListener("mouseup", handleMouseOut)
    }
  }, [])

  return (
    <CursorSvg
      style={{
        left: `${x}px`,
        top: `${y}px`,
      }}
    />
  )
}

export default Cursor
