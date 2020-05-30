import React from "react"
import Col from "../../../layout/col/Col"
import Content from "../../../layout/content"
import Row from "../../../layout/row"
import IntroText from "../intro-text"

const Intro = ({ fullHeight, ...props }) => {
  return (
    <Content bg="dark" py={[6, 8, 9]} data-scroll-section id="about">
      <Row pt="15.5vw">
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
    </Content>
  )
}

export default Intro
