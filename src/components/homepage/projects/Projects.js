import React from "react"
import Col from "../../../layout/col/Col"
import Content from "../../../layout/content"
import Row from "../../../layout/row"
import SectionTitle from "../../section-title/SectionTitle"
import Copy from "../../typography/copy"
import ProjectDetails from "./project-details"

const Projects = ({ title, subtitle, projects, id, align = "left" }) => {
  return (
    <Content bg="dark" py={[6, 8, 9]} data-scroll-section id={id}>
      <SectionTitle color="primary" textAlign={align} mb={["4", "6", "7"]}>
        {title}
      </SectionTitle>
      <Row mb="6">
        <Col size={[1, 1, 8 / 12]}>
          <Copy light>{subtitle}</Copy>
        </Col>
      </Row>
      <ProjectDetails />
    </Content>
  )
}

export default Projects
