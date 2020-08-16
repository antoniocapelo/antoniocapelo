import styled from "@emotion/styled"
import React from "react"
import Col from "../../../layout/col/Col"
import Content from "../../../layout/content"
import Row from "../../../layout/row"
import theme from "../../../theme"
import Image from "../../image"
import Copy from "../../typography/copy"

const BgWrapper = styled(Col)`
  position: relative;
`

const ImageWrapper = styled(Image)`
  height: 95vh;
  max-height: 680px;
`

const Bg = styled("div")`
  position: absolute;
  top: 0;
  left: 12px;
  right: 12px;
  bottom: 0;

  @media (min-width: ${theme.breakpoints.md}) and (max-width: 1024px) {
    img {
      height: 80% !important;
    }
  }

  @media (max-width: ${theme.breakpoints.md}) {
    display: none;
  }
`

const CopyAbout = styled(Copy)`
  @media (min-width: ${theme.breakpoints.md}) and (max-width: 1024px) {
    font-size: ${theme.fontSizes.xs};
  }
`

const About = () => {
  return (
    <Content py={[6, 8, 10]} bg="subtle" data-scroll-section id="about">
      <Row space={4} style={{ overflow: "hidden" }}>
        <BgWrapper size={[1, 1, 5 / 12]}>
          <Bg data-scroll-speed="-2" data-scroll>
            <ImageWrapper alt="Capelo profile picture" />
          </Bg>
        </BgWrapper>
        <Col
          size={[0, 0, 0, 1 / 12]}
          display={["none", "none", "none", "block"]}
        ></Col>
        <Col size={[1, 1, 7 / 12, 6 / 12]} alignSelf="center" py={[2, 2, 4, 4]}>
          <CopyAbout mb="4">
            With almost a decade of web development experience, I consider
            myself a <span>creative engineer</span> who’s efficient in
            delivering high-quality products.
          </CopyAbout>

          <CopyAbout mb="4">
            I’m focused on the <span>end-user</span> and in providing the best
            possible experience when interacting with the UI.
          </CopyAbout>

          <CopyAbout>
            I work mostly with <span>TypeScript</span>, <span>React</span>,{" "}
            <span>CSS</span> and <span>WebGL</span> but I’m also versed in{" "}
            <span>back-end</span> solutions, <span>CI/CD</span> and{" "}
            <span>testing</span>.
          </CopyAbout>
        </Col>
      </Row>
    </Content>
  )
}

export default About
