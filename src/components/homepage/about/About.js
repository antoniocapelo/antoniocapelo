import styled from "@emotion/styled"
import React from "react"
import Col from "../../../layout/col/Col"
import Content from "../../../layout/content"
import Row from "../../../layout/row"
import Image from "../../image"
import Copy from "../../typography/copy"

const BgWrapper = styled(Col)`
  position: relative;
`

const ImageWrapper = styled(Image)`
  height: 95vh;
  max-height: 680px;
`

const About = () => {
  return (
    <Content py={[6, 8, 10]} bg="primary" data-scroll-section>
      <Row space={4} style={{ overflow: "hidden" }}>
        <BgWrapper size={[1, 0.5, 5 / 12]}>
          <div
            data-scroll-speed="-2"
            data-scroll
            style={{
              position: "absolute",
              top: 0,
              left: 12,
              right: 12,
              bottom: 0,
            }}
          >
            <ImageWrapper />
          </div>
          {/* <Bg img={img} data-scroll-speed="-2" data-scroll /> */}
        </BgWrapper>
        <Col
          size={[0, 0, 0, 1 / 12]}
          display={["none", "none", "none", "block"]}
        ></Col>
        <Col
          size={[1, 6 / 12, 7 / 12, 6 / 12]}
          alignSelf="center"
          py={[2, 2, 4, 4]}
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
