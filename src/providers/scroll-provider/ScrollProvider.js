import React, { useEffect, useRef } from "react"

const ScrollContext = React.createContext()

export default ({ children }) => {
  const LocoScroll = useRef(null)

  useEffect(() => {
    const LocomotiveScroll = require("locomotive-scroll").default
    LocoScroll.current = new LocomotiveScroll({
      el: document.querySelector("body"),
      smooth: true,
    })

    const t = setTimeout(() => {
      LocoScroll.current.update()
      LocoScroll.current.on("scroll", () => {
        const body = document.body
        if (body.classList.contains("drag")) {
          body.classList.remove("drag")
        }
      })
    }, 100)

    window.ls = LocoScroll.current

    return () => {
      clearTimeout(t)
      LocoScroll.current.destroy()
    }
  }, [])

  return (
    <ScrollContext.Provider value={LocoScroll}>
      {children}
    </ScrollContext.Provider>
  )
}

export { ScrollContext }
