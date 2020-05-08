import React from "react"

const DraggableArea = ({ children, ...props }) => {
  //   const onIntersect = ([{ isIntersecting, ...rest }]) => {
  //     console.log({ isIntersecting, rest: rest })

  //     if (isIntersecting) {
  //       onAreaEnter(isIntersecting)
  //     }
  //   }

  //   useIntersectionObserver({
  //     target,
  //     onIntersect,
  //     threshold: 1.0,
  //   })

  return (
    <div data-draggable {...props}>
      {children}
    </div>
  )
}

export default DraggableArea
