import React from "react"
import Box from "../../components/box"

const Col = ({ size = 1, ...props }) => <Box width={size} {...props} />

export default Col
