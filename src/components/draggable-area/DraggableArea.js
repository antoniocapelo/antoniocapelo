import useDraggableAreaContext from "../../providers/draggable-area-provider/useDraggableAreaContext"
import React, { useEffect, useRef } from "react"
import useIntersectionObserver from "../../hooks/useIntersectionObserver"

const DraggableArea = ({ children, props }) => {
  const target = useRef()
  const { onAreaEnter, onAreaLeave } = useDraggableAreaContext()

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

  useEffect(() => {
    if (!target.current) {
      return
    }
    const body = document.body
    const handleMouseIn = () => {
      onAreaEnter()
    }
    const handleMouseOut = () => {
      onAreaLeave()
    }
    target.current.addEventListener("mouseenter", handleMouseIn)
    target.current.addEventListener("mouseleave", handleMouseOut)
    return () => {
      target.current.removeEventListener("mouseenter", handleMouseIn)
      target.current.removeEventListener("mouseleave", handleMouseOut)
    }
  }, [target])

  return (
    <div ref={target} {...props}>
      {children}
    </div>
  )
}

export default DraggableArea
