import styled from "@emotion/styled"
import React from "react"
import { typography, space, color, layout } from "styled-system"
import theme from "../../theme"

const IntroTextComponent = styled("h1")`
${typography}
${space} 
${color}
${layout}

    > span {
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: ${theme.colors.primary};
        color: transparent
    }
`

const IntroText = props => (
  <IntroTextComponent color="primary" fontSize="xl" {...props} />
)

export default IntroText
