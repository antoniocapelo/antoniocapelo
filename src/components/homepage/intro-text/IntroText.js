import styled from "@emotion/styled"
import { animated } from "react-spring"
import { color, layout, space, typography } from "styled-system"
import theme from "../../../theme"

const IntroText = styled(animated.h1)`
${typography}
${space} 
${color}
${layout}
line-height:1.1;
font-size: clamp(2rem, 3vw, 4.5rem);
position: relative;
width: 100%;
will-change: filter;

  span {
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: ${theme.colors.primary};
      color: transparent
  }

  @media (max-width: ${theme.breakpoints.md}) {
    line-height: 1.25;
    font-size: clamp(2rem, 5vw, 5rem);
  }

`

IntroText.defaultProps = {
  color: "primary",
}

export default IntroText
