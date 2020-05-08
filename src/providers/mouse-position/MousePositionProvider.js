import React, { useEffect, useState } from "react"

const MousePositionContext = React.createContext()

function useMousePosition() {
  const [mousePosition, setMousePosition] = useState([-60, -60])

  const handleMousePosition = e => setMousePosition([e.clientX, e.clientY])

  useEffect(
    () => {
      window.addEventListener("mousemove", handleMousePosition)

      return () => {
        window.removeEventListener("mousemove", handleMousePosition)
      }
    },
    [] // Recall only if ref changes
  )

  return mousePosition
}

export default ({ children }) => {
  const mousePosition = useMousePosition()

  return (
    <MousePositionContext.Provider value={mousePosition}>
      {children}
    </MousePositionContext.Provider>
  )
}

export { MousePositionContext }
