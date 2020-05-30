import styled from "@emotion/styled"
import React from "react"
import { color, space, typography } from "styled-system"
import theme from "../../../theme"

const Heading1 = styled("h1")`
  ${typography}
  ${space}
  ${color}
  font-family: ${theme.fonts.heading};
  transform: translateY(${0.11}em);
  &:before {
    content: "";
    margin-top: -${0.48}em;
    display: block;
    height: 0;
  }
`
const Heading2 = Heading1.withComponent("h2")
const Heading3 = Heading1.withComponent("h3")

const Heading4 = styled("h4")`
  ${typography}
  ${space}
  ${color}
  text-transform: uppercase;
  transform: translateY(${0.1}em);
  &:before {
    content: "";
    margin-top: -${0.46}em;
    display: block;
    height: 0;
  }
`

const Heading5 = Heading4.withComponent("h5")
const Heading6 = Heading4.withComponent("h6")

const Heading = ({ level = 1, fontFamily = "heading", ...props }) => {
  switch (level) {
    case 1:
      return (
        <Heading1 fontFamily={fontFamily} fontSize="xxl" m="0" {...props} />
      )
    case 2:
      return <Heading2 fontFamily={fontFamily} fontSize="xl" m="0" {...props} />
    case 3:
      return <Heading3 fontFamily={fontFamily} fontSize="lg" m="0" {...props} />
    case 4:
      return <Heading4 fontFamily={fontFamily} fontSize="sm" m="0" {...props} />
    case 5:
      return <Heading5 fontFamily={fontFamily} fontSize="sm" m="0" {...props} />
    case 6:
      return <Heading6 fontFamily={fontFamily} fontSize="sm" m="0" {...props} />
    default:
      return null
  }
}

export default Heading
