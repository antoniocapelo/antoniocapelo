import styled from "@emotion/styled"
import { useState } from "react"
import { animated, useSpring } from "react-spring"
import theme from "../../theme"
import Box from "../box"

const Container = styled(Box)`
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
`

const TopSection = styled(Box)`
  height: calc(100vh - 140px);

  @media (max-width: ${theme.breakpoints.md}) {
    height: calc(100vh - 52px);

    @supports (-webkit-touch-callout: none) {
      /* The hack for Safari */
      height: calc(100vh - ${48 + theme.layout.iosBottomBarHeight}px);
    }
  }
`

const Bar = styled(animated.div)`
  height: 2px;
  background: ${theme.colors.primary};
  position: absolute;
  bottom: 140px;
  transform-origin: top center;
  width: 100vw;

  @media (max-width: ${theme.breakpoints.md}) {
    height: 52px;

    @supports (-webkit-touch-callout: none) {
      /* The hack for Safari */
      height: ${48 + theme.layout.iosBottomBarHeight}px;
    }
  }
`

const Loader = () => {
  const [p, setP] = useState(0)
  const [h, setH] = useState(false)
  const handleRest = () => {
    if (p >= 100) {
      setH(true)
    }
  }
  const props = useSpring({
    ph: [p / 100, h ? 70 : 1],
    onRest: handleRest,
  })

  return (
    <Container bg="dark" onClick={() => setP(p + 50)}>
      <TopSection bg="dark" />
      <Bar
        style={{
          transform: props.ph.interpolate((p, h) => `scale3d(${p}, ${h}, 1)`),
        }}
      />
    </Container>
  )
}

export default Loader
