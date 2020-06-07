import styled from "@emotion/styled"
import {
  color,
  compose,
  flexbox,
  layout,
  position,
  space,
  typography,
} from "styled-system"

const Box = styled("div")`
  ${compose(typography, space, flexbox, color, layout, position)}
`

export default Box
