import styled from "@emotion/styled"
import React, { useRef } from "react"
import { animated, config, useChain, useSpring, useTrail } from "react-spring"
import Col from "../../../layout/col/Col"
import Content from "../../../layout/content"
import Row from "../../../layout/row"
import useLoadProgress from "../../../providers/load-progress/useLoadProgress"
import theme from "../../../theme"
import IntroText from "../intro-text"

const IntroContent = styled(Content)`
  min-height: calc(100vh - 140px);
  max-height: 1400px;

  @media (max-width: ${theme.breakpoints.md}) {
    max-height: none;
    height: calc(100vh - 52px);

    @supports (-webkit-touch-callout: none) {
      /* The hack for Safari */
      height: calc(100vh - ${48 + theme.layout.iosBottomBarHeight}px);
    }
  }
  max-height: 200px;
`

const RowAnimated = animated(Row)

const items = [
  {
    __html: `Hey, I’m António Capelo, a <span>Design-oriented</span> Engineer.`,
  },
  {
    __html: ` I work mostly on the front-end stack, creating <span>performant</span> applications which are <span>pleasant</span> to use.`,
  },
]

const Intro = () => {
  const { loaderReady } = useLoadProgress()
  const springRef = useRef()
  const props = useSpring({
    opacity: loaderReady ? 1 : 0,
    ref: springRef,
    config: config.gentle,
    delay: 500,
    from: {
      opacity: 0,
      transform: "translateY(24px)",
    },
  })
  const trailRef = useRef()
  const trail = useTrail(items.length, {
    delay: 400,
    filter: loaderReady ? "brightness(1)" : "brightness(0.3)",
    transform: loaderReady ? `translateY(0)` : `translateY(40px)`,
    from: { filter: "brightness(0)" },
    ref: trailRef,
  })

  useChain([springRef, trailRef])

  return (
    <IntroContent
      bg="dark"
      py={[6, 8, 8, 9]}
      data-scroll-section
      display="flex"
      alignItems="flex-end"
    >
      <RowAnimated style={props}>
        <Col size={[1, 1, 9 / 12]} ml={["0%", "0%", "25%"]}>
          {trail.map(({ filter, transform }, index) => (
            <IntroText
              mb={index === 0 ? [4, 5, 7] : 5}
              key={items[index].__html}
              style={{ filter, transform }}
              dangerouslySetInnerHTML={items[index]}
            ></IntroText>
          ))}
        </Col>
      </RowAnimated>
    </IntroContent>
  )
}

export default Intro
