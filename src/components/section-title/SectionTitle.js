import styled from "@emotion/styled"
import { color, space, typography } from "styled-system"

const SectionTitle = styled("h2")`
  ${color}
  ${typography}
  ${space}
  font-size: clamp(2rem, 9vw, 14.65rem);
  line-height: 1;
  transform: translateY(${0.11}em);
  &:before {
    content: "";
    margin-top: -0.23em;
    display: block;
    height: 0;
  }
`

export default SectionTitle
