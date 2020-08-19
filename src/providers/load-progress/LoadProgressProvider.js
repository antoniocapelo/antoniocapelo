import FontFaceObserver from "fontfaceobserver"
import React, { useEffect, useState } from "react"

const LoadProgressContext = React.createContext()

const LoadProgressProvider = ({ children }) => {
  const [numRequests, setNumRequests] = useState(1)
  const [requestsDone, setRequestsDone] = useState(0)
  const [loaderReady, setLoaderReady] = useState(false)

  const incrementRequests = a => {
    console.log(a)

    setNumRequests(prevVal => {
      return prevVal + 1
    })
  }
  const requestDone = () => {
    setRequestsDone(prevVal => {
      return prevVal + 1
    })
  }
  const onLoaderDone = () => {
    setLoaderReady(true)
  }

  var font = new FontFaceObserver("Messapia-bold", {
    weight: 700,
  })

  useEffect(() => {
    font.load().then(function () {
      requestDone()
    })
  }, [])

  console.log({ numRequests, requestsDone })

  return (
    <LoadProgressContext.Provider
      value={{
        incrementRequests,
        requestDone,
        loaderReady,
        onLoaderDone,
        progress: Math.max(
          0,
          numRequests === 0 ? 0 : requestsDone / numRequests
        ),
      }}
    >
      {children}
    </LoadProgressContext.Provider>
  )
}

export { LoadProgressContext }
export default LoadProgressProvider
