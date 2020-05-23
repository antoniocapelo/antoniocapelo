import styled from "@emotion/styled"
import React from "react"
import img from "../../../images/profile-pic.jpg"
import Col from "../../../layout/col/Col"
import Content from "../../../layout/content"
import Row from "../../../layout/row"
import Copy from "../../typography/copy"

const Bg = styled.div`
  height: 100%;
  background-size: cover;
  background-position: top center;
  opacity: 0.75;
  // mix-blend-mode: multiply;
  background-image: url(${props => props.img});
`

const About = ({ fullHeight, ...props }) => {
  return (
    <Content py={[6, 8, 9]} bg="primary" data-scroll-section>
      <Row space={4}>
        <Col size={[1, 0.5, 5 / 12]} data-scroll-speed="2" data-scroll>
          <Bg img={img} />
        </Col>
        <Col
          size={[1, 0.5, 6 / 12]}
          alignSelf="center"
          ml={[0, 0, 0]}
          data-scroll-speed="1"
        >
          <Copy mb="4">
            With almost a decade of web development experience, I consider
            myself a <span>creative engineer</span> who’s efficient in
            delivering high-quality products.
          </Copy>

          <Copy mb="4">
            I’m focused on the <span>end-user</span> and in providing the best
            possible experience when interacting with the UI.
          </Copy>

          <Copy id="test">
            I work mostly with <span>TypeScript</span>, <span>React</span>,{" "}
            <span>CSS</span> and <span>WebGL</span> but I’m also versed in{" "}
            <span>back-end</span> solutions, <span>CI/CD</span> and{" "}
            <span>testing</span>.
          </Copy>
        </Col>
      </Row>
    </Content>
  )
}

export default About
