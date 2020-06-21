import styled from "@emotion/styled"
import Img from "gatsby-image"
import React from "react"
import Content from "../../../layout/content"
import theme from "../../../theme"
import Box from "../../box"
import Carousel from "../../carousel"
import SectionTitle from "../../section-title/SectionTitle"
import A from "../../typography/anchor"

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

  &:hover ${StyledCover} {
    filter: none;
  }

  body.mousedown & {
    ${StyledCover} {
      filter: brightness(0.85) saturate(0);
    }
  }
`

const Music = ({ items }) => {
  return (
    <Content py={[6, 8, 9]} data-scroll-section id="music" bg="subtle">
      <SectionTitle color="dark" mb={["4", "6", "7"]}>
        Music
      </SectionTitle>

      <Carousel spacing={spacing}>
        {items.map(({ id, url, image: { fluid } }) => (
          <CoverWrapper
            bg="dark"
            width={[200, 200, 350]}
            height={[200, 200, 350]}
            key={`${id}`}
            position="relative"
          >
            <Box
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
            </Box>
            <StyledCover fluid={fluid} />
          </CoverWrapper>
        ))}
      </Carousel>
    </Content>
  )
}

export default Music
