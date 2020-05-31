import styled from "@emotion/styled"
import React, { useState } from "react"
import { typography } from "styled-system"
import Col from "../../../../layout/col/Col"
import Row from "../../../../layout/row"
import Copy from "../../../typography/copy"

const mock = [
  {
    label: "Jumo",
    url: "https://jumo.world",
    description: "some description",
  },
]

const Anchor = styled("a")`
  ${typography}
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
  color: transparent;
  text-decoration: none;

  &:focus,
  &:active {
    text-decoration: none;
  }
`

Anchor.defaultProps = {
  fontSize: "xl",
}

const DetailLink = ({ label, url, selected, idx }) => (
  <Anchor target="_blank" href={url} rel="noopener noreferrer">
    {label}
  </Anchor>
)

const ProjectDetails = ({ details = mock }) => {
  const [selectedIdx, selectItem] = useState(0)

  return (
    <Row>
      <Col size={[7 / 12]}>
        {details.map((el, idx) => (
          <DetailLink
            label={el.label}
            url={el.url}
            selected={selectedIdx === idx}
            idx={idx}
          />
        ))}
      </Col>
      <Col size={[5 / 12]}>
        <Copy light pt="2.2rem">
          {details[selectedIdx].description}
        </Copy>
      </Col>
    </Row>
  )
}

export default ProjectDetails
