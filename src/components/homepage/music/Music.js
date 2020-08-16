import styled from "@emotion/styled"
import Img from "gatsby-image"
import React from "react"
import Col from "../../../layout/col/Col"
import Content from "../../../layout/content"
import Row from "../../../layout/row"
import theme from "../../../theme"
import Box from "../../box"
import Carousel from "../../carousel"
import SectionTitle from "../../section-title/SectionTitle"
import A from "../../typography/anchor"
import Copy from "../../typography/copy"

const spacing = theme.space[6]

const StyledCover = styled(Img)`
  height: "100%";
`

const CoverWrapper = styled(Box)`
  ${StyledCover} {
    filter: brightness(0.85) saturate(0);
    transition: filter ${theme.transitions.durations.fast}ms
      ${theme.transitions.easings.out};

    img,
    picture {
      -webkit-user-drag: none;
      -khtml-user-drag: none;
      -moz-user-drag: none;
      -o-user-drag: none;
      user-drag: none;
    }
  }

  body.mousedown & {
    ${StyledCover} {
      filter: brightness(0.85) saturate(0);
    }
  }
`

const ListenBox = styled(Box)`
  &:focus,
  &:hover {
    & + ${StyledCover} {
      filter: none;
    }
  }
`

const Music = ({ items }) => {
  return (
    <Content py={[6, 8, 10]} data-scroll-section id="music" bg="subtle">
      <SectionTitle color="dark" mb={["4", "6", "7"]}>
        Music
      </SectionTitle>
      <Row mb="6">
        <Col size={[1, 1, 8 / 12]}>
          <Copy>
            analog samplers / vintage synths / chill-hop / jazzy hip-hop
          </Copy>
        </Col>
      </Row>

      <Carousel spacing={spacing}>
        {items.map(({ id, name, url, image: { fluid } }) => (
          <CoverWrapper
            bg="dark"
            width={[200, 200, 350]}
            height={[200, 200, 350]}
            key={`${id}`}
            position="relative"
          >
            <ListenBox
              position="absolute"
              top="-1px"
              left="-1px"
              style={{ zIndex: 1 }}
              alignItems="center"
              justifyContent="center"
              display="flex"
              bg="subtle"
            >
              <A
                href={url}
                target="_blank"
                p="3"
                pt="2"
                fontSize={["xxs", "xs"]}
              >
                Listen
              </A>
            </ListenBox>
            <StyledCover fluid={fluid} alt={`${name} album cover`} />
          </CoverWrapper>
        ))}
      </Carousel>
    </Content>
  )
}

export default Music
