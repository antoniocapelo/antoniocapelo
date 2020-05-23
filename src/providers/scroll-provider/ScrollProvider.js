import React, { useEffect, useRef } from "react"

const ScrollContext = React.createContext()

export default ({ children }) => {
  const LocoScroll = useRef(null)

  useEffect(() => {
    const LocomotiveScroll = require("locomotive-scroll").default
    LocoScroll.current = new LocomotiveScroll({
      el: document.querySelector("main"),
      smooth: true,
    })

    window.ls = LocoScroll.current
  }, [])

  return (
    <ScrollContext.Provider value={LocoScroll}>
      {children}
    </ScrollContext.Provider>
  )
}

export { ScrollContext }
