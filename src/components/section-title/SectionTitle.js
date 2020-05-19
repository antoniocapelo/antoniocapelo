import styled from "@emotion/styled"
import { color, typography } from "styled-system"

const SectionTitle = styled("h2")`
  ${color}
  ${typography}
  font-size: clamp(2rem, 12.5vw, 16rem);
  line-height: 1;
`

export default SectionTitle
