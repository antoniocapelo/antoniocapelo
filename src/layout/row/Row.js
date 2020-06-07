import React, { Children, cloneElement } from "react"
import Box from "../../components/box"
import theme from "../../theme"

const Row = ({ children, space = [4], ...props }) => {
  const validChildren = Children.toArray(children)
  const normalizedSpace = typeof space === "number" ? [space] : space
  const rowSpace = normalizedSpace.map(el => `-${theme.space[el] / 2}px`)
  const colSpace = normalizedSpace.map(el => `${theme.space[el] / 2}px`)
  const columns = Children.map(validChildren, el =>
    cloneElement(el, {
      px: colSpace,
    })
  )

  return (
    <Box width="100%">
      <Box flex="1" mx={rowSpace} display="flex" flexWrap="wrap" {...props}>
        {columns}
      </Box>
    </Box>
  )
}

export default Row
