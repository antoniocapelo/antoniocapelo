import React, { Children, cloneElement } from "react"
import Box from "../../components/box"

const Row = ({ children, space = 0, ...props }) => {
  const validChildren = Children.toArray(children)
  const columns = Children.map(validChildren, (el, idx) =>
    cloneElement(el, {
      px: space / 2,
    })
  )
  return (
    <Box width="100%">
      <Box flex="1" mx={-space / 2} display="flex" flexWrap="wrap" {...props}>
        {columns}
      </Box>
    </Box>
  )
}

export default Row
