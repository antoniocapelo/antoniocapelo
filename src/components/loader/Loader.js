import styled from "@emotion/styled"
import { useEffect, useState } from "react"
import { animated, useSpring } from "react-spring"
import useLoadProgress from "../../providers/load-progress/useLoadProgress"
import useScrollContext from "../../providers/scroll-provider/useScrollContext"
import theme from "../../theme"
import Box from "../box"

const Container = styled(Box)`
  height: 100px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
`

const Bar = styled(animated.div)`
  height: 2px;
  background: ${theme.colors.subtle};
  position: absolute;
  bottom: 74px;
  transform-origin: top center;
  width: 100vw;

  @media (max-width: ${theme.breakpoints.md}) {
    bottom: 50px;

    @supports (-webkit-touch-callout: none) {
      /* The hack for Safari */
      bottom: ${48 + theme.layout.iosBottomBarHeight}px;
    }
  }
`

const Loader = () => {
  const { progress, onLoaderDone } = useLoadProgress()
  const [animateHeight, setAnimateHeight] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const LSScroll = useScrollContext()

  useEffect(() => {
    if (!LSScroll.current) {
      return
    }

    LSScroll.current.stop()
  }, [LSScroll.current])

  const handleRest = () => {
    if (progress * 100 >= 100) {
      onLoaderDone()
      setAnimateHeight(true)
    }

    if (animateHeight) {
      setShowContent(true)
    }
  }
  const props = useSpring({
    animVariables: [progress, animateHeight ? 70 : 1],
    onRest: handleRest,
  })

  if (showContent) {
    if (LSScroll.current) {
      LSScroll.current.start()
    }
    return null
  }

  return (
    <Container bg={"dark"}>
      <Bar
        style={{
          transform: props.animVariables.interpolate(
            (progress, height) => `scale3d(${progress}, ${height}, 1)`
          ),
        }}
      />
    </Container>
  )
}

export default Loader
