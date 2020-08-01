import React from "react"
import Col from "../../../layout/col/Col"
import Content from "../../../layout/content"
import Row from "../../../layout/row"
import SectionTitle from "../../section-title/SectionTitle"
import Copy from "../../typography/copy"
import ProjectDetails from "./project-details"

const Projects = ({
  title,
  name,
  subtitle,
  projects,
  align = "left",
  ...props
}) => {
  return (
    <Content bg="dark" py={[6, 8, 10]} data-scroll-section id={name} {...props}>
      <SectionTitle color="primary" textAlign={align} mb={["4", "6", "7"]}>
        {title}
      </SectionTitle>
      <Row mb="6">
        <Col
          size={[1, 1, 8 / 12]}
          ml={align === "right" ? ["0", "0", "33.333%"] : undefined}
        >
          <Copy textAlign={align} light>
            {subtitle}
          </Copy>
        </Col>
      </Row>
      <ProjectDetails name={name} align={align} details={projects} />
    </Content>
  )
}

export default Projects
