import React from "react"
import Col from "../../../layout/col/Col"
import Content from "../../../layout/content"
import Row from "../../../layout/row"
import Image from "../../image"
import Copy from "../../typography/copy"

const Intro = ({ fullHeight, ...props }) => {
  return (
    <Content py={[6, 8, 9]} bg="primary">
      <Row space={4}>
        <Col size={[1, 0.5, 5 / 12]}>
          <Image />
        </Col>
        <Col size={[1, 0.5, 6 / 12]} alignSelf="center" ml={[0, 0, "8.33333%"]}>
          <Copy mb="4">
            With almost a decade of web development experience, I consider
            myself a creative engineer who’s efficient in delivering
            high-quality products.
          </Copy>

          <Copy mb="4">
            I’m focused on the end-user and in providing the best possible
            experience when interacting with the UI.
          </Copy>

          <Copy>
            I work mostly with TypeScript, React, CSS and WebGL but I’m also
            versed in back-end solutions, CI/CD and testing.
          </Copy>
        </Col>
      </Row>
    </Content>
  )
}

export default Intro
