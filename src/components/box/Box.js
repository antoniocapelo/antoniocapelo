import styled from "@emotion/styled"
import {
  color,
  compose,
  flexbox,
  layout,
  space,
  typography,
} from "styled-system"

const Box = styled("div")`
  ${compose(typography, space, flexbox, color, layout)}
`

export default Box
