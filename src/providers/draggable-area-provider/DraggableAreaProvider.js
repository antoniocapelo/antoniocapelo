import React, { useEffect, useState } from "react"

const DraggableAreaContext = React.createContext()

const DraggableAreaProvider = ({ children }) => {
  const [isDraggable, setIsDraggable] = useState(false)
  const onAreaEnter = () => setIsDraggable(true)
  const onAreaLeave = () => setIsDraggable(false)

  useEffect(() => {
    const body = document.body
    if (isDraggable) {
      body.classList.add("drag")
    } else {
      body.classList.remove("drag")
    }
  }, [isDraggable])

  return (
    <DraggableAreaContext.Provider value={{ onAreaEnter, onAreaLeave }}>
      {children}
    </DraggableAreaContext.Provider>
  )
}

export { DraggableAreaContext }
export default DraggableAreaProvider
