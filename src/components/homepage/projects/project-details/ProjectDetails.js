import { css } from "@emotion/core"
import styled from "@emotion/styled"
import React, { useState } from "react"
import { a, config, useTransition } from "react-spring"
import { typography } from "styled-system"
import Col from "../../../../layout/col/Col"
import Row from "../../../../layout/row"
import Box from "../../../box"
import A from "../../../typography/anchor"
import Copy from "../../../typography/copy/Copy"

const buttonStyle = ({ theme, selected }) => css`
  display: block;
  border: none;
  padding: 0;
  background: transparent;
  margin-bottom: ${theme.space[4]}px;
  max-width: 460px;
  text-align: left;
  font-size: clamp(${theme.fontSizes.xs}, 4vw, ${theme.fontSizes.xl});

  &:last-of-type {
    margin-bottom: 0;
  }

  span {
    position: relative;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: ${theme.colors.primary};
    font-family: ${theme.fonts.heading};
    color: ${selected ? theme.colors.primary : "transparent"};
    transition: color ${theme.transitions.durations.normal}ms
      ${theme.transitions.easings.out};

    &:after {
      content: "";
      position: absolute;
      display: block;
      height: 4px;
      width: ${theme.space[4]}px;
      bottom: 0.45em;
      right: -${theme.space[5]}px;
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
      color: ${theme.colors.primary};
    }
  }

  &:focus,
  &:active {
    outline: none;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    span:after {
      display: none;
    }
  }
`

const ProjectButton = styled("button")`
  ${typography}
  ${buttonStyle}
`

// ProjectButton.defaultProps = {
//   fontSize: ["md", "md", "xl"],
// }

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

const List = ({ details, onMouseEnter, selectedIdx, align, ...props }) => (
  <Col size={6 / 12} {...props}>
    {details.map((el, idx) => (
      <ProjectName
        key={el.url}
        url={el.url}
        onEnter={onMouseEnter.bind(null, idx)}
        selected={selectedIdx === idx}
        idx={idx}
      >
        {el.name}
      </ProjectName>
    ))}
  </Col>
)

const ProjectDetails = ({ name, details, align = "left" }) => {
  const [selectedIdx, selectItem] = useState(0)
  const descs = details.map(({ description, url }, idx) => ({
    description: description.description,
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
    <Row position="relative">
      <Box
        id={`details-${name}`}
        position="absolute"
        top={[-48, -64, -88]}
        bottom="0"
      ></Box>
      {align === "left" && (
        <List
          align={align}
          details={details}
          onMouseEnter={onMouseEnter}
          selectedIdx={selectedIdx}
        />
      )}
      <Col size={[5 / 12]} position="relative">
        <div
          data-scroll
          data-scroll-sticky
          data-scroll-target={`#details-${name}`}
          style={{ height: "auto" }}
        >
          {transitions.map(({ item, key, props }) => (
            <a.div style={props} key={key}>
              <Copy light pb="4" pr={align === "right" ? ["2", "3"] : "0"}>
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
                View
              </A>
            </a.div>
          ))}
        </div>
      </Col>
      {/* <Col size={[0, 0, 2 / 12]} display={["none", "none", "block"]} /> */}
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
