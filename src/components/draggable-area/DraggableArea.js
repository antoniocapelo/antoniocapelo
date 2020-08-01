import React from "react"

const DraggableArea = ({ children, ...props }) => {
  return (
    <div data-draggable {...props}>
      {children}
    </div>
  )
}

export default DraggableArea
