import styled from "@emotion/styled"
import React from "react"
import Col from "../../../layout/col/Col"
import Content from "../../../layout/content"
import Row from "../../../layout/row"
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

const Intro = () => {
  return (
    <IntroContent
      bg="dark"
      py={[6, 8, 8, 9]}
      data-scroll-section
      display="flex"
      alignItems="flex-end"
    >
      <Row>
        <Col size={[1, 1, 9 / 12]} ml={["0%", "0%", "25%"]}>
          <IntroText pb={[4, 5, 7]}>
            Hey, I’m António Capelo, a <span>Design-oriented</span> Engineer.
          </IntroText>
          <IntroText>
            I work mostly on the front-end stack, creating{" "}
            <span>performant</span> applications which are <span>pleasant</span>{" "}
            to use.
          </IntroText>
        </Col>
      </Row>
    </IntroContent>
  )
}

export default Intro
