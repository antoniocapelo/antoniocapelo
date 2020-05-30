import React, { useEffect, useState } from "react"

const UserAgentContext = React.createContext()

export default ({ children }) => {
  const [isIos, setIsIos] = useState(false)
  useEffect(() => {
    setIsIos(/iphone|ipad|ipod/i.test(window.navigator.userAgent))
  }, [])

  return (
    <UserAgentContext.Provider
      value={{
        isIos,
      }}
    >
      {children}
    </UserAgentContext.Provider>
  )
}

export { UserAgentContext }
