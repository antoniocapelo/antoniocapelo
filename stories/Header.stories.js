import React, { useState } from "react"
import HeaderComponent from "../src/components/header"
import Copy from "../src/components/typography/copy"
import theme from "../src/theme"

export default {
  title: "Header",
  component: Header,
}

const HeaderDemo = () => {
  const [current, setCurrent] = useState("#about")
  const handleClick = path => setCurrent(path)

  return (
    <>
      <HeaderComponent onClick={handleClick} current={current} />
      <Copy fontSize="xs">
        Note: header only appears on screens bigger than {theme.breakpoints.md}
      </Copy>
    </>
  )
}

export const Header = () => <HeaderDemo />
