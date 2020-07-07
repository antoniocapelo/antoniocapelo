import React, { useState } from "react"
import { a, config, useTransition } from "react-spring"
import Col from "../../../../layout/col/Col"
import Row from "../../../../layout/row"
import Box from "../../../box"
import { Button, Link } from "../../../link-button/LinkButton"
import A from "../../../typography/anchor"
import Copy from "../../../typography/copy/Copy"

const ProjectName = ({ children, selected, align, onClick, url }) => (
  <>
    <Button tabIndex="0" selected={selected} align={align} onClick={onClick}>
      <span>{children}</span>
    </Button>
    <Link
      selected={false}
      align={align}
      rel="noopener noreferrer"
      target="_blank"
      href={url}
    >
      <span>{children}</span>
    </Link>
  </>
)

const List = ({ details, onMouseEnter, selectedIdx, align, ...props }) => (
  <Col
    size={[1, 6 / 12]}
    {...props}
    flexDirection="column"
    display="flex"
    justifyContent={[
      align === "left" ? "flex-start" : "flex-end",
      "flex-start",
    ]}
  >
    {details.map((el, idx) => (
      <ProjectName
        align={align}
        key={el.id}
        url={el.url}
        onClick={onMouseEnter.bind(null, idx)}
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
      <Col size={[0, 5 / 12]} display={["none", "block"]} position="relative">
        <div
          data-scroll
          data-scroll-sticky
          data-scroll-target={`#details-${name}`}
          style={{ height: "auto" }}
        >
          {transitions.map(({ item, key, props }) => (
            <a.div style={props} key={`${key}-view`}>
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
