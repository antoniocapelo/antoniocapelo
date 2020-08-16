import React from "react"
import Col from "../../../layout/col/Col"
import Content from "../../../layout/content"
import Row from "../../../layout/row"
import ImageContact from "../../image-contact"
import { Link } from "../../link-button/LinkButton"
import SectionTitle from "../../section-title/SectionTitle"

const ContactItem = ({ children, align, url }) => (
  <Link
    allViewports
    selected={false}
    align={align}
    rel="noopener noreferrer"
    target="_blank"
    href={url}
  >
    <span>{children}</span>
  </Link>
)

const Contact = ({ items }) => {
  return (
    <Content py={[6, 8, 9]} data-scroll-section id="contact" bg="dark">
      <Row>
        <Col size={[1, 1, 8 / 12]}>
          <SectionTitle color="primary" mb={["4", "6", "7"]}>
            Get in touch
          </SectionTitle>
        </Col>
      </Row>
      <Row>
        <Col
          size={[1, 8 / 12]}
          flexDirection="column"
          display="flex"
          justifyContent={["flex-start"]}
        >
          <ContactItem url="mailto:antonio.c.capelo@gmail.com">
            - email
          </ContactItem>
          <ContactItem url="https://twitter.com/antoniocapelo">
            - twitter
          </ContactItem>
          <ContactItem url="https://github.com/antoniocapelo">
            - github
          </ContactItem>
          <ContactItem url="https://www.instagram.com/acapelo/">
            - instagram
          </ContactItem>
          <ContactItem url="https://www.linkedin.com/in/antoniocapelo/">
            - linkedin
          </ContactItem>
        </Col>
        <Col
          size={[0, 4 / 12]}
          display={["none", "flex"]}
          style={{ overflow: "hidden" }}
        >
          <div data-scroll-speed="-2" data-scroll style={{ flex: 1 }}>
            <ImageContact style={{ flex: 1 }} alt="Capelo profile picture" />
          </div>
        </Col>
      </Row>
    </Content>
  )
}

export default Contact
