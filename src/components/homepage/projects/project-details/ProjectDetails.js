import { css } from "@emotion/core"
import styled from "@emotion/styled"
import React, { useState } from "react"
import { a, config, useTransition } from "react-spring"
import { typography } from "styled-system"
import Col from "../../../../layout/col/Col"
import Row from "../../../../layout/row"
import A from "../../../typography/anchor"
import Copy from "../../../typography/copy/Copy"

const mock = [
  {
    label: "Jumo",
    url: "https://jumo.world",
    description: "Building products for digital financial services",
  },
  {
    label: "yld",
    url: "https://yld.io",
    description: "Providing frontend solutions to clients around the world",
  },
  {
    label: "Moxy",
    url: "https://moxy.studio",
    description: "Creating experiences with JS, CSS and WebGL",
  },
  {
    label: "Mindera",
    url: "https://mindera.com",
    description: "Building robust web and mobile apps for many industries",
  },
  {
    label: "Blip",
    url: "https://blip.pt",
    description: "Developing high-transactional betting products",
  },
]

const buttonStyle = ({ theme, selected }) => css`
  display: block;
  border: none;
  padding: 0;
  background: transparent;
  margin-bottom: ${theme.space[4]}px;
  max-width: 460px;

  &:last-of-type {
    margin-bottom: 0;
  }

  span {
    position: relative;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: ${theme.colors.primary};
    font-family: ${theme.fonts.heading};
    color: transparent;
    transition: color ${theme.transitions.durations.normal}ms
      ${theme.transitions.easings.out};
    padding-right: 16px;

    &:after {
      content: "";
      position: absolute;
      display: block;
      height: 4px;
      width: ${theme.space[4]}px;
      top: 55%;
      right: -${theme.space[4]}px;
      background: ${theme.colors.primary};
      transform-origin: left center;
      transform: scale3d(${selected ? "1" : "0"}, 1, 1);
      transition: transform ${theme.transitions.durations.fast}ms
        ${theme.transitions.easings.out};
    }
  }

  &:focus,
  &:hover {
    span {
      color: ${selected ? "transparent" : theme.colors.primary};
    }
  }

  &:focus,
  &:active {
    outline: none;
  }
`

const ProjectButton = styled("button")`
  ${typography}
  ${buttonStyle}
`

ProjectButton.defaultProps = {
  fontSize: "xl",
}

const ProjectName = ({ children, selected, idx, onEnter }) => (
  <ProjectButton
    tabIndex="0"
    selected={selected}
    rel="noopener noreferrer"
    onClick={onEnter}
  >
    <span>{children}</span>
  </ProjectButton>
)

const List = ({ details, onMouseEnter, selectedIdx, align }) => (
  <Col size={[7 / 12]}>
    {details.map((el, idx) => (
      <ProjectName
        key={el.url}
        url={el.url}
        onEnter={onMouseEnter.bind(null, idx)}
        selected={selectedIdx === idx}
        idx={idx}
      >
        {el.label}
      </ProjectName>
    ))}
  </Col>
)

const ProjectDetails = ({ details = mock, align = "left" }) => {
  const [selectedIdx, selectItem] = useState(0)
  const descs = details.map(({ description, url }, idx) => ({
    description,
    url,
    idx,
  }))
  const transitions = useTransition(descs[selectedIdx], el => el.url, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.gentle,
  })

  const onMouseEnter = idx => selectItem(idx)

  return (
    <Row>
      {align === "left" && (
        <List
          align={align}
          details={details}
          onMouseEnter={onMouseEnter}
          selectedIdx={selectedIdx}
        />
      )}
      <Col size={[5 / 12]} position="relative">
        {transitions.map(({ item, key, props }) => (
          <a.div style={props} key={key}>
            <Copy light pt="4" pb="4">
              {item.description}
            </Copy>
            <A
              fontSize={["xxs", "xs"]}
              target="_blank"
              href={item.url}
              rel="noopener noreferrer"
              light
              pt="3"
            >
              Visit website
            </A>
          </a.div>
        ))}
      </Col>
      <Col size={[0, 0, 1 / 12]} display={["none", "none", "block"]}></Col>
      {align === "right" && (
        <List
          align={align}
          details={details}
          onMouseEnter={onMouseEnter}
          selectedIdx={selectedIdx}
        />
      )}
    </Row>
  )
}

export default ProjectDetails
